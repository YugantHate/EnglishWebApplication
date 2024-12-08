import React from 'react';

const WHQuestionLevel1NegativeWHQ = () => {
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
      <h2 style={{
        textAlign: 'center',
        color: '#2a9d8f',
        fontSize: '28px',
        marginBottom: '20px'
      }}>Negative Wh-Questions</h2>

      <p style={{ fontSize: '16px' }}>Wh-questions are questions that begin with words like who, what, when, where, why, how, and which. These questions are used to gather specific information. A negative Wh-question is simply a Wh-question with a negation added. This is typically formed by adding <strong>not</strong> after the auxiliary verb (like do, did, is, are, etc.).</p>

      <h3 style={{
        color: '#555',
        fontSize: '20px',
        marginTop: '20px'
      }}>Structure of Negative Wh-Questions</h3>
      <p style={{ fontSize: '16px' }}>The structure of a negative Wh-question depends on the type of Wh-word used and the tense of the sentence. Here's the basic structure:</p>
      <p style={{ fontSize: '16px' }}><strong>Wh-word + auxiliary verb + not + subject + main verb</strong></p>
      <p style={{ fontSize: '16px' }}>What don't you like?</p>
      <p style={{ fontSize: '16px' }}>Why hasn't she arrived yet?</p>
      <p style={{ fontSize: '16px' }}>When didn't they call me?</p>

      <h3 style={{
        color: '#555',
        fontSize: '20px',
        marginTop: '20px'
      }}>9 Types of Wh-Questions</h3>
      <ol style={{ fontSize: '16px' }}>
        <li><strong>What</strong>
          <p>Used to ask about things, ideas, or actions.</p>
          <p>Example: What is your favorite color?</p>
          <p>Negative Example: What don't you like to do?</p>
        </li>

        <li><strong>Who</strong>
          <p>Used to ask about people.</p>
          <p>Example: Who is your best friend?</p>
          <p>Negative Example: Who hasn't called you?</p>
        </li>

        <li><strong>When</strong>
          <p>Used to ask about time.</p>
          <p>Example: When does the train leave?</p>
          <p>Negative Example: When didn't they arrive?</p>
        </li>

        <li><strong>Where</strong>
          <p>Used to ask about place or location.</p>
          <p>Example: Where is the nearest hospital?</p>
          <p>Negative Example: Where don't you want to go?</p>
        </li>

        <li><strong>Why</strong>
          <p>Used to ask about reasons or causes.</p>
          <p>Example: Why are you upset?</p>
          <p>Negative Example: Why hasn't she come yet?</p>
        </li>

        <li><strong>How</strong>
          <p>Used to ask about the manner, process, or condition of something.</p>
          <p>Example: How do you make tea?</p>
          <p>Negative Example: How haven't you finished your homework?</p>
        </li>

        <li><strong>Which</strong>
          <p>Used to ask about a specific item or choice from a known set of options.</p>
          <p>Example: Which book do you prefer?</p>
          <p>Negative Example: Which option didn't you choose?</p>
        </li>

        <li><strong>Whom</strong>
          <p>Example: With whom are you?</p>
          <p>Negative Example: With whom aren't you speaking?</p>
        </li>

        <li><strong>Whose</strong>
          <p>Example: Whose is this book?</p>
          <p>Negative Example: Whose hasn't called you?</p>
        </li>
      </ol>
    </div>
  );
}

export default WHQuestionLevel1NegativeWHQ;
