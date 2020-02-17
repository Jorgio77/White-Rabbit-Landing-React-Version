import React, {useState} from 'react';

import ClipLoader from "react-spinners/ClipLoader";

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function MyForm () {

    const [contact, setContact] = useState({
        name: "",
        email: "",
        submitted: false,
        loading: false,
        error: false
    })

    function setContactInfo(event) {
        const {name, value} = event.target;
        setContact({...contact, [name]: value});
    }

    async function sendContact(event) {
      event.preventDefault();
      setContact({ ...contact, loading: true});
      const response = await fetch('/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact)
      });
      const success = await response.json();
      console.log("SUCCESS? ", success);
      if (success === 1) handleSuccess();
      else handleError();
    }

    function handleSuccess() {
        setContact({ name: "", email: "", submitted: true, loading: false, error: false });
    }

    function handleError() {
        setContact({ ...contact, loading: false, error: true });
    }

    return(
      <Form className="form">
          <Row>
              <Col lg={6}>
                  <Form.Control type="text" placeholder="First name" onChange={setContactInfo} name="name" value={contact.name} />
              </Col>
              <Col lg={6}>
                  <Form.Control type="email" placeholder="Email" name="email" onChange={setContactInfo} value={contact.email} />
              </Col>
              <Col lg={12}>
                  {!contact.loading && !contact.submitted && !contact.error && <Button className="button" variant="dark" type="submit" onClick={sendContact}>Submit</Button>}
                  {!contact.loading && contact.submitted && !contact.error && <p> Submitted! </p>}
                  {!contact.loading && contact.error &&
                    <div>
                      <p> An error occurred :( <br /> please try again! </p>
                      <Button className="button" variant="dark" type="submit" onClick={sendContact}>Submit</Button>
                    </div>
                  }
                  {contact.loading &&
                    <ClipLoader
                      size={30}
                      color={"black"}
                      loading={contact.loading}
                      css={{ marginTop: 35 }}
                    />
                  }
              </Col>
          </Row>
      </Form>
    )
}

export default MyForm;
