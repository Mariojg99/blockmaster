import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { typesMovies } from "../types/types";

// Borrar
export const deleteAsync = (titulo) => {
    return async(dispatch) => {
        const movieCollection = collection(db, "peliculas");
        const q = query(movieCollection, where("titulo","==", titulo));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((title) => {
            console.log(title.id);
            deleteDoc(doc(db,"peliculas", title.id))
            .then(resp => {
                dispatch(deleteSync(titulo))
            })
            .catch(error => {
                console.log(error.message);
            })
        });
    }
}

export const deleteSync = (titulo) => {
    return {
        type: typesMovies.delete,
        payload: titulo
    }
}

// listar
export const listMoviesAsync = () => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(collection(db, "peliculas"));
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

// registrar
export const registerMovieAsync = (titulo, genero, calificacion, urlTrailer, sinopsis, poster) => {
    console.log(titulo);
    return async (dispatch) => {
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