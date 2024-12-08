
import React from 'react';
import { NavLink } from 'react-router-dom';
// import './TenseLevel1.css'; 

const Level2ModelVerb = () => {
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
            to="/modelverbLevel2Introduction"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Introduction
          </NavLink>
        </li>
        <li style={navItemStyle}>
          <NavLink
            to="/modelverbLevel2PositiveStatement"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Positive Statement
          </NavLink>
        </li>
        <li style={navItemStyle}>
          <NavLink
            to="/modelverbLevel2NegativeStatement"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Negative Statement
          </NavLink>
        </li>
        <li style={navItemStyle}>
          <NavLink
            to="/modelverbLevel2PositiveQuestion"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Positive Question
          </NavLink>
        </li>
        <li style={navItemStyle}>
          <NavLink
            to="/modelverbLevel2NegativeQuestion"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Negative Question
          </NavLink>
        </li>

        <li style={navItemStyle}>
          <NavLink
            to="/modelverbLevel2WHPositiveQuestion"
            className="nav-link"
            activeClassName="nav-link-active"
          >
           WH Positive Question
          </NavLink>
        </li>

        <li style={navItemStyle}>
          <NavLink
            to="/modelverbLevel2WHNegativeQuestion"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            WH Negative Question
          </NavLink>
        </li>
      </ul>
    </div>
  );
};




export default Level2ModelVerb;

