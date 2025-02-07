import './main.scss';
import Template from "./pages/Template";
import Tent from "./pages/Tent";
import Bag from "./pages/Bag";
import Rug from "./pages/Rug";
import Set from "./pages/Set";

import { React }  from 'react';


     
     import { HashRouter, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">

                  <HashRouter>
                  
                  <Routes>
                    <Route path="/" element={<Template />} />
                    <Route path="/Tent" element={<Tent />} />
                    <Route path="/Bag" element={<Bag />} />
                    <Route path="/Rug" element={<Rug />} />
                    <Route path="/Set" element={<Set />} />
                    
                  </Routes>
               </HashRouter>
    </div>
  );
}

export default App;

