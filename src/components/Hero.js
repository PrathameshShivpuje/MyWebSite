import React from 'react';

const Hero = () => {
  const heroStyle = {
    textAlign: 'center',
    padding: '100px 0',
  };

  const imageStyle = {
    width: '200px', // Adjust the width to your preferred size
    height: '200px', // Adjust the height to your preferred size
    borderRadius: '50%', // Makes the image circular
    backgroundColor: '#2f3030', // Optional: Add a background color if needed
    padding: '10px', // Optional: Add padding to the image
    marginBottom: '20px', // Add margin at the bottom of the image
  };

  const nameStyle = {
    color: '#fff',
    fontSize: '3rem',
  };

  const roleStyle = {
    color: '#8c9cb0', // Change the color to #8c9cb0
    fontSize: '2rem',
  };

  const socialIconsStyle = {
    marginTop: '20px', // Add margin at the top of social icons
  };

  const socialIconStyle = {
    color: '#8c9cb0', // Change the color to #8c9cb0
    fontSize: '1.5rem',
    margin: '0 10px', // Add horizontal spacing between icons
  };

  const socialIconSeparatorStyle = {
    color: '#fff', // Color of the line separator
    fontSize: '1.5rem',
    margin: '0 10px', // Add horizontal spacing between icons
  };

  return (
    <section id="home" className="hero" style={heroStyle}>
      <img
        src="/Image.jpg" // Update the path to match the actual location of your image
        alt="Prathamesh Shivpuje"
        style={imageStyle}
      />
      <h1 style={nameStyle}>Prathamesh Shivpuje</h1>
      <p style={roleStyle}>Senior Software Engineer</p>
    
      <div style={socialIconsStyle}>
        <a
          href="https://www.linkedin.com/in/prathamesh-shivpuje-0230bb1b9"
          target="_blank"
          rel="noopener noreferrer"
          style={socialIconStyle}
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <span style={socialIconSeparatorStyle}>|</span> {/* Add a separator line */}
        <a
          href="https://www.facebook.com/yourfacebookprofile"
          target="_blank"
          rel="noopener noreferrer"
          style={socialIconStyle}
        >
          <i className="fab fa-facebook"></i>
        </a>
        <span style={socialIconSeparatorStyle}>|</span> {/* Add a separator line */}
        <a
          href="https://twitter.com/yourtwitterhandle"
          target="_blank"
          rel="noopener noreferrer"
          style={socialIconStyle}
        >
          <i className="fab fa-twitter"></i> 
        </a>
        <span style={socialIconSeparatorStyle}>|</span> {/* Add a separator line */}
        <a
          href="https://instagram.com/yourinstagram"
          target="_blank"
          rel="noopener noreferrer"
          style={socialIconStyle}
        >
          <i className="fab fa-instagram"></i> 
        </a>
      </div>
    </section>
  );
}

export default Hero;
