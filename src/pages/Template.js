import Header from '../components/Header.js';

import bg1 from './../images/bg1.jpg'

const Template = () => {
    return (
		<>
			<Header />
			
      
			<div className='images__background'>
      <img src={bg1} alt="Главная страница" class="scale"></img>
      <h1 className='images__background_title'>Аренда походного снаряжения</h1>
      </div>
	 
     
		</>
		
	);

	
}



export default Template;