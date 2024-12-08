import React from 'react';

const IntroductionLevel1 = () => {
  return (
    <div style={{ scrollbarWidth: 'none',overflowY: 'scroll', maxHeight: '650px', 
      width: '90%',
      maxWidth: '800px',
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      margin: '0 auto', // Center the container
    }}>
      <h1 style={{
        textAlign: 'center',
        fontSize: '2em',
        color: '#333',
        marginBottom: '20px',
      }}>Introduction Level 1</h1>

      <ol type="1" style={{
        paddingLeft: '20px',
        fontSize: '1.1em',
        lineHeight: '1.6',
      }}>
        <li style={{
          marginBottom: '15px',
        }}>Be-form</li>
        <p style={{
          fontSize: '1em',
          color: '#555',
          marginBottom: '10px',
          lineHeight: '1.6',
        }}>
          In this section, you will learn about the basic forms of the verb 'to be' (am, is, are). These forms are essential for forming sentences about the present, describing people, places, and things, and talking about your feelings.
        </p>
        <h2 style={{
          fontSize: '1.3em',
          marginTop: '10px',
          color: '#444',
        }}>Examples:</h2>
        <ul style={{
          paddingLeft: '20px',
          listStyleType: 'circle',
        }}>
          <li style={{
            marginBottom: '8px',
          }}>I am a student.</li>
          <li style={{
            marginBottom: '8px',
          }}>She is happy.</li>
          <li style={{
            marginBottom: '8px',
          }}>They are friends</li>
        </ul>
        <br />

        <li style={{
          marginBottom: '15px',
        }}>WH-Questions</li>
        <p style={{
          fontSize: '1em',
          color: '#555',
          marginBottom: '10px',
          lineHeight: '1.6',
        }}>
          WH-questions are used to ask for specific information. They begin with words like who, what, where, when, why, and how.
        </p>
        <h2 style={{
          fontSize: '1.3em',
          marginTop: '10px',
          color: '#444',
        }}>Examples:</h2>
        <ul style={{
          paddingLeft: '20px',
          listStyleType: 'circle',
        }}>
          <li style={{
            marginBottom: '8px',
          }}>Who is your teacher?</li>
          <li style={{
            marginBottom: '8px',
          }}>What is your name?</li>
          <li style={{
            marginBottom: '8px',
          }}>Where do you live?</li>
        </ul>
        <br />

        <li style={{
          marginBottom: '15px',
        }}>Tense</li>
        <p style={{
          fontSize: '1em',
          color: '#555',
          marginBottom: '10px',
          lineHeight: '1.6',
        }}>
          In this section, you will learn about the basic tenses in English: Present, Past, and Future. Understanding tenses will help you talk about actions happening now, in the past, or in the future.
        </p>
        <h2 style={{
          fontSize: '1.3em',
          marginTop: '10px',
          color: '#444',
        }}>Examples:</h2>
        <ul style={{
          paddingLeft: '20px',
          listStyleType: 'circle',
        }}>
          <li style={{
            marginBottom: '8px',
          }}>Present: I am learning English.</li>
          <li style={{
            marginBottom: '8px',
          }}>Past: I was learning English yesterday.</li>
          <li style={{
            marginBottom: '8px',
          }}>Future: I will learn English tomorrow.</li>
        </ul>
        <br />
      </ol>
    </div>
  );
}

export default IntroductionLevel1;
