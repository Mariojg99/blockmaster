import { typesMovies } from "../types/types";

const initialState = {
    movies: []
}

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesMovies.register:
            return {
                movies: [action.payload]
            }
        
        case typesMovies.list:
            return {
                movies: [...action.payload]
            }
    
        default:
            return state
    }
}