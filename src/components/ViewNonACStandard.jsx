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

const ViewNonACStandard = () => (
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
            Non-AC Standard Suit Room
          </h2>
          <p
            style={{
              color: "#363433",
              fontWeight: "500",
              textAlign: "justify",
            }}
          >
            Experience the perfect blend of comfort and style in our non-AC
            standard size suite rooms at Siri Ambari Hotel. With a spacious room
            size of 1700 sq.ft., each suite is meticulously sanitized and sealed
            for your utmost safety and peace of mind. Unwind in the indulgence
            of a king-size bed, enjoy entertainment on the LED 22'' inch TV, and
            stay connected with complimentary Wi-Fi access. Relish the
            convenience of in-house purified and bottled water, and savor
            moments of tranquility on your private balcony. Start your day with
            a delightful complimentary breakfast ensemble, and make the most of
            the cozy living area. Our laundry services, premium toiletries, and
            bed warmers, available upon request, ensure a truly comfortable and
            personalized experience. Enjoy a memorable stay in our non-AC suite
            rooms, where luxury meets convenience at Siri Ambari Hotel
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

export default ViewNonACStandard;
