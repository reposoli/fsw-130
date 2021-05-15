import store from "./redux/store.js";
import { addMovie, removeMovie, getAllMovies } from "./redux/movies.js";
import { addTvShow, removeTvShow, getAllTvShows } from "./redux/tvShows.js";

//ADD MOVIE
store.dispatch(addMovie("Harry Potter & The Sorcers Stone"));
store.dispatch(addMovie("Harry Potter & The Chamber of Secrets"));
store.dispatch(addMovie("Harry Potter & The Prisoner of Azkaban"));
store.dispatch(addMovie("Harry Potter & The Goblet of Fire"));
store.dispatch(addMovie("Harry Potter & Order of the Phoenix"));
store.dispatch(addMovie("Harry Potter & The Half Blood Prince"));
store.dispatch(addMovie("Harry Potter & Deathly Hallows"));

//ADD TV SHOW
store.dispatch(addTvShow("The Ozarks"));
store.dispatch(addTvShow("Shameless"));
store.dispatch(addTvShow("Dead to Me"));
store.dispatch(addTvShow("Little Fires Everywhere"))

//REMOVE MOVIE
store.dispatch(removeMovie("Harry Potter & The Sorcers Stone"));
store.dispatch(removeMovie("Harry Potter & The Chamber of Secrets"));

//REMOVE TV SHOW
store.dispatch(removeTvShow("Little Fires Everywhere"));

//GET ALL MOVIES
store.dispatch(getAllMovies());

//GET ALL TV SHOWS
store.dispatch(getAllTvShows());