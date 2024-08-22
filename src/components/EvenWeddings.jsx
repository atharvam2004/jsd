import React from "react";
import { Button, Col, Row } from "antd";
import { Space } from "antd";
import Carousel from "react-bootstrap/Carousel";

import l21 from "../assets/eventmanagement2.jpg";
import l31 from "../assets/eventmanagement3.jpeg";
import l41 from "../assets/eventmanagement4.jpg";
import "../Styles/navbar.css";
import "../Styles/eventform.css";
import GallaryView from "./GallaryView";

const EvenWeddings = () => (
  <div>
    <Button
      className="eventButtonMain"
      href="/EventWeddingForm"
      style={{
        position: "fixed",
        background: "#debe64",
        color: "#363433",
        marginLeft: "3rem",
      }}
    >
      Meeting & Wedding Request Form
    </Button>
    <div className="eventwed-div" >
      <div>
        <h1
          style={{ marginBottom: "2rem", color: "#debe64", fontWeight: "600" }}
        >
          EVENTS
        </h1>
        <p style={{ color: "#363433", fontWeight: "500" }}>
          Siri Ambari is the ultimate destination for your corporate events. Our
          resort boasts state-of-the-art facilities and amenities, making it the
          ideal place to host your next meeting, conference, convention,
          symposium, banquet or performance.
        </p>
        <p style={{ color: "#363433", fontWeight: "500" }}>
          Our meeting rooms are equipped with the latest audiovisual equipment
          and offer a comfortable and conducive environment for productive
          discussions. Our conference rooms are spacious and can accommodate
          large groups of people, while our banquet halls are perfect for
          hosting grand celebrations. Our facilities are the largest and most
          comprehensive in Coorg, making us the preferred choice for businesses
          and organizations looking to host events.
        </p>
        <p style={{ color: "#363433", fontWeight: "500" }}>
          In addition to our facilities, we also offer excellent service and
          hospitality. Our experienced staff is dedicated to ensuring that your
          event is a success, and we provide a range of services, including
          catering, event planning and technical support, to ensure that
          everything runs smoothly.
        </p>
        <p style={{ color: "#363433", fontWeight: "500" }}>
          So whether you're planning a small meeting or a large conference, Siri
          Ambari has everything you need to make your event a success. Contact
          us today to learn more about our facilities and services.
        </p>
      </div>

      <div style={{ marginTop: "4rem" }}>
        {" "}
        <h1
          style={{ marginBottom: "2rem", color: "#debe64", fontWeight: "600" }}
        >
          WEDDINGS
        </h1>
        <p style={{ color: "#363433", fontWeight: "500" }}>
          Welcome to our world of romance and luxury, where we celebrate the
          most beautiful moment of your life with you. Whether you envision a
          grand wedding celebration or a private intimate affair, we offer you
          the perfect setting for your special day.
        </p>
        <p style={{ color: "#363433", fontWeight: "500" }}>
          Nestled amidst verdant hills and surrounded by soft clouds, our
          locations offer stunning natural beauty that will enchant you and your
          guests. Our venues range from the grandeur of our Grand Ballroom to
          the serene wilderness of our outdoor settings. With our expert staff
          and attention to detail, we create the perfect ambiance for you to
          exchange your vows.
        </p>
        <p style={{ color: "#363433", fontWeight: "500" }}>
          Our commitment to perfection extends beyond the setting to every
          aspect of your special day. Our chefs create inspired cuisines
          presented in grand buffet spreads or elaborate course banquets,
          designed to suit your taste and preferences. Our team of professionals
          offers an array of special services including florists, decorators,
          photographers, live entertainment, and more, to ensure your every whim
          and fancy is taken care of.
        </p>
        <p style={{ color: "#363433", fontWeight: "500" }}>
          We understand that every moment leading up to your special day is just
          as important. That's why we offer tailor-made packages that include
          pre-wedding parties, mehendi parties, and more, set at locales of your
          choice and in styles of your preference. Our expert wedding planners
          are always at hand to create the wedding day you've always dreamt of,
          while our relentless efforts at impeccable service and personal
          attention guarantee that all you need to do is dream on.
        </p>
        <p style={{ color: "#debe64", fontWeight: "600" }}>
          So come, celebrate your love with us, and let us create the perfect
          fairy tale wedding that you will cherish for a lifetime.
        </p>
      </div>
      <Col xs={24} sm={12} md={10} style={{ margin: "2rem" }}>
        <img src={l41} alt="Image 1" className="img-fluid" />
      </Col>

      <Col xs={24} sm={12} md={10} style={{ margin: "2rem" }}>
        <img src={l21} alt="Image 2" className="img-fluid" />
      </Col>

    </div>

    {/* <GallaryView /> */}
  </div>
);

export default EvenWeddings;
