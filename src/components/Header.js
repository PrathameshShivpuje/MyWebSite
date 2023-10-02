import React from 'react';


const Header = () => {
  const listStyle = {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold', // Make the header values bold
  };

  return (
    <header style={{ backgroundColor: '#000000', color: '#fff', padding: '30px 0' }}>
      <nav>
        <ul style={listStyle}>
        <li className="menu-item"> {/* Add menu-item class for hover effect */}
            <a href="#home" style={linkStyle}>
              <i className="fas fa-home"></i> Home
            </a>
          </li>
          <li className="menu-item"> {/* Add menu-item class for hover effect */}
            <a href="#about" style={linkStyle}>
              <i className="fas fa-user"></i> About Me
            </a>
          </li>
          <li className="menu-item"> {/* Add menu-item class for hover effect */}
            <a href="#employment" style={linkStyle}>
              <i className="fas fa-briefcase"></i> Employment History
            </a>
          </li>
          <li className="menu-item"> {/* Add menu-item class for hover effect */}
            <a href="#certifications" style={linkStyle}>
              <i className="fas fa-certificate"></i> Certifications
            </a>
          </li>
          <li className="menu-item"> {/* Add menu-item class for hover effect */}
            <a href="#education" style={linkStyle}>
              <i className="fas fa-graduation-cap"></i> Education
            </a>
          </li>
          <li className="menu-item"> {/* Add menu-item class for hover effect */}
            <a href="#contact" style={linkStyle}>
              <i className="fas fa-envelope"></i> Contact
            </a>
          </li>
         
        </ul>
      </nav>
    </header>
  );
}

export default Header;
