import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import 'bootstrap/dist/css/bootstrap.min.css';


function Chat() {
  return (
     <Container className="findPeopleContainer">
        <Row>
            <Col lg={6} md={12}>
                <img src="images/chat.png" alt="" />
            </Col>
            <Col lg={6} md={12} className="chatCol">
                <p>Get to know the person you're going to share the adventure with, and go!</p>
            </Col>
        </Row>
     </Container>
  );
}

export default Chat;
