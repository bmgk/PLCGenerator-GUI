import React, { useEffect } from 'react';
import { getPlaces } from 'api/process/getPlaces';
const res = ['1', '2', '3'];

const ProcessDashboard = () => {
  useEffect(() => {
    getPlaces().then((res) => console.log(res));
  }, []);

  return (
    <ul
      style={{
        display: 'flex',
        margin: '0 auto',
      }}
    >
      {res.map((el) => (
        <li
          style={{
            padding: '2rem',
            border: '1px red solid',
            height: '100px',
            width: '200px',
            margin: '0 1rem',
          }}
        >
          {el}
        </li>
      ))}
    </ul>
  );
};

export default ProcessDashboard;
