import React from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { registerAsync } from '../actions/actionRegistro';
import { useForm } from '../hooks/useForm';
import { ContainerForm, LoginDiv } from '../styles/LoginStyleds'

export const Registro = () => {

    const dispatch = useDispatch();

    const [values, handleInputChange] = useForm({
        nombre: '',
        email: '',
        contraseña: '',
        repeatContraseña: ''
    });

    const { nombre, email, contraseña, repeatContraseña } = values;


    const handleRegistro = (e) => {
        e.preventDefault();
        console.log(values);
        dispatch(registerAsync(email, contraseña, nombre))
    }

  return (
    <LoginDiv>
        <ContainerForm>
              <div className='text-center'>
                  <img src="https://res.cloudinary.com/karma09-jm/image/upload/v1644198232/BlockMaster/logo-blockBuster_awviao.png" alt="logo" width={200} />
              </div>
              <form onSubmit={handleRegistro} className='mt-4'>
              <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1">
                        <i className="bi bi-at"></i>
                      </InputGroup.Text>
                      <FormControl
                          type='text'
                          placeholder="Nombre"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          name='nombre'
                          value={nombre}
                          onChange={handleInputChange} 
                      />
                  </InputGroup>
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
                          value={email}
                          onChange={handleInputChange} 
                      />
                  </InputGroup>
                  <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1">
                        <i className="bi bi-at"></i>
                      </InputGroup.Text>
                      <FormControl
                          type='password'
                          placeholder="Contrasña"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          name='contraseña'
                          value={contraseña}
                          onChange={handleInputChange} 
                      />
                  </InputGroup>
                  <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1">
                        <i className="bi bi-at"></i>
                      </InputGroup.Text>
                      <FormControl
                          type='password'
                          placeholder="Repite tu contraseña"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          name='repeatContraseña'
                          value={repeatContraseña}
                          onChange={handleInputChange} 
                      />
                  </InputGroup>
                  <Button type='submit' variant="warning" className='w-100'>Registrarse</Button>
              </form>
              <div className='text-center mt-3'>
                <a href='/login'>Ya tengo cuenta</a>
            </div>
        </ContainerForm>
    </LoginDiv>
  )
}
