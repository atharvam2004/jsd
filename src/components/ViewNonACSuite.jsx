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

const ViewNonACSuite = () => (
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
            Non-AC Suit Room
          </h2>
          <p
            style={{
              color: "#363433",
              fontWeight: "500",
              textAlign: "justify",
            }}
          >
            Indulge in the epitome of luxury and comfort with our non-AC suite
            room at Siri Ambari Hotel. Spread across a generous 1550 sq.ft., our
            suite offers a serene sanctuary for your stay. Rest peacefully on
            the lavish king-size bed and enjoy entertainment on the LED 22''
            inch TV. Stay connected with complimentary Wi-Fi access and quench
            your thirst with our in-house purified and bottled water. Step onto
            your private balcony to enjoy moments of tranquility and fresh air.
            Start your day with a delectable complimentary breakfast ensemble
            and make use of the spacious living area for relaxation. Our laundry
            services ensure convenience, while premium toiletries add a touch of
            luxury to your stay. Enjoy the added comfort of bed warmers as per
            your preference. Experience a truly remarkable stay in our non-AC
            suite room, where every detail is designed to exceed your
            expectations at Siri Ambari Hotel
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
              <li>BED: 1 King-size Bed</li>
              <li>ROOM SIZE: 1550 sq.ft.</li>
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

export default ViewNonACSuite;
