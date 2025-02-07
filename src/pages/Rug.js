import Header2 from '../components/Header2.js';
import rug1 from './../images/rug1.jpg';
import rug2 from './../images/rug2.jpg';




const Rug = () => {
    return (
		<>
			<Header2 />
      <div className="main__background">
      <article id="content" className="main__content_line-break"> 
      
          <div className="main__image">
          <div> <img src={rug1} alt='Коврик пенный'  className="scale"></img></div>
          <div className="main__article"> 
          <h4 className="main__title">Коврик пенный</h4><br></br>
          <p className="main__text">Состав: вспененный полиэтилен</p>
          <p className="main__text">Вес, кг: 0,4</p>
          <p className="main__text">Размеры (дл х шир х выс), см: 180 x 60 x 1,2</p>
          <p className="main__text">Размер в сложенном виде (дл х шир х выс), см: 60 х 25</p>
          </div>
          </div>
         
            
      </article>
          <br></br>


          <article id="content" className="main__content_line-break">  
            <div className="main__image"  >
            <div> <img src={rug2} alt='Коврик туристический'  className="scale"></img></div>
            <div className="main__article"> 
            <h4 className="main__title">Коврик туристический</h4><br></br>
            <p className="main__text">Состав: вспененный полиэтилен</p>
            <p className="main__text">Вес, кг: 0,5</p>
            <p className="main__text">Размеры (дл х шир х выс), см: 185 x 58 x 1,8</p>
            <p className="main__text">Размер в сложенном виде (дл х шир х выс), см: 56 х 15</p>
            </div>
              </div>
            </article>
          </div>
		</>
	);
}

export default Rug;