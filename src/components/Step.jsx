import React from 'react';

import Container from 'react-bootstrap/Container';


import 'bootstrap/dist/css/bootstrap.min.css';


function Step(props) {
  return (
    <section>
        <Container className="step">
            <h1>{props.step}</h1>
            <h1>{props.title}</h1>
            {props.description && <p className="steponep">Scroll through the events happening in your city. <br/> What are you into?</p>}
        </Container>
    </section>

  );
}

export default Step;

