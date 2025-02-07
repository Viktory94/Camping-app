import "./../main.scss";
import React, { useState, useEffect } from 'react';









const CounterBag = () => {



    const [CountBag, setCountBag] = useState(0);

    

    useEffect(() => {
      localStorage.setItem('CountBag', JSON.stringify(CountBag));
      console.log(CountBag);
    }, [CountBag]); 


    return (
        <div className="btn">
          <button value={CountBag} onChange={(e) => setCountBag(e.target.value)} className='btn3' onClick={() => (setCountBag((CountBag) => CountBag>0 ? (--CountBag):0))}>-</button>
          {CountBag}
          <button value={CountBag} onChange={(e) => setCountBag(e.target.value)} className='btn3' onClick={() => setCountBag((CountBag) => ++CountBag)}>+</button>
        </div>
      );
    }
    
    
    export default CounterBag;