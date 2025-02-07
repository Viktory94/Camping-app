import Header2 from '../components/Header2.js';
import bag15 from './../images/bag15.jpg';
import bag0 from './../images/bag0.jpg';
import bag18 from './../images/bag18.jpg';



const Bag = () => {
    return (
		<>
			<Header2 />
      <div className="main__background">
      <article id="content" className="main__content_line-break"> 
      
          <div className="main__image">
            <div> <img src={bag15} alt='Спальный мешок -18'  className="scale"></img></div>
            <div className="main__article"> 
            <h4 className="main__title">Спальный мешок +10 правосторонний</h4><br></br>
            <p className="main__text">Верхняя температура комфорта: +15</p>
            <p className="main__text">Нижняя температура комфорта: +10</p>
            <p className="main__text">Экстремальная температура: +5</p>
            <p className="main__text">Максимальный рост пользователя, см: 200</p>
            <p className="main__text">Наличие карманов и капюшона: да</p>
          </div>
          <div id='form-wrap'>
  
          </div>
            </div>
      </article>
          
      <article id="content" className="main__content_line-break">   
            <div className="main__image">
            <div> <img src={bag0} alt='Спальный мешок 0'  className="scale"></img></div>
            <div className="main__article"> 
            <h4 className="main__title">Спальный мешок 0</h4><br></br>
            <p className="main__text">Верхняя температура комфорта: +5</p>
            <p className="main__text">Нижняя температура комфорта: 0</p>
            <p className="main__text">Экстремальная температура: -5</p>
            <p className="main__text">Максимальный рост пользователя, см: 180</p>
            <p className="main__text">Наличие карманов и капюшона: да</p>
            </div>
              </div>
            </article>
            <br></br>


            <article id="content" className="main__content_line-break">   
            <div className="main__image">
              <div> <img src={bag18} alt='Спальный мешок -18' className="scale"></img></div>
              <div className="main__article"> 
            <h4 className="main__title">Спальный мешок -18</h4><br></br>
            <p className="main__text">Верхняя температура комфорта: -12.5</p>
            <p className="main__text">Нижняя температура комфорта: -18</p>
            <p className="main__text">Экстремальная температура: -20.4</p>
            <p className="main__text">Максимальный рост пользователя, см: 208</p>
            <p className="main__text">Наличие карманов и капюшона: да</p>
            </div>
              </div>
            </article>
          </div>
		</>
	);
}

export default Bag;