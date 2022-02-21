import React, { memo, useEffect, useState } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { API_URL, IMG_PATH } from '../helpers/url';
import { CardMovie } from './CardMovie';
import { ModalInfoMovie } from './ModalInfoMovie';

 const CardListMovie = memo(() => {

    const [movies, setMovies] = useState([])
    const [pagina, setPagina] = useState(1)
    // const [checking, setChecking] = useState(true)

    useEffect(() => {
        getMoviesbyScroll()
    }, [pagina])

    const getMoviesbyScroll = async () => {
        const resp = await fetch(API_URL+pagina)
        const data = await resp.json()
        console.log(data);
        setMovies([...movies, ...data.results]);
    }
    
    const scrollBottom = () => {
        setPagina(pagina + 1)
    }

    window.onscroll = () => {
        const body = document.querySelector('body')
        if (document.documentElement.scrollTop + window.innerHeight >= body.scrollHeight ) {
            scrollBottom();
        }
    }
    
  return (
    <Container>
        <h1>Películas</h1>
        <Row className='mt-3' sm={6}>
            {
                movies.map(movie => (
                    <Col>
                        <ModalInfoMovie key={movie.id}
                            id={movie.id}
                            poster={IMG_PATH + movie.poster_path}
                            titulo={movie.title}
                            fecha={movie.release_date}
                            calificacion={movie.vote_average}
                            sinopsis={movie.overview}
                            Children={
                                <CardMovie key={movie.id}
                                    id={movie.id}
                                    poster={IMG_PATH + movie.poster_path}
                                    calificacion={movie.vote_average}
                                />
                            }
                        />
                    </Col>
                ))
            }
        </Row>

    </Container>
  )
})

export default CardListMovie;
