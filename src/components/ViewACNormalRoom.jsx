import React from "react";
import { Col, Row } from "antd";
import Carousel from "react-bootstrap/Carousel";

import l2 from "../assets/1.jpeg";
import l1 from "../assets/2.jpg";
import l3 from "../assets/3.jpeg";

import "../Styles/navbar.css";
import GallaryView from "./GallaryView";

const ViewACNormalRoom = () => (
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
            AC Normal Room
          </h2>
          <p
            style={{
              color: "#363433",
              fontWeight: "500",
              textAlign: "justify",
            }}
          >
            Experience utmost comfort and relaxation in our AC normal room at
            Siri Ambari Hotel. Featuring a luxurious king-size bed, our room
            provides a spacious haven for your stay. With a room size of 1350
            sq.ft., you'll have ample space to unwind and make yourself at home.
            Rest assured that our rooms are clinically sanitized and sealed to
            ensure a clean and safe environment for your peace of mind. Stay
            entertained with LED 22'' inch TVs and stay connected with
            complimentary Wi-Fi access throughout your stay. Refresh yourself
            with in-house purified and bottled water, and enjoy the serenity of
            your private balcony. Start your day on a delightful note with our
            complimentary breakfast ensemble, ensuring you have a satisfying
            meal to kickstart your day. Make use of the comfortable living area
            for relaxation and leisure activities. Our laundry services are
            available to cater to your needs. Pamper yourself with premium
            toiletries provided in the room, and should you desire extra warmth,
            bed warmers are available upon request. Experience a truly
            comfortable and enjoyable stay in our AC normal room, where every
            detail is carefully designed to enhance your experience at Siri
            Ambari Hotel.
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
              <li>ROOM SIZE: 1350 sq.ft.</li>
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

export default ViewACNormalRoom;
