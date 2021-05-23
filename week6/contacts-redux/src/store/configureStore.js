import {createStore} from 'redux';
import rootReducer from '../reduce';

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}