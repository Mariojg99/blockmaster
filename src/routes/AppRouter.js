import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Login} from '../components/Login';
import {Registro} from '../components/Registro';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Spinner } from 'react-bootstrap';


const AppRouter = () => {

    const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if(user?.uid){
             //console.log(user)
             setIsLoggedIn(true)
            }
            else{
             setIsLoggedIn(false)
            }
    
            setChecking(false)
        })
    
     
    }, [setIsLoggedIn,setChecking])
    
    
    if(checking){
      return(
          <div className='text-center my-5'>
              <Spinner animation="border" variant="warning" size='lg' />
              <h1>Cargando...</h1>
          </div>
      )
    }

  return (
      <Router>
          <Routes>
              <Route path="/login" element={
                  <PublicRoutes isAuthenticated={isLoggedIn}>
                      <Login />
                  </PublicRoutes>
              } />

              <Route path="/registro" element={
                  <PublicRoutes isAuthenticated={isLoggedIn}>
                      <Registro />
                  </PublicRoutes>
              } />

              <Route path="/*" element={
                  <PrivateRoutes isAuthenticated={isLoggedIn}>
                      <DashboardRoutes />
                  </PrivateRoutes>
              } />
          </Routes>
      </Router>
  );
};

export default AppRouter;