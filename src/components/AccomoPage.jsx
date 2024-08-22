import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../Styles/accomod.css";

import p1 from "../assets/stdac1.jpg";
import p2 from "../assets/stdac2.jpg";
import p3 from "../assets/stdac3.jpg";

import acc11 from "../assets/Heroimage1.jpg";
import acc21 from "../assets/Heroimage3.jpg";
import acc31 from "../assets/Heroimage2.jpg";

import d1 from "../assets/dorm1.jpeg";
import d2 from "../assets/dorm4.jpeg";
import d3 from "../assets/dorm3.jpeg";


import n1 from "../assets/nonac1.jpeg";
import n2 from "../assets/nonac2.jpeg";
import n3 from "../assets/nonac3.jpeg";

import "../Styles/navbar.css";
import AOS from "aos";
import "aos/dist/aos.css";

function AccomoPage() {
  useEffect(() => {
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
    <div className="fac-page">
      {/* //            AC Suite  Room */}

     
     <div className="parent-accomo">
      
      <div  className="child-accomo" >
        <Carousel fade id="coro-acco">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={acc11}
              id="fac-images"
              alt="Second slide"
              style={{ height: "30rem", width: "30rem" }}
            />
          </Carousel.Item>
       
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={acc31}
              id="fac-images"
              alt="Third slide"
              style={{ height: "30rem" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              id="fac-images"
              src={p3}
              alt="First slide"
              style={{ height: "30rem" }}
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="child-accomo" >
        {" "}
        <div>
          <h2
            style={{ textAlign: "center", color: "#debe64", fontWeight: "600" }}
          >
            AC Suite Room
          </h2>
          <p
           style={{
            color: "#363433",
            fontWeight: "500",
            textAlign: "justify",
            fontSize:"15px"
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
      </div>
    </div>

    <div className="parent-accomo">
      
      <div  className="child-accomo" >
        <Carousel fade id="coro-acco">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={p1}
              id="fac-images"
              alt="Second slide"
              style={{ height: "30rem", width: "30rem" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={p2}
              id="fac-images"
              alt="Third slide"
              style={{ height: "30rem" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={p3}
              id="fac-images"
              alt="Third slide"
              style={{ height: "30rem" }}
            />
          </Carousel.Item>
          
        </Carousel>
      </div>
      <div className="child-accomo" >
        {" "}
        <div>
          <h2
            style={{ textAlign: "center", color: "#debe64", fontWeight: "600" }}
          >
            AC Standard  Room
          </h2>
          <p
           style={{
            color: "#363433",
            fontWeight: "500",
            textAlign: "justify",
            fontSize:"15px"
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
      </div>
    </div>
    <div className="parent-accomo">
      
      <div  className="child-accomo" >
        <Carousel fade id="coro-acco">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={n1}
              id="fac-images"
              alt="Second slide"
              style={{ height: "30rem", width: "30rem" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={n2}
              id="fac-images"
              alt="Third slide"
              style={{ height: "30rem" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={n3}
              id="fac-images"
              alt="Third slide"
              style={{ height: "30rem" }}
            />
          </Carousel.Item>
         
        </Carousel>
      </div>
      <div className="child-accomo" >
        {" "}
        <div>
          <h2
            style={{ textAlign: "center", color: "#debe64", fontWeight: "600" }}
          >
            Non-AC Small Rooms
          </h2>
          <p
           style={{
            color: "#363433",
            fontWeight: "500",
            textAlign: "justify",
            fontSize:"15px"
          }}
          >
               Embrace comfort and affordability with our non-AC rooms at Siri
            Ambari Hotel. Each room boasts a spacious 1350 sq.ft. area,
            meticulously sanitized and sealed for your peace of mind. Enjoy the
            convenience of a plush king-size bed, LED 22'' inch TV, and
            complimentary Wi-Fi access. Indulge in a private balcony, perfect
            for relaxing and enjoying the surroundings. Start your day with a
            delicious complimentary breakfast, and stay refreshed with in-house
            purified and bottled water. Additional amenities include a cozy
            living area, convenient laundry services, premium toiletries, and
            bed warmers upon request. Experience a delightful stay where comfort
            meets value at Siri Ambari Hotel.
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
      </div>
    </div>
     <div className="parent-accomo">
      
      <div  className="child-accomo" >
        <Carousel fade id="coro-acco">
        <Carousel.Item>
            <img
              className="d-block w-100"
              src={d1}
              id="fac-images"
              alt="Second slide"
              style={{ height: "30rem", width: "30rem" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={d2}
              id="fac-images"
              alt="Third slide"
              style={{ height: "30rem" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={d3}
              id="fac-images"
              alt="Third slide"
              style={{ height: "30rem" }}
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="child-accomo" >
        {" "}
        <div>
          <h2
            style={{ textAlign: "center", color: "#debe64", fontWeight: "600" }}
          >
            Dorms
          </h2>
          <p
           style={{
            color: "#363433",
            fontWeight: "500",
            textAlign: "justify",
            fontSize:"15px"
          }}
          >
            Enjoy a comfortable stay in our standard dorm room at Siri Ambari Hotel.
        Equipped with all the essentials, our dorm room offers a cozy space for
        your visit. Unwind in a clean and safe environment, featuring clinically
        sanitized and sealed rooms. Stay connected with complimentary Wi-Fi
        access, and enjoy entertainment with LED 22'' inch TVs. Start your day
        with a delightful complimentary breakfast and refresh yourself with
        in-house purified water. Make use of our laundry services, and pamper
        yourself with premium toiletries. Our dorm rooms are designed to offer a
        convenient and enjoyable stay for all our guests.
          </p>
          <div
            id="ulLux"
            style={{
              color: "#363433",
              fontWeight: "500",
              textAlign: "justify",
            }}
          >
            <ul>
          <li>Shared Accommodation</li>
          <li>Clinically sanitized and sealed rooms</li>
          <li>Free Wi-Fi Access</li>
          <li>In house purified water</li>
        </ul>
        <ul>
          <li>Complimentary breakfast</li>
          <li>Laundry Services</li>
          <li>Premium Toiletries</li>
        </ul>
          </div>
          <button className="buttonLux">BOOK NOW</button>
          <button className="buttonLux">VIEW ACCOMODATION OPPGIONT</button>
        </div>
      </div>
    </div> 
     
    </div>
  );
}

export default AccomoPage;
