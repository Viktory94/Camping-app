import Header2 from '../components/Header2.js';
import tent2 from './../images/tent2.jpg';
import tent3 from './../images/tent3.jpg'

const Tent = () => {
    return (
		<>
			<Header2 />
			
            
				<div className="main__background">
        <div className="main__content_list">
      <article id="content" className="main__content_line-break"> 
      
          <div className="main__image">
            <div> <img src={tent2} alt="Палатка 2-местная" className="scale"></img></div>
            <div className="main__article">
            <h4 className="main__title">Палатка 2-местная</h4><br></br>
            <p className="main__text">Низкий вес: Вес палатки меньше 2 кг</p>
            <p className="main__text">Простая сборка: Классическая конструкция на 2 дугах удобна в установке</p>
            <p className="main__text">Вентиляция: Вентиляционное окно с москитной сеткой обеспечивает отличную циркуляцию воздуха.</p>
          </div>
          
            </div>
      </article>
      </div>
      <br></br>
      <div>
      <article id="content" className="main__content_line-break">   
            <div className="main__image" >
              <div> <img src={tent3} alt="Палатка 3-местная" className="scale"></img></div>
              <div className="main__article">
              <h4 className="main__title">Палатка 3-местная</h4><br></br>
              <p className="main__text">Низкий вес: Вес палатки меньше 2 кг</p>
              <p className="main__text">Экологичность: Материалы, из которых изготовлена палатка, не содержат фторполимеров.</p>
              <p className="main__text">Практичность: Легкая и компактная модель не занимает много места, но при этом сохраняет весь функционал треккинговой палатки.</p>
              <p className="main__text">Низкий вес: Вес палатки меньше 2 кг</p>
              <p className="main__text">Компактность: Размер палатки в сложенном виде 45х17х17 см.</p>
              <p className="main__text">Простая сборка: Продуманная конструкция с единой Y-образной дугой упрощает процесс установки.</p>
              <p className="main__text">Водонепроницаемость: Тент с полиуретановым покрытием защитит от промокания даже во время затяжных дождей. Показатель водонепроницаемости 3000 мм в.ст.</p>
            </div>
              </div>
            </article>
            </div>
            </div>
          
            
			
     
		</>
	);
}

export default Tent;