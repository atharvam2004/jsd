import React from "react";
import { Col, Row } from "antd";
import Carousel from "react-bootstrap/Carousel";

import l2 from "../assets/1.jpeg";
import l1 from "../assets/2.jpg";
import l3 from "../assets/3.jpeg";

import "../Styles/navbar.css";
import GallaryView from "./GallaryView";

const Facilities = () => (
  <div>
    <Row>
      <Col
        span={16}
        style={{
          margin: "3rem 16rem",
          textAlign: "center",
          color: "#363433",
          fontWeight: "600",
        }}
      >
        <Carousel fade>
          <h1>EXPERIANCE THE LUXURY</h1>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={l1}
              id="slider-images"
              alt="Second slide"
              style={{ height: "30rem", width: "100rem" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={l2}
              id="slider-images"
              alt="Third slide"
              style={{ height: "30rem", width: "100rem" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={l3}
              id="slider-images"
              alt="Third slide"
              style={{ height: "30rem", width: "100rem" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              id="slider-images"
              src={l2}
              alt="First slide"
              style={{ height: "30rem", width: "100rem" }}
            />
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
    <Row>
      <Col
        span={16}
        style={{
          margin: "3rem 16rem",
          textAlign: "center",
          color: "#363433",
          fontWeight: "600",
        }}
      >
        <Carousel fade>
          <h1>EXPERIANCE THE DELECIOUS FOOD</h1>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={l1}
              id="slider-images"
              alt="Second slide"
              style={{ height: "30rem", width: "100rem" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={l2}
              id="slider-images"
              alt="Third slide"
              style={{ height: "30rem", width: "100rem" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={l3}
              id="slider-images"
              alt="Third slide"
              style={{ height: "30rem", width: "100rem" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              id="slider-images"
              src={l2}
              alt="First slide"
              style={{ height: "30rem", width: "100rem" }}
            />
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
    <Row>
      <Col
        span={16}
        style={{
          margin: "3rem 16rem",
          textAlign: "center",
          color: "#363433",
          fontWeight: "600",
        }}
      >
        {/* <Carousel fade>
          <h1>POOL</h1>
          <p style={{ color: "#debe64", fontWeight: "500" }}>
            Dive into a breathtakingly beautiful pool in Coorg and lose yourself
            in the tranquility of nature.
          </p>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={l1}
              id="slider-images"
              alt="Second slide"
              style={{ height: "30rem", width: "100rem" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={l2}
              id="slider-images"
              alt="Third slide"
              style={{ height: "30rem", width: "100rem" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={l3}
              id="slider-images"
              alt="Third slide"
              style={{ height: "30rem", width: "100rem" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              id="slider-images"
              src={l2}
              alt="First slide"
              style={{ height: "30rem", width: "100rem" }}
            />
          </Carousel.Item>
        </Carousel> */}
      </Col>
    </Row>

    <GallaryView />
  </div>
);

export default Facilities;
