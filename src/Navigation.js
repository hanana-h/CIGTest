import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown, Button, Modal } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';
import { Link, withRouter } from 'react-router-dom';

function Navigation() {
    return (
        <div className="navigation">
            <Navbar bg="light" expand="lg">
                <Container >
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Brand href="/">
                        <img src={require('./assets/logo.png')} style={{ height: 60, width: 60, borderRadius: 25 }} />
                        <img src={require('./assets/flag.png')} style={{ margin: 10, height: 30, width: 40 }} />
                    </Navbar.Brand>

                    <Navbar.Collapse id="basic-navbar-nav" className="d-lg-flex justify-content-between">
                        <Nav className="w-100" style={{ padding: 10, backgroundColor: '#D5D5D5', borderRadius: 35, color: 'black', justifyContent: 'center' }}>
                            <NavLink className="nav-link" to="/">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Emirates</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <span className="sr-only">(current)</span>
                            </NavLink>
                            <NavLink className="nav-link" to="/">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>MainLand</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </NavLink>
                            <NavLink className="nav-link" to="/">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>No of Visa</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </NavLink>
                            <NavLink className="nav-link" to="/">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>No of Avtivities</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </NavLink>
                            <NavLink className="nav-link" to="/">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>License Type</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </NavLink>
                        </Nav>

                    </Navbar.Collapse>
                    <Nav style={{ display: 'contents' }}>
                        <div className="d-flex">
                            <NavLink className="navbar-brand mx-2" to="/">
                                <button className="px-2" style={{ backgroundColor: "#DC6B15", borderRadius: 25, padding: 2, borderColor: '#DC6B15' }}>Login</button>
                            </NavLink>
                            <NavLink className="navbar-brand mx-2" to="/">
                                <button className="px-2" style={{ backgroundColor: "#DC6B15", borderRadius: 25, padding: 2, borderColor: '#DC6B15' }}>SignUp</button>
                            </NavLink>
                        </div>
                    </Nav>
                </Container>
            </Navbar>


            {/* <Navbar className="navbar navbar-expand navbar-light bg-light">
                <Container>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <NavLink className="navbar-brand" to="/">
                        <img src={require('./assets/logo.png')} style={{ height: 60, width: 60, borderRadius: 25 }} />
                        <img src={require('./assets/flag.png')} style={{ margin: 10, height: 30, width: 40 }} />
                    </NavLink>

                    <Navbar.Collapse class="collapse navbar-collapse" id="basic-navbar-nav">
                        <div style={{ backgroundColor: '#D5D5D5', borderRadius: 35, color: 'black', justifyContent: 'center' }}>
                            <ul className="navbar-nav">
                                <li className="nav-item mx-2">
                                    <NavLink className="nav-link" to="/">
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Emirates</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        <span className="sr-only">(current)</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item mx-2">
                                    <NavLink className="nav-link" to="/">
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>MainLand</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </NavLink>
                                </li>
                                <li className="nav-item mx-2">
                                    <NavLink className="nav-link" to="/">
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>No of Visa</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </NavLink>
                                </li>
                                <li className="nav-item mx-2">
                                    <NavLink className="nav-link" to="/">
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>No of Avtivities</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </NavLink>
                                </li>
                                <li className="nav-item mx-2">
                                    <NavLink className="nav-link" to="/">
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>License Type</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </NavLink>
                                </li>
                                <li className="nav-item mx-5">
                                    <NavLink className="nav-link" to="/">
                                        <SearchIcon size={50} style={{ fontSize: '2rem', padding: 2, backgroundColor: '#DC6B15', color: '#D5D5D5', borderRadius: 50 }} />
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </Navbar.Collapse>
                    <div>
                        <NavLink className="navbar-brand mx-2" to="/">
                            <button className="px-2" style={{ backgroundColor: "#DC6B15", borderRadius: 25, padding: 2, borderColor: '#DC6B15' }}>Login</button>
                        </NavLink>
                        <NavLink className="navbar-brand mx-2" to="/">
                            <button className="px-2" style={{ backgroundColor: "#DC6B15", borderRadius: 25, padding: 2, borderColor: '#DC6B15' }}>SignUp</button>
                        </NavLink>
                    </div>
                </Container>


            </Navbar> */}


            <Navbar className="navbar-dark bg-dark" expand="lg" style={{borderRadius:25}}>
                <Container >
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <NavLink className="navbar-brand" to="/">
                        Categories
                    </NavLink>

                    <Navbar.Collapse id="basic-navbar-nav" className="d-lg-flex justify-content-between">
                        <Nav className="w-100" style={{ borderRadius: 35, color: 'black', justifyContent: 'center' }}>
                            <NavLink className="nav-link" to="/">
                                Home
                                <span className="sr-only">(current)</span>
                            </NavLink>
                            <NavLink className="nav-link" to="/about">
                                Licensing
                            </NavLink>
                            <NavLink className="nav-link" to="/contact">
                                Activity
                            </NavLink>
                            <NavLink className="nav-link" to="/blog">
                                Visa
                            </NavLink>
                            <NavLink className="nav-link" to="/blog">
                                Office
                            </NavLink>
                        </Nav>

                    </Navbar.Collapse>
                    <Nav style={{ display: 'contents' }}>
                        <div className="d-flex">
                        <NavLink className="navbar-brand" to="/About">
                            How it works
                        </NavLink>
                        <NavLink className="navbar-brand" to="/Contact">
                            Contact Us
                        </NavLink>
                        </div>
                    </Nav>
                </Container>
            </Navbar>




            {/* <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark" style={{ borderRadius: 20 }}>
                    <div className="container" >

                        <NavLink className="navbar-brand" to="/">
                            Categories
                        </NavLink>
                        <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: 'center' }}>
                            <div>
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/">
                                            Home
                                            <span className="sr-only">(current)</span>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/about">
                                            Licensing
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/contact">
                                            Activity
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/blog">
                                            Visa
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/blog">
                                            Office
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </Navbar.Collapse>
                        <NavLink className="navbar-brand" to="/About">
                            How it works
                        </NavLink>
                        <NavLink className="navbar-brand" to="/Contact">
                            Contact Us
                        </NavLink>

                    </div>


                </nav>
            </div> */}
        </div>
    );
}

export default Navigation;