import { API_URL } from "./url"

export const getInfoMovies = async() => {
    const resp = await fetch(API_URL+1)
    const data = await resp.json()

    const { id, poster_path, vote_average, overview } = data;
    console.log(data);

    let dataMovie = { id, poster_path, vote_average, overview }

    return dataMovie
}