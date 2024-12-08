import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './TenseLevel1.css'; // Import the CSS file

const TenseLevel1 = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px',
  };

  const navListStyle = {
    textAlign: 'center',
    listStyleType: 'none',
    padding: '0',
    width: '450px',
    maxWidth: '600px',
    margin: '0 auto',
  };

  const navItemStyle = {
    marginBottom: '15px',
  };

  return (
    <div style={containerStyle}>
      <ul style={navListStyle}>
        <li style={navItemStyle}>
          <NavLink 
            to="/tenseLevel1Introduction" 
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Introduction
          </NavLink>
        </li>

        <li style={navItemStyle}>
          <NavLink 
            to="/tenseLevel1SimpleTense"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Simple Tense
          </NavLink>
        </li>

        <li style={navItemStyle}>
          <NavLink 
            to="/tenseLevel1Continues"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Continues Tense
          </NavLink>
        </li>

        <li style={navItemStyle}>
          <NavLink 
            to="/tenseLevel1Prefect"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Prefect Tense
          </NavLink>
        </li>

        <li style={navItemStyle}>
          <NavLink 
            to="/tenseLevel1PrefectContinues"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Prefect Continues Tense
          </NavLink>
        </li>

        <li style={navItemStyle}>
          <NavLink 
            to="/tenseLevel1PositiveQuestion"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Positive Question
          </NavLink>
        </li>

        <li style={navItemStyle}>
          <NavLink 
            to="/tenseLevel1NegativeQuestion"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Negative Question
          </NavLink>
        </li>

        <li style={navItemStyle}>
          <NavLink 
            to="/tenseLevel1WHPositiveQuestion"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            WH Positive Tense Question
          </NavLink>
        </li>

        <li style={navItemStyle}>
          <NavLink 
            to="/tenseLevel1WHNegativeQuestion"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            WH Negative Tense Question
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default TenseLevel1;


  
// const navigate = useNavigate();
//   const intro = () => {
//     navigate("/tenseLevel1Introduction");
//   }
        {/* <button onClick={()=>intro()}>Introduction</button> */}
