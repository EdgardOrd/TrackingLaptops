import React, { useState, useEffect } from 'react';
import '../style/Table.css';

function LaptopTable({ searchText, apiUrl }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/unknown")
      .then((response) => response.json())
      .then((responseData) => {
        const apiData = responseData.data || []; // Acceder a la propiedad 'data' o establecer un arreglo vacío por defecto
        setData(apiData);
        setFilteredData(apiData); // Mostrar todos los datos sin filtrar inicialmente
      });
  }, [apiUrl]);

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
            {headers.map((header) => (
              <td key={header}>{row[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default LaptopTable;
