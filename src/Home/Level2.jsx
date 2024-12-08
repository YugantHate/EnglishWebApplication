import React from 'react';
import { Link } from 'react-router-dom';

const Level2 = () => {
  return (
    <>
      <div>
        <ul style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: 0 }}>

          <li style={{ listStyle: 'none', margin: '10px' }}>
            <Link to="/introductionLevel2">
              <img
                src="./img/eng.jpeg"
                alt="English Learning"
                style={{
                  width: '100%',
                  maxWidth: '250px',
                  height: 'auto',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'block',
                  margin: '0 auto', // Center the image
                }}
              />
              <h2 style={{ textAlign: 'center', fontSize: '1.2em', marginTop: '10px' }}>Introduction</h2>
            </Link>
          </li>

          <li style={{ listStyle: 'none', margin: '10px' }}>
            <Link to="/modelverbLevel2">
              <img
                src="./img/eng.jpeg"
                alt="English Learning"
                style={{
                  width: '100%',
                  maxWidth: '250px',
                  height: 'auto',
                  borderRadius: '8px',
                  marginBottom: '20px',
                  cursor: 'pointer',
                  display: 'block',
                  margin: '0 auto', // Center the image
                }}
              />
              <h2 style={{ textAlign: 'center', fontSize: '1.2em', marginTop: '10px' }}>Model Verb</h2>
            </Link>
          </li>

          <li style={{ listStyle: 'none', margin: '10px' }}>
            <Link to="/structureLevel1">
              <img
                src="./img/eng.jpeg"
                alt="English Learning"
                style={{
                  width: '100%',
                  maxWidth: '250px',
                  height: 'auto',
                  borderRadius: '8px',
                  marginBottom: '20px',
                  cursor: 'pointer',
                  display: 'block',
                  margin: '0 auto', // Center the image
                }}
              />
              <h2 style={{ textAlign: 'center', fontSize: '1.2em', marginTop: '10px' }}>Structure</h2>
            </Link>
          </li>

        </ul>
      </div>
    </>
  );
}

export default Level2;
