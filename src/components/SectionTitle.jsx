import React from 'react';

import Container from 'react-bootstrap/Container';


import 'bootstrap/dist/css/bootstrap.min.css';


function SectionTitle(props) {
  return (
    <section className= {!props.backgroundColor ? "sectionTitle" : "cta"}>
     <Container>
        <h1>{props.title}</h1>
     </Container>
    </section>

  );
}

export default SectionTitle;

