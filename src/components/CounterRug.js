import "./../main.scss";
import React, { useState, useEffect } from 'react';









const CounterRug = () => {



    const [CountRug, setCountRug] = useState(0);

    useEffect(() => {
      localStorage.setItem('CountRug', JSON.stringify(CountRug));
      console.log(CountRug);
    }, [CountRug]); 


    return (
        <div className="btn">
          <button value={CountRug} onChange={(e) => setCountRug(e.target.value)} className='btn3' onClick={() => (setCountRug((CountRug) => CountRug > 0 ? --CountRug:0))}>-</button>
          {CountRug}
          <button value={CountRug} onChange={(e) => setCountRug(e.target.value)} className='btn3' onClick={() => setCountRug((CountRug) => ++CountRug)}>+</button>
        </div>
      );
    }
    
    
    export default CounterRug;