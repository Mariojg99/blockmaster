import React from 'react'
import { Button, Container, Dropdown, Form, FormControl, InputGroup, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutAsync } from '../actions/actionLogin';

export const NavBar = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutAsync())
        navigate("/login")
    }

    return (
        <header
        // className='position-sticky top-0'
        >
            <Navbar bg="transparent" variant="dark" expand='md'>
                <Container className='align-items-center'>
                    <Navbar.Brand href="/home">
                        <img src="https://res.cloudinary.com/karma09-jm/image/upload/v1644198232/BlockMaster/logo-blockBuster_awviao.png" alt="logo" width={100} />
                    </Navbar.Brand>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Todas</Nav.Link>
                            <Nav.Link href="#features">Más Valoradas</Nav.Link>
                            <Nav.Link href="#pricing">Menos valoradas</Nav.Link>
                        </Nav>
                        <Form className='me-2'>
                            <InputGroup>
                                <FormControl
                                    type='search'
                                    placeholder="Buscar"
                                    aria-label="Search"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="warning" id="button-addon2">
                                    <i className="bi bi-search"></i>
                                </Button>
                            </InputGroup>
                        </Form>
                        <NavDropdown title="Mi Cuenta" menuVariant='dark'>
                            <NavDropdown.Item href="/registro-peliculas">
                                Agregar Película
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#" onClick={() => handleLogout()}>Cerrar Sesión</NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                </Container>
            </Navbar>
        </header>
    )
}
