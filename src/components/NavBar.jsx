import React from 'react'
import { Button, Container, Dropdown, Form, FormControl, InputGroup, Nav, Navbar } from 'react-bootstrap'
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
        <div>
            <Navbar bg="dark" variant="dark" expand='md'>
                <Container className='align-items-center'>
                    <Navbar.Brand href="#home">
                        <img src="https://res.cloudinary.com/karma09-jm/image/upload/v1644198232/BlockMaster/logo-blockBuster_awviao.png" alt="logo" width={100} />
                    </Navbar.Brand>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Todas</Nav.Link>
                            <Nav.Link href="#features">Más Valoradas</Nav.Link>
                            <Nav.Link href="#pricing">Menos valoradas</Nav.Link>
                        </Nav>
                        <Form>
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
                        <Dropdown className='m+-2'>
                            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="primary">
                                Usuario
                            </Dropdown.Toggle>

                            <Dropdown.Menu variant="dark">
                                <Dropdown.Item href="#/action-1" active>
                                    Agregar Película
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-4" onClick={() => handleLogout()}>Cerrar Sesión</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Navbar.Collapse>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                </Container>
            </Navbar>
        </div>
    )
}
