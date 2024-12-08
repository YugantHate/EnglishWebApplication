import React from 'react';

const WHQuestionLevel1Intoduction = () => {
  return (
    <div style={{
      overflowY: 'scroll',
      maxHeight: '600px',
      scrollbarWidth: 'none',
      padding: '30px',
      maxWidth: '900px',
      margin: 'auto',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Roboto, sans-serif',
      color: '#333',
      lineHeight: '1.8',
    }}>
      <h2 style={{
        textAlign: 'center',
        color: '#2a9d8f',
        fontSize: '32px',
        marginBottom: '20px',
        fontWeight: '600',
      }}>Introduction to WH-Questions</h2>
      <p style={{
        fontSize: '18px',
        color: '#555',
        marginBottom: '20px',
        textAlign: 'justify',
      }}>WH-questions are an essential part of communication, enabling us to ask for specific information rather than simple yes or no answers. They are named 'WH-questions' because most of the question words—such as who, what, when, where, why, and how—begin with the letters 'WH.' Learning how to use these questions effectively is crucial for clear and effective communication in English and other languages.</p>

      <h3 style={{
        color: '#333',
        fontSize: '24px',
        marginTop: '30px',
        fontWeight: '500',
      }}>Common WH-Question Words</h3>
      <ul style={{
        fontSize: '18px',
        color: '#555',
        lineHeight: '1.6',
        marginLeft: '20px',
      }}>
        <li><strong>Who</strong> - Asks about people.
          <p>Example: Who is your teacher?</p>
        </li>
        <li><strong>What</strong> - Asks about things, actions, or descriptions.
          <p>Example: What is your favorite color?</p>
        </li>
        <li><strong>When</strong> - Asks about time.
          <p>Example: When is your birthday?</p>
        </li>
        <li><strong>Where</strong> - Asks about place or location.
          <p>Example: Where do you live?</p>
        </li>
        <li><strong>Why</strong> - Asks for reasons or explanations.
          <p>Example: Why are you late?</p>
        </li>
        <li><strong>How</strong> - Asks about manner, process, or amount.
          <p>Example: How are you feeling?</p>
        </li>
      </ul>

      <h3 style={{
        color: '#333',
        fontSize: '24px',
        marginTop: '30px',
        fontWeight: '500',
      }}>How to Form WH-Questions</h3>
      <p style={{
        fontSize: '18px',
        marginBottom: '15px',
        color: '#444',
      }}>Forming WH-questions usually follows a pattern that includes the WH-word, an auxiliary verb (like is, do, does, can, etc.), the subject, and the main verb.</p>
      <p style={{
        fontSize: '18px',
        marginBottom: '15px',
        color: '#444',
      }}><strong>Structure of WH-Questions:</strong></p>
      <p style={{
        fontSize: '18px',
        marginBottom: '10px',
        color: '#555',
      }}>WH-word + Auxiliary Verb + Subject + Main Verb</p>
      <p style={{
        fontSize: '18px',
        marginBottom: '15px',
        color: '#555',
      }}>Example: Where (WH-word) is (auxiliary verb) your friend (subject) staying (main verb)?</p>
      <p style={{
        fontSize: '18px',
        marginBottom: '15px',
        color: '#555',
      }}>For some WH-words like 'who' or 'what,' the question can begin with the WH-word directly when asking for the subject.</p>
      <p style={{
        fontSize: '18px',
        marginBottom: '15px',
        color: '#555',
      }}>Example: Who (WH-word) broke (main verb) the vase?</p>

      <h3 style={{
        color: '#333',
        fontSize: '24px',
        marginTop: '30px',
        fontWeight: '500',
      }}>Main Verbs and Their Forms</h3>
      <p style={{
        fontSize: '18px',
        color: '#555',
        marginBottom: '20px',
        textAlign: 'justify',
      }}>Main verbs convey the main action or state in a sentence. They carry the core meaning of a sentence, describing what the subject does, experiences, or is. Unlike auxiliary verbs, main verbs are the focal point of the verb phrase.</p>

      <h3 style={{
        color: '#333',
        fontSize: '24px',
        marginTop: '30px',
        fontWeight: '500',
      }}>Importance of Main Verbs</h3>
      <p style={{
        fontSize: '18px',
        marginBottom: '20px',
        color: '#444',
      }}>Main verbs are crucial because they define the action, indicate tense, and express a range of actions, emotions, and states, adding depth to sentences.</p>

      <div style={{ overflowX: 'auto' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          textAlign: 'left',
        }}>
          <thead>
            <tr>
              <th style={{
                border: '1px solid #ddd',
                padding: '10px',
                backgroundColor: '#f2f2f2',
              }}>Base Form</th>
              <th style={{
                border: '1px solid #ddd',
                padding: '10px',
                backgroundColor: '#f2f2f2',
              }}>Past Simple</th>
              <th style={{
                border: '1px solid #ddd',
                padding: '10px',
                backgroundColor: '#f2f2f2',
              }}>Past Participle</th>
              <th style={{
                border: '1px solid #ddd',
                padding: '10px',
                backgroundColor: '#f2f2f2',
              }}>Present Participle</th>
            </tr>
          </thead>
          <tbody>
            {[
              { base: 'be', past: 'was/were', pastParticiple: 'been', presentParticiple: 'being' },
              { base: 'have', past: 'had', pastParticiple: 'had', presentParticiple: 'having' },
              { base: 'go', past: 'went', pastParticiple: 'gone', presentParticiple: 'going' },
              { base: 'take', past: 'took', pastParticiple: 'taken', presentParticiple: 'taking' },
              { base: 'make', past: 'made', pastParticiple: 'made', presentParticiple: 'making' },
              { base: 'come', past: 'came', pastParticiple: 'come', presentParticiple: 'coming' },
              { base: 'know', past: 'knew', pastParticiple: 'known', presentParticiple: 'knowing' },
              { base: 'think', past: 'thought', pastParticiple: 'thought', presentParticiple: 'thinking' },
              { base: 'see', past: 'saw', pastParticiple: 'seen', presentParticiple: 'seeing' },
              { base: 'give', past: 'gave', pastParticiple: 'given', presentParticiple: 'giving' },
              { base: 'find', past: 'found', pastParticiple: 'found', presentParticiple: 'finding' },
              { base: 'work', past: 'worked', pastParticiple: 'worked', presentParticiple: 'working' },
              { base: 'feel', past: 'felt', pastParticiple: 'felt', presentParticiple: 'feeling' },
              { base: 'try', past: 'tried', pastParticiple: 'tried', presentParticiple: 'trying' },
              { base: 'leave', past: 'left', pastParticiple: 'left', presentParticiple: 'leaving' },
            ].map((verb, index) => (
              <tr key={index}>
                <td style={{
                  border: '1px solid #ddd',
                  padding: '10px',
                  backgroundColor: '#f9f9f9',
                }}>{verb.base}</td>
                <td style={{
                  border: '1px solid #ddd',
                  padding: '10px',
                  backgroundColor: '#f9f9f9',
                }}>{verb.past}</td>
                <td style={{
                  border: '1px solid #ddd',
                  padding: '10px',
                  backgroundColor: '#f9f9f9',
                }}>{verb.pastParticiple}</td>
                <td style={{
                  border: '1px solid #ddd',
                  padding: '10px',
                  backgroundColor: '#f9f9f9',
                }}>{verb.presentParticiple}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={{
        color: '#333',
        fontSize: '24px',
        marginTop: '30px',
        fontWeight: '500',
      }}>Examples of Each Verb Form</h3>
      <ul style={{
        fontSize: '18px',
        lineHeight: '1.8',
        marginLeft: '20px',
      }}>
        <li><strong>V1 (Base Form):</strong> I write in my journal daily.</li>
        <li><strong>V2 (Past Simple):</strong> She wrote an essay yesterday.</li>
        <li><strong>V3 (Past Participle):</strong> They have written several books.</li>
        <li><strong>V4 (Present Participle):</strong> He is writing a novel.</li>
        <li><strong>V5 (3rd Person Singular):</strong> She writes beautifully.</li>
      </ul>

      <h3 style={{
        color: '#333',
        fontSize: '24px',
        marginTop: '30px',
        fontWeight: '500',
      }}>Using Main Verb Forms in Sentences</h3>
      <ul style={{
        fontSize: '18px',
        lineHeight: '1.8',
        marginLeft: '20px',
      }}>
        <li><strong>V1 (Base Form)</strong> is often used in the present simple tense: <br />
          I run every morning.</li>
        <li><strong>V2 (Past Simple)</strong> shows completed actions in the past: <br />
          They ran to the park.</li>
        <li><strong>V3 (Past Participle)</strong> combines with auxiliary verbs to form perfect tenses: <br />
          She has run five marathons.</li>
        <li><strong>V4 (Present Participle)</strong> is used for continuous tenses: <br />
          He is running in the marathon right now.</li>
        <li><strong>V5 (3rd Person Singular)</strong> is used for the third person in present simple tense: <br />
          She runs quickly.</li>
      </ul>

      <p style={{
        fontSize: '18px',
        color: '#555',
        marginTop: '20px',
      }}>Mastering these verb forms helps in accurately expressing time, action, and aspect across various tenses in English.</p>
    </div>
  );
};

export default WHQuestionLevel1Intoduction;
