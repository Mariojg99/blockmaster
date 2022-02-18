import React from 'react'
import { Button, Col, FormControl, InputGroup, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { loginEmailPassAsync, loginFacebookAsync, loginGoogleAsync } from '../actions/actionLogin';
import { useForm } from '../hooks/useForm';
import { ContainerForm, LoginDiv } from '../styles/LoginStyleds'

export const Login = () => {

    const dispatch = useDispatch();

    const {values, handleInputChange, reset} = useForm({
        email: '',
        contraseña: ''
    })

    const { email, contraseña } = values;


    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(loginEmailPassAsync(email, contraseña))
    }

    const handleGoogleAsync = () => {
        dispatch(loginGoogleAsync())
    }

    const handleFacebookAsync = () => {
        dispatch(loginFacebookAsync())
    }
  return (
    <LoginDiv>
        <ContainerForm>
            <div className='text-center'>
                <img src="https://res.cloudinary.com/karma09-jm/image/upload/v1644198232/BlockMaster/logo-blockBuster_awviao.png" alt="logo" width={200}/>
            </div>
            <form onSubmit={handleLogin} className='mt-4'>

                  <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1">
                        <i className="bi bi-at"></i>
                      </InputGroup.Text>
                      <FormControl
                          type='email'
                          placeholder="Email"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          name='email'
                          onChange={handleInputChange} 
                      />
                  </InputGroup>

                  <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon2">
                        <i className="bi bi-lock-fill"></i>
                      </InputGroup.Text>
                      <FormControl
                          type='password'
                          placeholder="Contraseña"
                          aria-label="Username"
                          aria-describedby="basic-addon2"
                          name='contraseña'
                          onChange={handleInputChange} 
                      />
                  </InputGroup>
                  <Button type='submit' variant="warning" className='w-100'>Ingresar</Button>
            </form>
            <div className='text-center mt-3'>
                <a href='/registro'>No tengo cuenta</a>
            </div>
            <hr className='text-white'/>
            <div className='text-center mt-3'>
                <p>Iniciar Sesión con: </p>
                <Row className='align-items-center'>
                    <Col>
                        <Button className='w-100 text-black' variant='light' onClick={() => handleGoogleAsync()}>
                            <Row>
                            <Col sm={2}>
                                    <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="Google" width='30px'/> 
                                </Col>
                                <Col sm={10}>
                                    Google
                                </Col>
                            </Row>
                        </Button>
                    </Col>
                    <Col>
                        <Button className='w-100' onClick={() => handleFacebookAsync()}>
                            <Row>
                            <Col sm={2}>
                                <img src="https://images.vexels.com/media/users/3/223136/isolated/preview/984f500cf9de4519b02b354346eb72e0-facebook-icon-redes-sociales.png" alt="Facebook" width='30px'/>
                                </Col>
                                <Col sm={10}>
                                    Facebook
                                </Col>
                            </Row>
                        </Button>
                    </Col>
                </Row>
            </div>
        </ContainerForm>
    </LoginDiv>
  )
}
