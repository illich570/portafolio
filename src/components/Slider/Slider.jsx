import Slider from "react-slick";



export default function SliderCard(props){

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
        <h1>
          Hola
        </h1>
      </div>
      <div>
        <h1>
          Hola
        </h1>
      </div>
      <div>
        <h1>
          Hola
        </h1>
      </div>
      <div>
        <h1>
          Hola
        </h1>
      </div>
      <div>
        <h1>
          Hola
        </h1>
      </div>
      <div>
        <h1>
          Hola
        </h1>
      </div>
    </Slider>
  );
}
