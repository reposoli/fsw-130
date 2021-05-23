import { configureStore } from '@reduxjs/toolkit';
import mediaReducer from '../features/media/mediaSlice';

export default configureStore({
  reducer: {
    media: mediaReducer,
  },
});