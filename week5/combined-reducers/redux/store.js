import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const redux = require("redux");
const {combineReducers, createStore} = redux;
import moviesReducer from "./movies.js";
import tvShowsReducer from "./tvShows.js";


const rootReducer = combineReducers({
    movies: moviesReducer,
    tvShows: tvShowsReducer
})

const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})


export default store;