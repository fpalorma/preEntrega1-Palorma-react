import Carousel from "react-bootstrap/Carousel";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img src={"img/coffee-banner-1.jpg"} className={"carouselImg"} />
          <Carousel.Caption>
            <h3 className="carouselText">mi-Café - Tienda del barista</h3>
            <p className="carouselText">
              Somos importadores y tostadores de café de especialidad.{" "}
              {<br></br>}Descubrí tu variedad favorita.
            </p>
            <button>
              <Link to={"category/café"} className="carouselLinks"> Ver cafés</Link>
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img src={"img/coffee-banner-2.jpg"} className={"carouselImg"} />
          <Carousel.Caption>
            <h3 className="carouselText">mi-Café - Tienda del barista</h3>
            <p className="carouselText">
              Tenemos productos de alta calidad para que armes tu propia
              cafetería en casa.
            </p>
            <button>
              <Link to={"/products"} className="carouselLinks"> Ver productos</Link>
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
