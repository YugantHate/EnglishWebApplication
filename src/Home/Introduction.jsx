import React from 'react';

const Introduction = () => {
  return (
    <div style={{ padding: '20px', 
      maxWidth: '800px', 
      margin: 'auto', 
      overflowY: 'scroll', 
      maxHeight: '650px',  
      scrollbarWidth: 'none'}}>
      <h2 style={{ color: '#6c757d', marginBottom: '15px',textAlign:'center',color:'blue' }}>Welcome to Spoken English</h2>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', }}>
        Our app is designed to help you master English grammar step by step. We have divided the content into different levels to make learning easy and fun. Each level builds on the previous one, helping you improve gradually.
      </p>

      <p style={{ fontWeight: 'bold', color: '#17a2b8', marginTop: '20px' }}>Level 1: Basics</p>
      <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
        <li>Be-form: Learn how to use verbs like 'is,' 'am,' 'are,' and more.</li>
        <li>WH Questions: Understand how to ask questions using words like 'who,' 'what,' 'where,' etc.</li>
        <li>Tenses: Get comfortable with different tenses like present, past, and future.</li>
      </ul>

      <p style={{ fontWeight: 'bold', color: '#17a2b8', marginTop: '20px' }}>Level 2: Intermediate</p>
      <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
        <li>Modal Verbs: Learn to express abilities, permissions, and obligations using words like 'can,' 'must,' 'should,' etc.</li>
        <li>Sentence Structure: Understand how to arrange words correctly to form sentences.</li>
      </ul>

      <p style={{ fontWeight: 'bold', color: '#17a2b8', marginTop: '20px' }}>Level 3: Advanced</p>
      <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
        <li>Active and Passive Voice: Learn how to change sentences from active to passive and vice versa.</li>
        <li>Reported Speech: Understand how to report what someone else said.</li>
        <li>Conditionals: Dive into 'if' statements to express possibilities, conditions, and outcomes.</li>
        <li>Clauses: Explore different types of clauses, like dependent and independent clauses.</li>
      </ul>

      <p style={{ fontWeight: 'bold', color: '#17a2b8', marginTop: '20px' }}>Grammar Section</p>
      <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
        <li>Articles: Learn how and when to use 'a,' 'an,' and 'the.'</li>
        <li>Prepositions: Master the use of words like 'in,' 'on,' 'at,' and others to show relationships in space and time.</li>
        <li>Adjectives and Adverbs: Discover how to describe nouns and actions more effectively.</li>
        <li>Conjunctions: Understand how to link words, phrases, and clauses using words like 'and,' 'but,' 'because,' etc.</li>
        <li>Direct and Indirect Speech: In direct speech, the exact words of the speaker are quoted and enclosed in quotation marks. The reporting verb (e.g., said, asked, exclaimed) introduces the quoted speech.</li>
      </ul>
    </div>
  );
};

export default Introduction;
