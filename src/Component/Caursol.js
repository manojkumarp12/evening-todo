import card1 from './assets/image1.jpg';
import card2 from './assets/image9.jpg';
import card3 from './assets/image10.jpg';
function Caursol(){
    return(
        <div>
            <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={card1} class="d-block w-100" alt="Loading..."/>
    </div>
    <div class="carousel-item">
      <img src={card2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={card3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            </div>
    )
}
export default Caursol