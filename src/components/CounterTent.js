import "./../main.scss";
import React, { useState, useEffect } from 'react';









const CounterTent = () => {



    const [countTent, setCountTent] = useState(0);

    useEffect(() => {
      localStorage.setItem('countTent', JSON.stringify(countTent));
      console.log(countTent);
    }, [countTent]); 


    return (
        <div className="btn">
          <button value={countTent} onChange={(e) => setCountTent(e.target.value)} className='btn3' onClick={() => (setCountTent((countTent) => countTent > 0 ? --countTent:0))}>-</button>
          {countTent}
          <button value={countTent} onChange={(e) => setCountTent(e.target.value)} className='btn3' onClick={() => setCountTent((countTent) => ++countTent)}>+</button>
        </div>
      );
    }
    
    
    export default CounterTent;