import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

import campfire from "../assets/campfire.jpg";
import campfire2 from "../assets/campfire2.jpg";

import p0 from "../assets/parking1.jpg";
import p01 from "../assets/garden.jpeg";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";

import cater1 from "../assets/cater.jpg";
import cater2 from "../assets/cater2.jpg";

import c1 from "../assets/catering1.jpg";
import c2 from "../assets/food.jpg";

import spa1 from "../assets/spa1.jpg";
import spa2 from "../assets/spa2.jpg";

import pool1 from "../assets/pool.jpg";
import pool2 from "../assets/pool2.jpg";

import e1 from "../assets/eventmanagement1.jpeg";
import e2 from "../assets/eventmanagement2.jpeg";
import e3 from "../assets/eventmanagement3.jpeg";
import e4 from "../assets/eventmanagement4.jpg";

import "../Styles/navbar.css";
import GallaryView from "./GallaryView";
import AOS from "aos";
import "aos/dist/aos.css";

function Facilities() {
  useEffect(() => {
    const shouldEnableAOS = window.innerWidth >= 768;

    if (shouldEnableAOS) {
      AOS.init({
        // Configuration options
        duration: 800, // Duration of animation
        once: true, // Only animate once
        mirror: false, // Animate elements in different directions
      });
    }
  }, []);
  return (
    <div className="fac-page">
      <div className="div-facs">
        <div
          
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos="fade-in"
          data-aos-id="super-duper"
          className="para-fac"
        >
          <div>
            <h4 style={{ textAlign: "center" }}>PARKING</h4>
            <p>
              Indulge in generous parking space at Siri Ambari Hotel, where
              convenience meets comfort in our spacious parking facilities
            </p>
          </div>
        </div>
        <div className="fac-slider">
          <Carousel fade id="yourCarouselId">
            <Carousel.Item>
              <img
                id="fac-img"
                className="d-block w-100"
                src={p0}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                id="fac-img"
                className="d-block w-100"
                src={p01}
                alt="Second slide"
              />
            </Carousel.Item>{" "}
            <Carousel.Item>
              <img
                id="fac-img"
                className="d-block w-100"
                src={p1}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                id="fac-img"
                className="d-block w-100"
                src={p3}
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="div-facs">
        <div
          
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos="fade-in"
          data-aos-id="super-duper"
          className="para-fac"
        >
          {" "}
          <div>
            <h4 style={{ textAlign: "center" }}>SIRI SPA</h4>
            <p>
              Rejuvenate your senses at Siri Spa – an oasis of tranquility
              within Siri Ambari Hotel, where relaxation and wellness seamlessly
              intertwine
            </p>
          </div>
        </div>
        <div className="fac-slider">
          <Carousel fade>
            <Carousel.Item>
              <img
                id="fac-img"
                className="d-block w-100"
                src={spa1}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                id="fac-img"
                className="d-block w-100"
                src={spa2}
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="div-facs">
        {/* <div
          
          data-aos-delay="200"
          data-aos-duration="1000"
          span={{ xs: 12, sm: 6 }} // 12 on mobile, 6 on desktop
          style={{
            flex: "1",
            display: "flex",
            alignItems: "center",
          }}
          data-aos="fade-in"
          data-aos-id="super-duper" className="para-fac"
        >
          <div>
            <h4 style={{ textAlign: "center" }}>SIRI POOL</h4>
            <p>
              Dive into luxury and unwind by our pristine swimming pool at Siri
              Ambari Hotel. Immerse yourself in a refreshing escape, where every
              splash is a moment of pure relaxation{" "}
            </p>
          </div>
        </div> */}
        <div
          
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos="fade-in"
          data-aos-id="super-duper"
          className="para-fac"
        >
          <div>
            <h4 style={{ textAlign: "center" }}>SIRI POOL</h4>
            <p>
              Indulge in the epitome of luxury at Siri Ambari Hotel, where the
              pristine swimming pool awaits to elevate your relaxation
              experience. Immerse yourself in a refreshing escape, where every
              splash becomes a symphony of tranquility. Our meticulously
              designed poolside oasis offers not just a respite from the
              ordinary but a celebration of opulence.
            </p>
          </div>
        </div>
        <div className="fac-slider">
          <Carousel fade>
            <Carousel.Item>
              <img
                id="fac-img"
                className="d-block w-100"
                src={pool1}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                id="fac-img"
                className="d-block w-100"
                src={pool2}
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        {/* <div className="fac-slider">
          <Carousel fade>
            <Carousel.Item>
              <img id="fac-img"
                className="d-block w-100"
                src="https://t3.ftcdn.net/jpg/05/59/23/60/360_F_559236027_rKHsb3Wpt2HdFA4o5n8FivSxZEXo0U0p.jpg"
                                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </div> */}
      </div>
      <div className="div-facs">
        <div
          
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos="fade-in"
          data-aos-id="super-duper"
          className="para-fac"
        >
          {" "}
          <div>
            <h4 style={{ textAlign: "center" }}>CAMPFIRE WITH MUSIC</h4>
            <p>
              Experience the warmth of our enchanting campfire paired with
              soulful music at Siri Ambari Hotel. Unwind under the stars,
              creating memorable moments by the crackling flames and melodious
              tunes.{" "}
            </p>
          </div>
        </div>
        <div className="fac-slider">
          <Carousel fade>
            <Carousel.Item>
              <img
                id="fac-img"
                className="d-block w-100"
                src={campfire}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                id="fac-img"
                className="d-block w-100"
                src={campfire2}
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="div-facs">
        <div
          
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos="fade-in"
          data-aos-id="super-duper"
          className="para-fac"
        >
          {" "}
          <div>
            <h4 style={{ textAlign: "center" }}>EVENT MANAGEMENT</h4>
            <p>
              Turn your dream event into a flawless reality at Siri Ambari
              Hotel, where our dedicated team offers impeccable event management
              services. From meticulous planning to executing every detail to
              perfection, we strive to exceed your expectations and create an
              unforgettable experience that perfectly aligns with your vision.
            </p>
          </div>
        </div>
        <div className="fac-slider">
          <Carousel fade>
            <Carousel.Item>
              <img
                id="fac-img"
                className="d-block w-100"
                src={e1}
                alt="Second slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                id="fac-img"
                className="d-block w-100"
                src={e4}
                alt="First slide"
                style={{ height: "30rem" }}
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="div-facs">
        <div
          
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos="fade-in"
          data-aos-id="super-duper"
          className="para-fac"
        >
          {" "}
          <div>
            <h4 style={{ textAlign: "center" }}>CATERING</h4>
            <p>
              Indulge in exquisite culinary delights with Siri Ambari Hotel's
              exceptional catering services. Whether it's a grand party, a
              wedding celebration, a productive meeting, a delightful team
              lunch, or a professional conference, our talented culinary team is
              dedicated to curating delectable menus that perfectly complement
              your event. Experience the epitome of gastronomic excellence and
              elevate your gatherings to new heights with Siri Ambari's
              unparalleled catering expertise.
            </p>
          </div>
        </div>
        <div className="fac-slider">
          <Carousel fade>
            <Carousel.Item>
              <img
                id="fac-img"
                className="d-block w-100"
                src={cater1}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                id="fac-img"
                className="d-block w-100"
                src={cater2}
                alt="Third slide"
                style={{ height: "30rem" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                id="fac-img"
                className="d-block w-100"
                src={c1}
                alt="Third slide"
                style={{ height: "30rem" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                id="fac-img"
                className="d-block w-100"
                src={c2}
                alt="First slide"
                style={{ height: "30rem" }}
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Facilities;
