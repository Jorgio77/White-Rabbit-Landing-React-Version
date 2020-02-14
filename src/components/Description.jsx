import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import 'bootstrap/dist/css/bootstrap.min.css';


function Description() {
  return (
     <Container>
        <Row>
            <Col lg={6} md={12} className="descriptionCol"><h1 className="descriptionText">Meet people you like, through events you love.</h1></Col>
            <Col lg={6} md={12} className="picCol"><img className="introImg" src="images/intro.png" alt="intro" /></Col>
        </Row>
     </Container>
  );
}

export default Description;