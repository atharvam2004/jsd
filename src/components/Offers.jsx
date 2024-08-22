import React from "react";
import "../Styles/offers.css";
import lux from "../assets/acc3.jpg";

const DemoBox = (props) => (
  <p className={`height-${props.value}`}>{props.children}</p>
);
const Offers = () => (
  <div>
    <div className="special-div">
      <h1 style={{ color: "#debe64", marginBottom: "1rem", fontWeight: "600" }}>
        SPECIAL OFFERS & PACKAGE DEALS
      </h1>
      <p style={{ color: "#363433", fontWeight: "500" }}>
        Indulge in the holiday of a lifetime at one of India's premier luxury
        hotels - the Siri Ambari - and take advantage of our exclusive stay
        offers, promotions, and packages, tailored to make your stay even more
        memorable.
      </p>
      <p style={{ color: "#363433", fontWeight: "500" }}>
        This sentence effectively conveys the message of a premium luxury hotel
        experience at Coorg Wilderness Resort, along with the added incentive of
        exclusive offers and promotions. The use of the phrase "holiday of a
        lifetime" evokes a sense of excitement and adventure, encouraging
        potential guests to book their stay. The sentence highlights the
        resort's reputation as a leading luxury hotel in India, reinforcing the
        idea of a high-end experience. Overall, this sentence can be an
        effective marketing message to attract potential guests and drive
        bookings.
      </p>
    </div>

    <div className="wrapper">
      <div className="dashed-box"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-duration="1000">
        <img alt="age3" id="luxImg" src={lux} />
      </div>
      <div className="gold-box"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-duration="1000">
        <p style={{ textAlign: "center", margin: "1rem" }}>
          Indulge in the holiday of a lifetime at one of India's premier luxury
          hotels - the Siri Ambari - and take advantage of our exclusive stay
          offers, promotions, and packages, tailored to make your stay even more
          memorable.
        </p>
      </div>
    </div>
  </div>
);
export default Offers;
