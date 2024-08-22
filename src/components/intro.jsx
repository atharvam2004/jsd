import React, { useEffect } from "react";
import "../Styles/intro.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import map from "../assets/cartoon-image.png";
import GallaryView from "./GallaryView";
import AOS from "aos";
import "aos/dist/aos.css";

function Intro(props) {
  useEffect(() => {
    // Check if the screen width is greater than or equal to a certain threshold (e.g., 768 pixels)
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
    <div>
      <h1 className="introHead">
        SIRI AMBARI RESORT & SPA - LUXURIOUS BY ACCOMODATION
      </h1>
      <div
  
        className="introdesc"
      >
        <p>
          Welcome to Siri Ambari, a sanctuary of tranquility nestled in the
          picturesque landscapes of Coorg, also known as the Scotland of India.
          Located in the enchanting town of Kushalnagar, Madikeri, our hotel
          offers a seamless blend of luxury, natural beauty, and warm
          hospitality that will leave you enchanted.
        </p>
        <p>
          Step into a world of unparalleled comfort and elegance as you enter
          our hotel. Siri Ambari is an architectural marvel, harmoniously
          blending traditional Coorgi charm with contemporary design. Every
          detail has been meticulously crafted to create an ambiance that exudes
          relaxation and indulgence. Indulge in the tranquility of our lush, sprawling gardens, and experience the warmth of our impeccable hospitality. Whether you seek a peaceful retreat or a memorable adventure, SIRI Ambari is your gateway to a world of unparalleled experiences and serenity.





        </p>
      </div>

      <Row className="rowIntro">
        <Col
          className="colIntro"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="70"
          data-aos-duration="1000"
        >
          <Card className="cardBody">
            <Card.Body>
              <img alt="age3" id="cardImg" src={c1} />

              <Card.Title className="cardContentTitle">
                {props.title1}
              </Card.Title>
              <Card.Text className="cardContentBody">{props.text1}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col
          className="colIntro"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="140"
          data-aos-duration="1000"
        >
          <Card className="cardBody">
            <Card.Body>
              <img alt="age3" id="cardImg" src={c2} />

              <Card.Title className="cardContentTitle">
                {props.title2}
              </Card.Title>
              <Card.Text className="cardContentBody">{props.text2}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <GallaryView />
    </div>
  );
}
export default Intro;
