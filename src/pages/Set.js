import Header2 from '../components/Header2.js';
import set1 from './../images/set1.jpg';
import set2 from './../images/set2.jpg';
import set3 from './../images/set3.jpg';




const Set = () => {
    return (
		<>
			<Header2 />
      <div className="main__background">
      <article id="content" className="main__content_line-break">  
      
          <div className="main__image_set">
          <div> <img src={set1} alt='Комплект для одного'  className="scale"></img></div>
          <div className="main__article_set"> 
          <h4 className="main__title">Комплект для одного</h4><br></br>
            <p className="main__text">В комплект входит:<br/>

                - Двухместная палатка;<br/>
                - Спальный мешок на +5 градусов;<br/>
                - Туристический коврик;<br/>
                - Походная сидушка</p>
            <p className="main__text">Характеристики:<br/>
                - Температура комфорта спального мешка: +5;<br/>
                - Количество мест в палатке: 2;<br/>
                - Толщина коврика и сидушки: 0,8 - 1 см;<br/>
                - Вес: 3,3 кг.</p>
            
        </div>
        </div>
      </article>
        
          <article id="content" className="main__content_line-break"> 
      
            <div className="main__image_set">
            <div> <img src={set2} alt='Комплект для двоих'  className="scale"></img></div>
            <div className="main__article_set"> 
            <h4 className="main__title">Комплект для двоих</h4><br></br>
              <p className="main__text">В комплект входит:<br/>
  
                  - Двухместная палатка;<br/>
                  - 2 спальных мешка на +5 градусов;<br/>
                  - 2 туристических коврика;<br/>
                  - 2 походные сидушки</p>
              <p className="main__text">Характеристики:<br/>
                  - Температура комфорта спального мешка: +5;<br/>
                  - Количество мест в палатке: 2;<br/>
                  - Толщина коврика и сидушки: 0,8 - 1 см;<br/>
                  - Вес: 5,5 кг.</p>
              
            </div>
              </div>
              
        </article>
        <br></br>
            
        <article id="content" className="main__content_line-break">  
      
                <div className="main__image_set">
                <div> <img src={set3} alt='Комплект для троих'  className="scale"></img></div>
                <div className="main__article_set"> 
                <h4 className="main__title">Комплект для троих</h4><br></br>
                  <p className="main__text">В комплект входит:<br/>
      
                      - Трехместная палатка;<br/>
                      - 3 спальных мешка на +5 градусов;<br/>
                      - 3 туристических коврика;<br/>
                      - 3 походные сидушки</p>
                  <p className="main__text">Характеристики:<br/>
                      - Температура комфорта спального мешка: +5;<br/>
                      - Количество мест в палатке: 3;<br/>
                      - Толщина коврика и сидушки: 0,8 - 1 см;<br/>
                      - Вес: 9,5 кг.</p>
                  
                </div>
                  </div> 
            </article>
          </div>
		</>
	);
}

export default Set;