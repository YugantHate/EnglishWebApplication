import React from 'react'
import { Link } from 'react-router-dom';

function Level3() {
  return (
    <>
    <h1>Grammar part</h1>   
     <div>
        <ul style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: 0 }}>

        <li style={{ listStyle: 'none', margin: '10px' }}>
            <Link to="/article">
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
              <h2 style={{ textAlign: 'center', fontSize: '1.2em', marginTop: '10px' }}>Article</h2>
            </Link>
          </li>

          <li style={{ listStyle: 'none', margin: '10px' }}>
            <Link to="/directandindirectspeech">
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
              <h2 style={{ textAlign: 'center', fontSize: '1.2em', marginTop: '10px' }}>Direct and Indirect speech</h2>
            </Link>
          </li>

          <li style={{ listStyle: 'none', margin: '10px' }}>
            <Link to="/activeandpassivevoice">
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
              <h2 style={{ textAlign: 'center', fontSize: '1.2em', marginTop: '10px' }}>Active and Passive Voice</h2>
            </Link>
          </li>

        </ul>
      </div>
    </>
  )
}

export default Level3;
