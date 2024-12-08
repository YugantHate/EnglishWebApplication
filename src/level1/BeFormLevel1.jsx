import React from 'react';
import { NavLink } from 'react-router-dom';
import './TenseLevel1.css'; // Import the CSS file

const BeFormLevel1 = () => {
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
            to="/beformLevel1Introduction"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Introduction
          </NavLink>
        </li>
        <li style={navItemStyle}>
          <NavLink
            to="/beformLevel1PositiveStatement"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Positive Statement
          </NavLink>
        </li>
        <li style={navItemStyle}>
          <NavLink
            to="/beformLevel1NegativeStatement"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Negative Statement
          </NavLink>
        </li>
        <li style={navItemStyle}>
          <NavLink
            to="/beformLevel1PositiveQuestion"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Positive Question
          </NavLink>
        </li>
        <li style={navItemStyle}>
          <NavLink
            to="/beformLevel1NegativeQuestion"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Negative Question
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default BeFormLevel1;
