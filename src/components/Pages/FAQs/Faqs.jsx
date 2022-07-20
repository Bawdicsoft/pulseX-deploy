import React from 'react';
import Navbarr from '../../Navbar/Navbar';
import {Accordion, Container} from 'react-bootstrap';
import "./Faqs.css";

const Faqs = () => {
    return (<>
        <Navbarr />
        <Container id='home-container'>
        <h1>SACRIFICE</h1>
            <Accordion className='first-row'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Question #1</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Question #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    </>);
}

export default Faqs;
