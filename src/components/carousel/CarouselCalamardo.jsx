import Carousel from 'react-bootstrap/Carousel';
import imagenes from '../../assets/imganes'


export const CarouselCalamardo = () => {

  
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {imagenes[0].img}
          alt= {imagenes[0].alt}
        />
        <Carousel.Caption>
          <h3>{imagenes[0].title}</h3>
          <p>{imagenes[0].description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {imagenes[1].img}
          alt= {imagenes[1].alt}
        />
        <Carousel.Caption>
          <h3>{imagenes[1].title}</h3>
          <p>{imagenes[1].description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {imagenes[2].img}
          alt= {imagenes[2].alt}
        />
        <Carousel.Caption>
          <h3>{imagenes[2].title}</h3>
          <p>{imagenes[2].description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
