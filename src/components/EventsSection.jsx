import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import 'bootstrap/dist/css/bootstrap.min.css';


function EventsSection() {
  return (
     <Container className="eventsContainer">
        <Row className="eventDiv">
            <Col lg={3} md={6} sm={12} className="eventDiv">
                <img className="eventImg" src="https://galeriedesbains.ch/wp-content/uploads/2019/12/AxP_1215989.jpg" alt="exh"/>
                <h2>Exhibitions</h2>
            </Col>
            <Col lg={3} md={6} sm={12} className="eventDiv">
                <img className="eventImg" src="https://www.flawlessmilano.com/wp-content/uploads/2015/06/1930-speakeasy-bancone.jpg" alt="exh"/>
                <h2>Concerts</h2>
            </Col>
            <Col lg={3} md={6} sm={12} className="eventDiv">
                <img className="eventImg" src="https://lp-cms-production.imgix.net/news/2017/10/Hiker.jpg?auto=format&fit=crop&q=40&sharp=10&vib=20&ixlib=react-8.6.4" alt="exh"/>
                <h2>Exploring</h2>
            </Col>
            <Col lg={3} md={6} sm={12} className="eventDiv">
                <img className="eventImg" src="https://www.romeing.it/wp-content/uploads/2018/06/Butterfly-Roma-esterno-ristorante-4-770x513.jpg" alt="exh"/>
                <h2>And much more...</h2>
            </Col>
        </Row>
     </Container>
  );
}

export default EventsSection;