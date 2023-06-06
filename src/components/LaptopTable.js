import React, { useState, useEffect } from 'react';
import moment from 'moment';
import '../style/Table.css';

function LaptopTable({ searchText }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("");
        if (response.ok) {
          const jsonData = await response.json();
          const apiData = jsonData.data || [];
          setData(apiData);
          setFilteredData(apiData);
        } else {
          console.error('Error fetching data:', response.status);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = data.filter((row) => {
      const searchValue = searchText.toLowerCase();

      for (let key in row) {
        if (row.hasOwnProperty(key)) {
          const value = row[key];
          if (value && value.toString().toLowerCase().includes(searchValue)) {
            return true;
          }
        }
      }

      return false;
    });

    setFilteredData(filtered);
  }, [data, searchText]);

  const headers = ["id", "series", "charger", "guest", "state", "record"];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="table-container">
      <table className="responsive-table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((row) => (
            <tr key={row.id}>
              {headers.map((header) => (
                <td key={header}>
                  {header === 'record'
                    ? moment(row[header]).format('MMMM Do, YYYY')
                    : row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => changePage(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
export default LaptopTable;