import React from 'react'

const TenseIntroduction = () => {
  return (
    <div style={{ padding: '20px', 
        maxWidth: '800px', 
        margin: 'auto', 
        overflowY: 'scroll', 
        maxHeight: '650px',  
        scrollbarWidth: 'none',border: '1px solid rgb(204, 204, 204)'}}>

      <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', margin: '20px', color: '#333' }}>
            <h2 style={{ color: '#2a9d8f',textAlign:'center' }}>Understanding Tenses in English Grammar</h2>
            
            <div style={{ marginTop: '20px' }}>
                <h2 style={{ color: '#2a9d8f' }}>1. Present Tense</h2>
                <p>The present tense describes actions happening now, routines, or general truths. It has four main forms:</p>
                
                <h3 style={{ color: '#2a9d8f' }}>a. Simple Present Tense</h3>
                <p>For habits, general truths, and scheduled events.</p>
                <p style={{ color: '#555', marginLeft: '20px' }}>Example: She walks to school every day.</p>
                
                <h3 style={{ color: '#2a9d8f' }}>b. Present Continuous Tense</h3>
                <p>For ongoing actions happening now or temporary actions.</p>
                <p style={{ color: '#555', marginLeft: '20px' }}>Example: I am reading a book.</p>
                
                <h3 style={{ color: '#2a9d8f' }}>c. Present Perfect Tense</h3>
                <p>For actions completed at some point in the past with relevance to the present.</p>
                <p style={{ color: '#555', marginLeft: '20px' }}>Example: He has finished his homework.</p>
                
                <h3 style={{ color: '#2a9d8f' }}>d. Present Perfect Continuous Tense</h3>
                <p>For actions that started in the past and continue up to the present.</p>
                <p style={{ color: '#555', marginLeft: '20px' }}>Example: They have been playing for two hours.</p>
            </div>
            
            <div style={{ marginTop: '20px' }}>
                <h2 style={{ color: '#2a9d8f' }}>2. Past Tense</h2>
                <p>The past tense refers to actions or situations that happened in the past. It also has four forms:</p>
                
                <h3 style={{ color: '#2a9d8f' }}>a. Simple Past Tense</h3>
                <p>For completed actions in the past.</p>
                <p style={{ color: '#555', marginLeft: '20px' }}>Example: She visited her grandmother yesterday.</p>
                
                <h3 style={{ color: '#2a9d8f' }}>b. Past Continuous Tense</h3>
                <p>For actions that were ongoing at a specific time in the past.</p>
                <p style={{ color: '#555', marginLeft: '20px' }}>Example: I was watching a movie when he called.</p>
                
                <h3 style={{ color: '#2a9d8f' }}>c. Past Perfect Tense</h3>
                <p>For actions that were completed before another past action.</p>
                <p style={{ color: '#555', marginLeft: '20px' }}>Example: They had left by the time we arrived.</p>
                
                <h3 style={{ color: '#2a9d8f' }}>d. Past Perfect Continuous Tense</h3>
                <p>For actions that started and continued for some time before a certain point in the past.</p>
                <p style={{ color: '#555', marginLeft: '20px' }}>Example: She had been working at the company for five years before moving.</p>
            </div>
            
            <div style={{ marginTop: '20px' }}>
                <h2 style={{ color: '#2a9d8f' }}>3. Future Tense</h2>
                <p>Future tense describes actions that are expected to happen in the future. The four forms include:</p>
                
                <h3 style={{ color: '#2a9d8f' }}>a. Simple Future Tense</h3>
                <p>For actions that will happen in the future.</p>
                <p style={{ color: '#555', marginLeft: '20px' }}>Example: I will call you tomorrow.</p>
                
                <h3 style={{ color: '#2a9d8f' }}>b. Future Continuous Tense</h3>
                <p>For ongoing actions that will be happening at a certain time in the future.</p>
                <p style={{ color: '#555', marginLeft: '20px' }}>Example: They will be waiting for us at the station.</p>
                
                <h3 style={{ color: '#2a9d8f' }}>c. Future Perfect Tense</h3>
                <p>For actions that will be completed by a specific future time.</p>
                <p style={{ color: '#555', marginLeft: '20px' }}>Example: He will have finished his project by next week.</p>
                
                <h3 style={{ color: '#2a9d8f' }}>d. Future Perfect Continuous Tense</h3>
                <p>For actions that will continue up to a point in the future.</p>
                <p style={{ color: '#555', marginLeft: '20px' }}>Example: By 5 PM, I will have been working for eight hours.</p>
            </div>
        </div>
    </div>
  )
}

export default TenseIntroduction;
