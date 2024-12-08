import React from 'react';

const BeformLevel1NegativeQuestion = () => {
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
        <h1 style={{ color: '#2a9d8f', fontSize: '28px', textAlign: 'center' }}>Negative Questions - Be-form</h1>
        
        <p style={{ fontSize: '16px' }}>
          Negative questions are often used to confirm assumptions, express surprise, or clarify details. With the be-form (am, is, are, was, were, will be), adding "not" makes the question negative. These questions can also be contracted, making them sound more natural and conversational.
        </p>

        <h2 style={{ color: '#2a9d8f', fontSize: '24px' }}>Understanding Be-form</h2>
        <ul style={{ marginLeft: '20px', fontSize: '16px' }}>
          <li>am not → no common contraction (amn't), use "Am I not?"</li>
          <li>is not → isn't</li>
          <li>are not → aren't</li>
          <li>was not → wasn't</li>
          <li>were not → weren't</li>
          <li>will not → won't</li>
          <li>shall not → shan't (less common and more formal)</li>
        </ul>

        <h2 style={{ color: '#2a9d8f', fontSize: '24px' }}>1. Present Be-form Negative Questions</h2>
        <h3 style={{ color: '#555', fontSize: '20px' }}>Structure</h3>
        <p style={{ fontSize: '16px' }}>Be-form (am/is/are) + "not" + Subject + Rest of the Sentence?</p>

        <h3 style={{ color: '#555', fontSize: '20px' }}>Formula by Subject:</h3>
        <p style={{ marginLeft: '20px' }}>I → Am I not...?</p>
        <p style={{ marginLeft: '20px' }}>He/She/It → Isn't he/she/it...?</p>
        <p style={{ marginLeft: '20px' }}>We/They/You → Aren't we/they/you...?</p>

        <h3 style={{ color: '#555', fontSize: '20px' }}>Examples:</h3>
        <ol style={{ marginLeft: '20px', fontSize: '16px' }}>
          <li>Aren't they happy now?</li>
          <p style={{ marginLeft: '40px' }}>Ans</p>
          <p style={{ marginLeft: '40px' }}>Yes, They aren't happy now</p>
          <p style={{ marginLeft: '40px' }}>No, They are happy now</p>

          <li>Isn't he with his friends now?</li>
          <p style={{ marginLeft: '40px' }}>Ans</p>
          <p style={{ marginLeft: '40px' }}>Yes, He isn't with his friends now.</p>
          <p style={{ marginLeft: '40px' }}>No, He is with his friends now.</p>
        </ol>

        <h2 style={{ color: '#2a9d8f', fontSize: '24px' }}>2. Past Be-form Negative Questions</h2>
        <h3 style={{ color: '#555', fontSize: '20px' }}>Structure</h3>
        <p style={{ fontSize: '16px' }}>Be-form (was/were) + "not" + Subject + Rest of the Sentence?</p>

        <h3 style={{ color: '#555', fontSize: '20px' }}>Formula by Subject:</h3>
        <p style={{ marginLeft: '20px' }}>I/He/She/It → Wasn't I/he/she/it...?</p>
        <p style={{ marginLeft: '20px' }}>We/You/They → Weren't we/you/they...?</p>

        <h3 style={{ color: '#555', fontSize: '20px' }}>Examples:</h3>
        <ol style={{ marginLeft: '20px', fontSize: '16px' }}>
          <li>Weren't Ram and Jay angry yesterday?</li>
          <p style={{ marginLeft: '40px' }}>Ans</p>
          <p style={{ marginLeft: '40px' }}>Yes, Ram and Jay weren't angry yesterday.</p>
          <p style={{ marginLeft: '40px' }}>No, Ram and Jay were angry yesterday.</p>

          <li>Wasn't Riya at Ameerpet, Hyderabad?</li>
          <p style={{ marginLeft: '40px' }}>Ans</p>
          <p style={{ marginLeft: '40px' }}>Yes, Riya wasn't at Ameerpet, Hyderabad.</p>
          <p style={{ marginLeft: '40px' }}>No, Riya was at Ameerpet, Hyderabad.</p>
        </ol>

        <h2 style={{ color: '#2a9d8f', fontSize: '24px' }}>3. Future Be-form Negative Questions</h2>
        <h3 style={{ color: '#555', fontSize: '20px' }}>Structure</h3>
        <p style={{ fontSize: '16px' }}>Be-form (shall/will) + "not" + be + Subject + Rest of the Sentence?</p>

        <h3 style={{ color: '#555', fontSize: '20px' }}>Formula by Subject:</h3>
        <ol style={{ marginLeft: '20px', fontSize: '16px' }}>
          <li>I/We → Shan't I/we be...?</li>
          <li>All subjects → Won't [subject] be...?</li>
        </ol>

        <h3 style={{ color: '#555', fontSize: '20px' }}>Examples:</h3>
        <ol style={{ marginLeft: '20px', fontSize: '16px' }}>
          <li>Won't Jay be hungry in the next 2 hours?</li>
          <p style={{ marginLeft: '40px' }}>Ans</p>
          <p style={{ marginLeft: '40px' }}>Yes, Jay won't be hungry in the next 2 hours.</p>
          <p style={{ marginLeft: '40px' }}>No, Jay will be hungry in the next 2 hours.</p>

          <li>Shan't I be in the mall?</li>
          <p style={{ marginLeft: '40px' }}>Ans</p>
          <p style={{ marginLeft: '40px' }}>Yes, I shan't be in the mall.</p>
          <p style={{ marginLeft: '40px' }}>No, I shall be in the mall.</p>
        </ol>
      </div>
    </>
  );
}

export default BeformLevel1NegativeQuestion;
