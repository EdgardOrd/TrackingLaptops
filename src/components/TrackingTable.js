import React, { useState, useEffect } from 'react';
import moment from 'moment';
import '../style/Table.css';

function TrackingTable({ searchText }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://tc.crc.global:3001/api/trackings/all");
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

  const headers = ["id", "laptopID", "employee", "exit_date", "return_date"];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="table-container">
      <div className="table-wrapper">
        <table className="responsive-table">
          <thead>
            <tr>
              <th>id</th>
              <th>LaptopID</th>
              <th>Employee</th>
              <th>Exit Date</th>
              <th>Return Date</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((row) => (
              <tr key={row}>
              {headers.map((header) => (
                <td key={header}>
                  {header === 'exit_date' || header === 'return_date'
                    ? (row[header] && moment(row[header]).utc().format('MMMM Do, YYYY'))
                    : (row[header] !== 'Invalid date' && row[header]) || ''}
                </td>
              ))}
            </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => changePage(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}

            <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            >
            Next
            </button>
            </div>
      </div>
            );
            }

export default TrackingTable;
