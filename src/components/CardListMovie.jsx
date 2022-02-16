import React, { memo, useEffect, useState } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { API_URL, IMG_PATH } from '../helpers/url';
import { CardMovie } from './CardMovie';

 const CardListMovie = memo(() => {

    const [movies, setMovies] = useState([])
    // const [checking, setChecking] = useState(true)

    useEffect(async () => {
        const resp = await fetch(API_URL)
        const data = await resp.json()
        console.log(data);
        setMovies([...movies, ...data.results]);
        // setChecking(false)
        
    }, [setMovies])

    
    console.log(movies);

    // if(checking){
    //     return(
    //         <div className='text-center my-10'>
    //             <Spinner animation="border" variant="warning" size='lg' />
    //         </div>
    //     )
    //   }
    
  return (
    <Container>
        <h1>Películas</h1>
        <Row className='mt-3'>
            {
                movies.map(movie => (
                    <Col>
                        <CardMovie key={movie.id}
                            id={movie.id}
                            poster={IMG_PATH + movie.poster_path}
                            calificacion={movie.vote_average}
                        />
                    </Col>
                ))
            }
        </Row>

    </Container>
  )
})

export default CardListMovie;
