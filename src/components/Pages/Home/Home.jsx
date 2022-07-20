import React from 'react';
import './Home.css'
import { Container, Row, Col } from 'react-bootstrap';
import Navbarr from '../../Navbar/Navbar';
import Footer from '../Footer/Footer';


const Home = () => {
    return (<>
        <Navbarr/>
        <Container id='home-container'>
            <h1>SACRIFICE</h1>
            <Row className='first-row'>
                <Col className='home-div'>
                    <h5>How can i sacrifice?</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo tempora, incidunt alias harum assumenda quaerat eligendi perspiciatis fugit sint dolorem. Voluptates ipsum libero voluptas non consequuntur cum debitis quod exercitationem?
                    </p>
                </Col>
            </Row>
            <Row>
                <Col className='home-div'>
                    <h5>How can i sacrifice?</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo tempora, incidunt alias harum assumenda quaerat eligendi perspiciatis fugit sint dolorem. Voluptates ipsum libero voluptas non consequuntur cum debitis quod exercitationem?
                    </p>
                </Col>
            </Row>
        </Container>
        <Footer/>

        </>);
}

export default Home;
