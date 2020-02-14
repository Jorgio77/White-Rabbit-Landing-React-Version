import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import 'bootstrap/dist/css/bootstrap.min.css';


function FindPeople() {
  return (
     <Container className="findPeopleContainer">
        <Row>
            <Col lg={6} md={12}>
                <img src="images/choose.png" alt="" />
                <p>Browse through people that want to go on the same events and choose the one you like...</p>
            </Col>
            <Col lg={6} md={12}>
                <img src="images/chat.png" alt="" />
                <p>...if they liked you back, you can start to chat!</p>
            </Col>
        </Row>
     </Container>
  );
}

export default FindPeople;