import React from 'react';

const WHQuestionLevel1PositiveWHQ = () => {
  return (
    <div style={{
      padding: '30px', 
      maxWidth: '900px', 
      margin: 'auto', 
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
    }}>
      <div style={{
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
      }}>
        <h2 style={{
          textAlign: 'center', 
          color: '#2a9d8f', 
          fontSize: '32px', 
          marginBottom: '20px',
          fontWeight: '600',
        }}>
          WH Positive Questions
        </h2>

        <section style={{ marginBottom: '30px' }}>
          <h3 style={{
            fontSize: '24px', 
            color: '#333', 
            fontWeight: '500',
          }}>Introduction</h3>
          <p style={{
            fontSize: '18px', 
            color: '#555', 
            lineHeight: '1.8',
            textAlign: 'justify',
          }}>
            WH positive questions are inquiries that start with WH-words like 'who,' 'what,' 'where,' 'when,' 'why,' and 'how' but assume an affirmative (positive) or neutral answer, rather than a negative or interrogative tone. These questions aim to gather specific information rather than forming closed, yes-or-no queries. They are integral to both everyday conversation and formal communication, as they help us gain insights, clarify situations, and gather detailed responses.
          </p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h3 style={{
            fontSize: '24px', 
            color: '#333', 
            fontWeight: '500',
          }}>Common WH-words and Examples</h3>
          <ul style={{
            fontSize: '18px', 
            color: '#555', 
            lineHeight: '1.6',
            marginLeft: '20px',
          }}>
            <li><strong>Who:</strong> 'Who teaches your class?'</li>
            <li><strong>What:</strong> 'What subjects are you studying?'</li>
            <li><strong>Where:</strong> 'Where is the nearest bookstore?'</li>
            <li><strong>When:</strong> 'When is the next train?'</li>
            <li><strong>Why:</strong> 'Why did you choose this career path?'</li>
            <li><strong>How:</strong> 'How do you solve this problem?'</li>
            <li><strong>Which:</strong> 'Which color do you prefer?'</li>
            <li><strong>Whose:</strong> 'Whose book is this?'</li>
            <li><strong>What kind of:</strong> 'What kind of music do you like?'</li>
            <li><strong>How many:</strong> 'How many people are coming to the party?'</li>
            <li><strong>How long:</strong> 'How long does it take to get to the station?'</li>
            <li><strong>How often:</strong> 'How often do you exercise?'</li>
            <li><strong>How much:</strong> 'How much does this cost?'</li>
          </ul>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h3 style={{
            fontSize: '24px', 
            color: '#333', 
            fontWeight: '500',
          }}>Structure of WH Positive Questions</h3>
          <p style={{
            fontSize: '18px', 
            color: '#555', 
            marginBottom: '15px',
            textAlign: 'justify',
          }}>
            Forming a WH positive question generally follows a straightforward structure:
          </p>
          <ul style={{
            fontSize: '18px', 
            color: '#555', 
            lineHeight: '1.6',
            marginLeft: '20px',
          }}>
            <li>Structure: WH-word + Auxiliary Verb + Subject + Main Verb</li>
          </ul>
          <p style={{
            fontSize: '18px', 
            color: '#555', 
            textAlign: 'justify',
          }}>
            Example: 'Where (WH-word) do (auxiliary verb) you (subject) live (main verb)?'
          </p>
          <p style={{
            fontSize: '18px', 
            color: '#555', 
            marginTop: '15px',
            textAlign: 'justify',
          }}>
            In certain cases, WH-words like 'who' or 'what' can directly start the sentence without an auxiliary verb, especially when they act as the subject of the question.
          </p>
          <p style={{
            fontSize: '18px', 
            color: '#555', 
            marginTop: '15px',
            textAlign: 'justify',
          }}>
            Example: 'Who made this decision?'
          </p>
        </section>

        <section style={{ marginBottom: '30px' }}>
          <h3 style={{
            fontSize: '24px', 
            color: '#333', 
            fontWeight: '500',
          }}>Examples of WH Positive Questions in Different Contexts</h3>
          <h4 style={{
            fontSize: '22px', 
            color: '#333', 
            fontWeight: '500', 
            marginTop: '20px',
          }}>Daily Life</h4>
          <ul style={{
            fontSize: '18px', 
            color: '#555', 
            lineHeight: '1.6',
            marginLeft: '20px',
          }}>
            <li>'What time do you wake up?'</li>
            <li>'Where do you live?'</li>
          </ul>
          <h4 style={{
            fontSize: '22px', 
            color: '#333', 
            fontWeight: '500', 
            marginTop: '20px',
          }}>Workplace</h4>
          <ul style={{
            fontSize: '18px', 
            color: '#555', 
            lineHeight: '1.6',
            marginLeft: '20px',
          }}>
            <li>'How long have you been working here?'</li>
            <li>'What project are you working on?'</li>
          </ul>
          <h4 style={{
            fontSize: '22px', 
            color: '#333', 
            fontWeight: '500', 
            marginTop: '20px',
          }}>School</h4>
          <ul style={{
            fontSize: '18px', 
            color: '#555', 
            lineHeight: '1.6',
            marginLeft: '20px',
          }}>
            <li>'How many subjects are you taking this semester?'</li>
            <li>'What books do you need for your class?'</li>
          </ul>
          <h4 style={{
            fontSize: '22px', 
            color: '#333', 
            fontWeight: '500', 
            marginTop: '20px',
          }}>Travel</h4>
          <ul style={{
            fontSize: '18px', 
            color: '#555', 
            lineHeight: '1.6',
            marginLeft: '20px',
          }}>
            <li>'When does the flight depart?'</li>
            <li>'Where is the nearest restaurant?'</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default WHQuestionLevel1PositiveWHQ;
