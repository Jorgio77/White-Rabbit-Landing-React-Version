import React from 'react';

import Container from 'react-bootstrap/Container';


function Footer() {
const d = new Date().getFullYear();
  return (
     <div className="footer">
        <p>©{d} by Dawoof Limited</p>
     </div>
  );
}

export default Footer;