import '../style/Table.css';
import { useState,useEffect } from "react";


function TrackingTable()
{
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setData(data));
        // console.log(data);
    }, []);

   const headers = Object.keys(data[0] || {});

  return (
    
      <table className="">
        <thead>
          <tr>
            {headers.map(header => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          
          {data.map((row, index) => (
            <tr key={index}>
              {headers.map(header => (
                <td  key={header}>{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    
  );
}


export default TrackingTable;