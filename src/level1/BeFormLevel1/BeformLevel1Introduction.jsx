import React from 'react';

const BeformLevel1Introduction = () => {
  return (
    <>
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
        <h2 style={{ color: '#2a9d8f', fontSize: '24px' }}>Be-form Introduction</h2>
        <p style={{ fontSize: '16px' }}>
          The be-form is one of the most fundamental parts of English grammar. It is used to describe Adjectives (feeling), People, and Places.
        </p>
        <p style={{ fontSize: '16px' }}>In English, the be-form has three main forms:</p>
        <ol style={{ marginLeft: '20px', fontSize: '16px' }}>
          <li>Present be-form: am, is, are</li>
          <li>Past be-form: was, were</li>
          <li>Future be-form: shall be, will be</li>
        </ol>

        <p style={{ color: 'red', fontWeight: 'bold', fontSize: '16px' }}>
          Note: These forms change depending on the subject of the sentence.
        </p>

        <h2 style={{ color: '#2a9d8f', fontSize: '24px' }}>Present be-form</h2>
        <p style={{ fontSize: '16px' }}>Am is used with the subject 'I'.</p>
        
        <h3 style={{ fontSize: '20px', color: '#2a9d8f' }}>Examples:</h3>
        <ul style={{ marginLeft: '20px', fontSize: '16px' }}>
          <li>I am happy now.</li>
          <li>I am in Maharashtra at Nagpur now.</li>
          <li>I am with you now.</li>
        </ul>

        <h2 style={{ color: '#2a9d8f', fontSize: '24px' }}>Past be-form</h2>
        <p style={{ fontSize: '16px' }}>
          Was is for singular subjects and third person. It is used with the subjects I, He, She, It.
        </p>
        
        <h3 style={{ fontSize: '20px', color: '#2a9d8f' }}>Examples:</h3>
        <ul style={{ marginLeft: '20px', fontSize: '16px' }}>
          <li>I was at the mall yesterday.</li>
        </ul>

        <h2 style={{ color: '#2a9d8f', fontSize: '24px' }}>Future be-form</h2>
        <ul style={{ marginLeft: '20px', fontSize: '16px' }}>
          <li>Shall be is used with the subjects I, We.</li>
          <li>Will be is used with the remaining subjects.</li>
        </ul>
        
        <h3 style={{ fontSize: '20px', color: '#2a9d8f' }}>Examples:</h3>
        <ul style={{ marginLeft: '20px', fontSize: '16px' }}>
          <li>I shall be hungry after 12 o'clock.</li>
          <li>He will be in Hyderabad at Ameerpet.</li>
        </ul>
      </div>
    </>
  );
}

export default BeformLevel1Introduction;
