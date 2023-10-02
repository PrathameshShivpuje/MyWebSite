import React from 'react';

const Content = ({ sectionId, title, children }) => {
  return (
    <section id={sectionId} className="content" style={{ padding: '40px' }}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default Content;
