import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  stop,
  reset,
  log,
  saveTime,
  lap, 
  startCount
} from './timerSlice';


const countSeconds = (sec) =>
  Math.floor(sec / 60) +
    ':' +
  ('0' + sec % 60).slice(-2);

export function Timer() {
  const count = useSelector(saveTime);
  const lapCount = useSelector(lap);
  const dispatch = useDispatch();

  const Button = (props) =>
  <button type="button" {...props} className={"btn " + props.className}/>;

  return (
    <div className ="theBox">
      <div className="stopwatch">
        <h1 className="stopwatch-timer">{countSeconds(count)}</h1>
          <Button className="start-btn" 
            onClick={() => dispatch(startCount(1))}>
            start</Button>
          <Button className="stop-btn" 
            onClick={() => dispatch(stop())}>
            stop</Button>
            <Button className="reset-lap"
            onClick={() => dispatch(log())}>
            save</Button>
          <Button className="reset-lap"
            onClick={() => dispatch(reset())}>
            reset</Button>
          
        <ul className="stopwatch-laps">
          {lapCount.map((laps, i) =>
            <li 
              key={i} 
              className="stopwatch-lap">
              <strong>Lap {i + 1}</strong>
              / {countSeconds(laps)}
            </li>)
          }
        </ul>
      </div>
    </div>
  );
}


export default Timer;