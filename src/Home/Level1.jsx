import React from 'react';
import { Link } from 'react-router-dom';

const Level1 = () => {
  return (
    <>
      <div>
        <ul style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: 0 }}>

          <li style={{ listStyle: 'none', margin: '10px' }}>
            <Link to="/introductionLevel1">
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
            <Link to="/beFormLevel1">
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
              <h2 style={{ textAlign: 'center', fontSize: '1.2em', marginTop: '10px' }}>Be-Form</h2>
            </Link>
          </li>

          <li style={{ listStyle: 'none', margin: '10px' }}>
            <Link to="/whquestionLevel1">
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
              <h2 style={{ textAlign: 'center', fontSize: '1.2em', marginTop: '10px' }}>WH-Question</h2>
            </Link>
          </li>

          <li style={{ listStyle: 'none', margin: '10px' }}>
            <Link to="/tenseLevel1">
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
              <h2 style={{ textAlign: 'center', fontSize: '1.2em', marginTop: '10px' }}>Tense</h2>
            </Link>
          </li>

        </ul>
      </div>
    </>
  );
}

export default Level1;
