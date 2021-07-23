import { createSlice } from '@reduxjs/toolkit';
let incremental = null;

export const timerSlice = createSlice({
name: 'counter',
  initialState: { 
  secondsElapsed: 0, 
  laps: []
},
reducers: {
  stop: () => {
    clearInterval(incremental);
  },
  reset: (state) => {
    clearInterval(incremental);
    state.secondsElapsed = 0;
    state.laps = [];
    },
  log: (state) => {
    state.laps = state.laps.concat([state.secondsElapsed]);
    },
  start: (state, action) => {
    state.secondsElapsed += action.payload;
    },
  },
});

export const { start, stop, reset, log } = timerSlice.actions;


export const startCount = amount => dispatch => {
  incremental = setInterval(() => {
    dispatch(start(amount));
  }, 1000);
};

export const saveTime = state => state.counter.secondsElapsed;
export const lap = state => state.counter.laps;


export default timerSlice.reducer;