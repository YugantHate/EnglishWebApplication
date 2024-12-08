import React from 'react';
import { NavLink } from 'react-router-dom';
import './TenseLevel1.css'; // Import the CSS file

const WHQuestionLevel1 = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '30px' }}>
      <ul style={{ textAlign: 'center', listStyleType: 'none', padding: '0', width: '450px', maxWidth: '600px', margin: '0 auto' }}>
        <li style={{ marginBottom: '15px' }}>
          <NavLink 
            to="/Level1WhIntroduction" 
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Introduction
          </NavLink>
        </li>
        <li style={{ marginBottom: '15px' }}>
          <NavLink 
            to="/Level1WHPositiveQuestion"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Positive WH Question
          </NavLink>
        </li>
        <li style={{ marginBottom: '15px' }}>
          <NavLink 
            to="/Level1WHNegativeQuestion"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Negative WH Question
          </NavLink>
        </li>
        <li style={{ marginBottom: '15px' }}>
          <NavLink 
            to="/beformLevel1WhPositiveQuestion"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Beform WH Positive Question
          </NavLink>
        </li>
        <li style={{ marginBottom: '15px' }}>
          <NavLink 
            to="/beformLevel1WhNegativeQuestion"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Beform WH Negative Question
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default WHQuestionLevel1;
