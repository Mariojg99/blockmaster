import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { typesMovies } from "../types/types";

export const registerMovieAsync = (titulo, genero, calificacion, urlTrailer, sinopsis, poster) => {
    console.log(titulo);
    return async(dispatch) => {
        const newMovie = {
            titulo, genero, calificacion, urlTrailer, sinopsis, poster
        }
        await addDoc(collection(db, "peliculas"), newMovie)
            .then(resp => {
                dispatch(registerMovieSync(newMovie))
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export const registerMovieSync = (pelicula) => {
    return {
        type: typesMovies.register,
        payload: pelicula
    }
}

export const listMoviesAsync = () => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(collection,(db, "peliculas"));
        const pelicula = [];
        querySnapshot.forEach((titulo) => {
            pelicula.push({
                ...titulo.data()
            })
        });
        dispatch(listMoviesSync(pelicula));
    }
}

export const listMoviesSync = (peliculas) => {
    return {
        type: typesMovies.list,
        payload: peliculas
    }
}