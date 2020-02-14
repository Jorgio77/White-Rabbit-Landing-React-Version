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
        loading: false
    })

    function setContactInfo(event) {
        const {name, value} = event.target;
        setContact({...contact, [name]: value});
    }

    function sendContact(event) {
        setContact({ ...contact, loading: true});
        setInterval(success, 1500);
    }

    function success() {
        setContact({ name: "", email: "", submitted: true, loading: false});
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
                {!contact.loading && !contact.submitted && <Button className="button" variant="dark" type="submit" onClick={sendContact}>Submit</Button>}
                {!contact.loading && contact.submitted && <p> Submitted! </p>}
                {contact.loading &&        
                <ClipLoader
                    css={"margin-top: 25px;"}
                    size={"20px"} this also works
                    color={"#123abc"}
                    loading={contact.loading}
                />}
            </Col>
        </Row>
    </Form>
    )
}

export default MyForm;
