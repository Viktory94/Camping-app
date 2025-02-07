import "./../main.scss";
import React, { useState, useEffect } from 'react';









const CounterSet = () => {



    const [CountSet, setCountSet] = useState(0);

    useEffect(() => {
      localStorage.setItem('CountSet', JSON.stringify(CountSet));
      console.log(CountSet);
    }, [CountSet]); 


    return (
        <div className="btn">
          <button value={CountSet} onChange={(e) => setCountSet(e.target.value)} className='btn3' onClick={() => (setCountSet((CountSet) => CountSet > 0 ? --CountSet:0))}>-</button>
          {CountSet}
          <button value={CountSet} onChange={(e) => setCountSet(e.target.value)} className='btn3' onClick={() => setCountSet((CountSet) => ++CountSet)}>+</button>
        </div>
      );
    }
    
    
    export default CounterSet;