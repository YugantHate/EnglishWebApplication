import React from "react";

const IntroductionDirectAndIndirectSpeech = () => {
  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "800px",
        margin: "auto",
        overflowY: "scroll",
        maxHeight: "650px",
        scrollbarWidth: "none",
        fontFamily: "Arial, sans-serif",
        color: "#333",
        lineHeight: "1.6",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h1 style={{ color: "#2a9d8f", fontSize: "28px", textAlign: "center" }}>
        Direct and Indirect Speech
      </h1>

      {/* Introduction */}
      <section>
        <h2 style={{ color: "#2a9d8f", fontSize: "24px" }}>Introduction</h2>
        <p style={{ fontSize: "16px" }}>
          <strong>Direct Speech:</strong> Quoting the speaker's exact words,
          enclosed in quotation marks.
        </p>
        <p style={{ fontSize: "16px" }}>
          <strong>Indirect Speech:</strong> Reporting the speaker's words
          without quotes, paraphrasing them with necessary changes in pronouns,
          tenses, and references.
        </p>
      </section>

      {/* Differences */}
      <section>
        <h2 style={{ color: "#2a9d8f", fontSize: "24px" }}>Key Differences</h2>
        <table
          border="1"
          cellPadding="10"
          style={{
            borderCollapse: "collapse",
            width: "100%",
            fontSize: "16px",
            marginTop: "10px",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f0f0f0" }}>
              <th style={{ padding: "10px", textAlign: "left" }}>Aspect</th>
              <th style={{ padding: "10px", textAlign: "left" }}>Direct Speech</th>
              <th style={{ padding: "10px", textAlign: "left" }}>Indirect Speech</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Quotation Marks</td>
              <td>Quotation marks are used.</td>
              <td>No quotation marks are used.</td>
            </tr>
            <tr>
              <td>Word-for-word</td>
              <td>The speaker's exact words are repeated.</td>
              <td>The sentence is paraphrased.</td>
            </tr>
            <tr>
              <td>Verb Tenses</td>
              <td>No change in tense (usually).</td>
              <td>Verb tense may change depending on context.</td>
            </tr>
            <tr>
              <td>Pronouns</td>
              <td>No change in pronouns.</td>
              <td>Pronouns may change to match the speaker.</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Examples */}
      <section>
        <h2 style={{ color: "#2a9d8f", fontSize: "24px" }}>Examples</h2>
        <div>
          <h3 style={{ color: "#555", fontSize: "20px" }}>Direct Speech</h3>
          <ul style={{ marginLeft: "20px", fontSize: "16px" }}>
            <li>She said, "I love programming."</li>
            <li>"We are planning a trip," they said.</li>
            <li>He asked, "Can you help me?"</li>
          </ul>
        </div>
        <div>
          <h3 style={{ color: "#555", fontSize: "20px" }}>Indirect Speech</h3>
          <ul style={{ marginLeft: "20px", fontSize: "16px" }}>
            <li>She said that she loved programming.</li>
            <li>They said that they were planning a trip.</li>
            <li>He asked if I could help him.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default IntroductionDirectAndIndirectSpeech;
