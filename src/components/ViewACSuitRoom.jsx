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

const ViewACSuitRoom = () => (
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
            AC Suit Room
          </h2>
          <p
            style={{
              color: "#363433",
              fontWeight: "500",
              textAlign: "justify",
            }}
          >
            Experience ultimate luxury and comfort in our AC suite room at Siri
            Ambari Hotel. This spacious suite features a king-size bed and an
            additional 78'' * 48'' bed, offering ample space for your
            relaxation. With a room size of 1500 sq.ft., you'll have plenty of
            room to unwind and rejuvenate. Rest assured that our rooms are
            clinically sanitized and sealed to ensure a clean and safe
            environment. Entertainment is at your fingertips with LED 22'' inch
            TVs, and stay connected with complimentary Wi-Fi access throughout
            your stay. Quench your thirst with our in-house purified and bottled
            water, and enjoy moments of serenity on your private balcony. Start
            your day on a delightful note with our complimentary breakfast
            ensemble, and make use of the spacious living area for relaxation
            and leisure. We also offer convenient laundry services to meet your
            needs. Pamper yourself with premium toiletries provided, and enjoy
            the added comfort of bed warmers upon request. Unwind and enjoy a
            luxurious stay in our AC suite room, where every detail is
            thoughtfully designed to provide you with an unforgettable
            experience at Siri Ambari Hotel.
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
              <li>BED: 1 King-size Bed & 78''* 48'' Bed</li>
              <li>ROOM SIZE: 1500 sq.ft.</li>
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

export default ViewACSuitRoom;
