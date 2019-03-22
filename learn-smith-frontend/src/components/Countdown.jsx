import React,{useRef,useState,useEffect} from 'react'
import PropTypes from 'prop-types'


//  https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Countdown =({timer}) =>{
  const [counter, counterupdate] = useState(timer);

  useInterval(() => {
    if (counter > 0) {
      counterupdate(counter - 1 );
    }
  }, 1000);
  useEffect(()=>{
    counterupdate(timer)
  },[timer])
  return (
    <div>
      {counter}
    </div>
  )
}

Countdown.propTypes = {
  num : PropTypes.number.isRequired
}

export default Countdown

