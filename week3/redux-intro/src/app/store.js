import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../timer/timerSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});