import "./../main.scss";
import Form from '../components/Form.js';

import {Link} from 'react-router-dom'; 








const Header2 = () => {
    return (
		<header className="header__background">
      
	 
      
					
					<ul className="header__list">
						<li className="header__list_menu">
							<Link to="/">
								Главная
							</Link>
							<Link to="/Tent">
								Палатки
							</Link>
							<Link to="/Bag">
								Спальные мешки
							</Link>
              <Link	to="/Rug">
								Коврики
							</Link>
              <Link to="/Set">
								Наборы
							</Link>
						</li>
						
						<Form />
					</ul>
		
			
      
      
    
			
      
      
      </header>


	);
}

export default Header2;