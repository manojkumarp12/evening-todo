import card4 from './assets/image2.jpg';
import card5 from './assets/image3.jpg';
import card6 from './assets/image4.jpg';
import card7 from './assets/image5.jpg';
import '../Component/Ext.css'

function Container() {
  return (
    <div className='parent'>
      <div className="para">
        <p>Upto 75% Off | Headphones</p>
        </div>
        <div className="sourceimage1">
          <img src={card4} alt="Loading..." />
        </div>
        <div className="sourceimage2">
          <img src={card5} alt="Loading..." />
        </div>
        <div className="sourceimage3">
          <img src={card6} alt="Loading..." />
        </div>
        <div className="sourceimage4">
        <img src={card7} alt="Loading..." />
        </div>
      </div>
    
  );
}

export default Container;
