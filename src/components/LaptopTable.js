// LaptopTable.js

// LaptopTable.js

import React, { useState, useEffect } from 'react';
import '../style/Table.css'
function LaptopTable({ searchText }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data); // Mostrar todos los datos sin filtrar inicialmente
      });
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

  const headers = Object.keys(filteredData[0] || {});

  return (
    <table className="">
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredData.map((row) => (
          <tr key={row.id}>
            <td>{row.userId}</td>
            <td>{row.id}</td>
            <td>{row.title}</td>
            <td>{row.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default LaptopTable;
