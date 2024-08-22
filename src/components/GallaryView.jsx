import { Image } from "antd";
import React, { useEffect } from "react";
import "../Styles/gallery.css";
import { Space } from "antd";
import acc11 from "../assets/Heroimage1.jpg";
import acc21 from "../assets/Heroimage3.jpg";
import acc31 from "../assets/Heroimage2.jpg";
import acc41 from "../assets/HeroImage4.jpeg";

const GallaryView = () => (
  <div className="Galdiv" style={{ textAlign: "center" }}>
    <Image.PreviewGroup style={{ margin: "0 6rem" }} id="gallery">
      <span>
        <h1 style={{ color: "#363433", margin: "5rem 0" }}>GALLERY</h1>
      </span>
      <div className="Gallerywrapp">
        <Image
          className="Galimg"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          height={250}
          style={{ filter: "brightness(1.50)" }}
          src={acc11}
        />
      </div>
      <div className="Gallerywrapp">
        <Image
          className="Galimg"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          style={{ filter: "brightness(1.30)" }}
          height={250}
          data-aos-duration="1000"
          src={acc21}
        />
      </div>
      <div className="Gallerywrapp">
        <Image
          className="Galimg"
          data-aos="fade-up"
          style={{ filter: "brightness(1.50)" }}
          data-aos-offset="200"
          data-aos-delay="150"
          data-aos-duration="1000"
          height={250}
          src={acc31}
        />
      </div>
      <div className="Gallerywrapp">
        <Image
          className="Galimg"
          style={{ filter: "brightness(1.50)" }}
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="200"
          data-aos-duration="1000"
          height={250}
          src={acc11}
        />
      </div>
    </Image.PreviewGroup>
  </div>
);
export default GallaryView;
