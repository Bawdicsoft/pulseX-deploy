import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import Home from "../Pages/Home/Home";
import Integration from "../Integration/Integration";
import { Injected } from "../Integration/Wallets";
import { useWeb3React } from '@web3-react/core';

const Navbarr = () => {
    const { active, activate, account } = useWeb3React()

    // console.log("address",account);
    // console.log('active: ', active)
    return (<div>
        <Container>
            <Integration/>
            <Navbar  expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/faqs">FAQs</Nav.Link>
                            <Nav.Link href="/donate">Donate</Nav.Link>
                            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link> */}
                        </Nav>
                        {/* <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                        </Form> */}
                            {active ?
                                        <Button className='btn btn-secondary' >{`${account.slice(0, 5)}...${account.slice(-5)}`}</Button> :
                                        <Button onClick={() => activate(Injected)}>
                                            Connect Wallet
                                        </Button>

                                    }
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* <Home/> */}
        </Container>
        </div>);
}

export default Navbarr;
