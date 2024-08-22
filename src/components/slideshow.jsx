import Carousel from "react-bootstrap/Carousel";
import l2 from "../assets/goldenTemple.jpg";
import l1 from "../assets/hotelday.jpg";
import l3 from "../assets/hall.jpg";
import l5 from "../assets/garden.jpeg";
import l6 from "../assets/garden2.jpg";

import l4 from "../assets/nisargadhama.jpeg";
import "../Styles/navbar.css";
function Slide() {
  return (
    <>
      <div className="added-wdth">
        <Carousel fade>

          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={l2}
              id="slider-images"
              alt="Third slide"
              style={{ height: "100vh" }}
            />
            {/* <Carousel.Caption>
              <div className="transbox">
                <h3>Say YES to COORG!!</h3>
                <p>
                  Coorg is known for its breathtaking natural beauty, and our
                  hotel is the perfect place to explore it from. Whether you
                  want to go on a guided tour of the local wildlife, take a hike
                  through the stunning hills, or simply sit back and enjoy the
                  stunning views, our hotel is the perfect starting point for
                  all your adventures.
                </p>
              </div>
            </Carousel.Caption> */}
          </Carousel.Item>
     
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              id="slider-images"
              src={l3}
              alt="First slide"
              style={{ height: "100vh" }}
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 "
              src={l6}
              id="slider-images"
              alt="Second slide"
              style={{ height: "100vh" }}
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={l1}
              id="slider-images"
              alt="Third slide"
              style={{ height: "100vh" }}
            />
       
          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={l5}
              id="slider-images"
              alt="Second slide"
              style={{ height: "100vh" }}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
export default Slide;
