import React from 'react';

const BeformLevel1PositiveQuestion = () => {
  return (
    <div style={{
      padding: '20px',
      maxWidth: '800px',
      margin: 'auto',
      overflowY: 'scroll',
      maxHeight: '650px',
      scrollbarWidth: 'none',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      lineHeight: '1.6',
      border: '1px solid #ccc',
      borderRadius: '8px'
    }}>
      <h1 style={{ color: '#2a9d8f', fontSize: '28px', textAlign: 'center' }}>Positive Questions - Be-form</h1>

      <h2 style={{ color: '#2a9d8f', fontSize: '24px' }}>Present Tense Be-form Questions</h2>
      <p style={{ fontSize: '16px' }}>In the present tense, am, is, and are are used.</p>

      <h3 style={{ color: '#555', fontSize: '20px' }}>Rules:</h3>
      <ul style={{ marginLeft: '20px', fontSize: '16px' }}>
        <li>Use <strong>Am</strong> for the subject 'I'.</li>
        <li>Use <strong>Is</strong> for singular subjects like 'he', 'she', or 'it'.</li>
        <li>Use <strong>Are</strong> for plural subjects like 'we', 'they', or 'you'.</li>
      </ul>

      <h3 style={{ color: '#555', fontSize: '20px' }}>Examples:</h3>
      <ul style={{ marginLeft: '20px', fontSize: '16px' }}>
        <li>Am I late?</li>
        <li>Is she your friend?</li>
        <li>Are they in the classroom?</li>
        <li>Are you ready?</li>
      </ul>

      <h2 style={{ color: '#2a9d8f', fontSize: '24px' }}>Past Tense Be-form Questions</h2>
      <p style={{ fontSize: '16px' }}>In the past tense, was and were are used.</p>

      <h3 style={{ color: '#555', fontSize: '20px' }}>Rules:</h3>
      <ul style={{ marginLeft: '20px', fontSize: '16px' }}>
        <li>Use <strong>Was</strong> for singular subjects like 'I', 'he', 'she', or 'it'.</li>
        <li>Use <strong>Were</strong> for plural subjects like 'we', 'they', or 'you'.</li>
      </ul>

      <h3 style={{ color: '#555', fontSize: '20px' }}>Examples:</h3>
      <ul style={{ marginLeft: '20px', fontSize: '16px' }}>
        <li>Was I on the list?</li>
        <li>Were they happy with the results?</li>
      </ul>

      <h2 style={{ color: '#2a9d8f', fontSize: '24px' }}>Future Tense Be-form Questions</h2>
      <p style={{ fontSize: '16px' }}>In the future tense, 'will be' is used to ask about future events or conditions.</p>

      <h3 style={{ color: '#555', fontSize: '20px' }}>Rules:</h3>
      <ul style={{ marginLeft: '20px', fontSize: '16px' }}>
        <li>Use <strong>Will be</strong> for all subjects.</li>
      </ul>

      <h3 style={{ color: '#555', fontSize: '20px' }}>Examples:</h3>
      <ul style={{ marginLeft: '20px', fontSize: '16px' }}>
        <li>Will I be there on time?</li>
        <li>Will they be here tomorrow?</li>
      </ul>
    </div>
  );
};

export default BeformLevel1PositiveQuestion;
