import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const DirectAndIndirectSpeech = () => {

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
                to="/introductiondirectandindirectspeech" 
                className="nav-link"
                activeClassName="nav-link-active"
              >
                Introduction
              </NavLink>
            </li>
    
            <li style={navItemStyle}>
              <NavLink 
                to="/positivestatementdirectandindirectspeech"
                className="nav-link"
                activeClassName="nav-link-active"
              >
               Positive Statement
              </NavLink>
            </li>
    
            <li style={navItemStyle}>
              <NavLink 
                to="/negativestatementdirectandindirectspeech"
                className="nav-link"
                activeClassName="nav-link-active"
              >
                Negative Statement
              </NavLink>
            </li>
    
            <li style={navItemStyle}>
              <NavLink 
                to="/positiveQuedirectandindirectspeech"
                className="nav-link"
                activeClassName="nav-link-active"
              >
               Positive Question
              </NavLink>
            </li>
    
            <li style={navItemStyle}>
              <NavLink 
                to="/negativeQuedirectandindirectspeech"
                className="nav-link"
                activeClassName="nav-link-active"
              >
               Negative Question
              </NavLink>
            </li>
    
            <li style={navItemStyle}>
              <NavLink 
                to="/whpositiveQuedirectandindirectspeech"
                className="nav-link"
                activeClassName="nav-link-active"
              >
                WH Positive Question
              </NavLink>
            </li>
    
            <li style={navItemStyle}>
              <NavLink 
                to="/whnegativeQuedirectandindirectspeech"
                className="nav-link"
                activeClassName="nav-link-active"
              >
                WH Negative Question
              </NavLink>
            </li>
    
          </ul>
        </div>
      );
    }
    
export default DirectAndIndirectSpeech
  