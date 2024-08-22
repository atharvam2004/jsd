import React from "react";
import { Col, Row } from "antd";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

import l2 from "../assets/1.jpeg";
import l1 from "../assets/2.jpg";
import l3 from "../assets/3.jpeg";

import "../Styles/navbar.css";
import Dropdown from "react-bootstrap/Dropdown";
import GallaryView from "./GallaryView";

const ViewACStandard = () => (
  <div>
    <Row>
      <Col span={10} style={{ margin: "5rem 1rem 3rem 6rem" }}>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={l1}
              id="slider-images"
              alt="Second slide"
              style={{ height: "30rem", width: "30rem" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={l2}
              id="slider-images"
              alt="Third slide"
              style={{ height: "30rem" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={l3}
              id="slider-images"
              alt="Third slide"
              style={{ height: "30rem" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              id="slider-images"
              src={l2}
              alt="First slide"
              style={{ height: "30rem" }}
            />
          </Carousel.Item>
        </Carousel>
      </Col>
      <Col span={11} style={{ margin: "5rem 1rem 3rem 1rem" }}>
        {" "}
        <div>
          <h2
            style={{ textAlign: "center", color: "#debe64", fontWeight: "600" }}
          >
            AC Standard Suit Room
          </h2>
          <p
            style={{
              color: "#363433",
              fontWeight: "500",
              textAlign: "justify",
            }}
          >
            Experience the pinnacle of luxury and comfort in our AC standard
            size suite room at Siri Ambari Hotel. This expansive suite offers a
            range of bedding options, including a king-size bed, a 78''*48''
            bed, and a 78''*36'' bed, ensuring ample space and flexibility for
            your accommodation needs. With a generous room size of 1700 sq.ft.,
            you'll have plenty of room to relax and unwind. Rest assured that
            our rooms are clinically sanitized and sealed, prioritizing your
            health and safety. Enjoy your favorite shows and movies on the LED
            22'' inch TVs, and stay connected with complimentary Wi-Fi access
            throughout your stay. Hydration is made easy with in-house purified
            and bottled water, while the private balcony offers a tranquil space
            to unwind. Start your day with a delightful complimentary breakfast
            ensemble, prepared to satisfy your cravings and energize your day.
            The spacious living area provides a comfortable space for relaxation
            and quality time. Our laundry services ensure convenience and
            freshness during your stay, while premium toiletries add a touch of
            luxury to your experience. Bed warmers are also available upon
            request for your personalized comfort. Indulge in a truly
            exceptional stay in our AC standard size suite room, where every
            detail is designed to elevate your comfort and provide an
            unforgettable experience at Siri Ambari Hotel.
          </p>
          <div
            id="ulLux"
            style={{
              color: "#363433",
              fontWeight: "500",
              textAlign: "justify",
            }}
          >
            {" "}
            <ul>
              <li>BED: 1 King-size Bed, 78''*48'' (1+1 Bed) & 78''*36''</li>
              <li>ROOM SIZE: 1700 sq.ft.</li>
              <li>Clinically sanitized and sealed rooms</li>
              <li>LED 22'' inch TV's</li>
              <li>Free Wi-Fi Access</li>
              <li>In house purified and bottled water</li>
            </ul>
            <ul>
              <li>Private Balcony</li>
              <li>Complimentary breakfast ensemble</li>
              <li>Living Area</li>
              <li>Laundry Services</li>
              <li>Premium Toiletries</li>
              <li>Bed warmers as required</li>
            </ul>
          </div>
          <button className="buttonLux">BOOK NOW</button>
          <button className="buttonLux">VIEW ACCOMODATION OPPGIONT</button>
        </div>
      </Col>
    </Row>
    <GallaryView />
  </div>
);

export default ViewACStandard;
