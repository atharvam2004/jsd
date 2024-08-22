import React from "react";
import "../Styles/test.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

function Test() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <div className="reviewsContainer">
            <div
              className="reviews"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="5000"
            >
              <h5 className="test-haed">Venkatesh Palthamoole</h5>
              <p className="reviewPara">
                We ordered Veg Pulav, veg fried rice, and south Indian thali.
                Very tasty food and polite staff. Food was good, satisfying
                because you won't find a nice restaurant nearby in this stretch.
                We were heading from Bailukuppe golden temple to Nagarahole
                Tiger reserves.
              </p>
            </div>
            <div
              className="reviews"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="150"
              data-aos-duration="500"
            >
              <h5 className="test-haed">PraKash, Local Guide</h5>
              <p className="reviewPara">
                The restaurants are spacious. Food is delicious. We visited the
                veg restaurant and it was like home prepared meal. .... There
                are rooms to stay. Rooms are almost ready. Newly built with
                latest facilities. Really excellent place to stay or dine, and
                away from the crowd. Nice quiet place. .... Lot of car parking
                space available. The brand this group delivers all these years,
                has highlighted there are the pioneers in hospitality. Just
                taste the dishes, you will never go wrong. Happy journey.
              </p>
            </div>
            <div
              className="reviews"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="250"
              data-aos-duration="500"
            >
              <h5 className="test-haed">SUSHANT, Tripadvisor</h5>
              <p className="reviewPara">
                Excellent experience and great hospitality. The staff was great.
                We had a good adventure activity in the resort itself. Love to
                again have a stay at Coorg Wilderness Resort and Spa
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="reviewsContainer">
            <div
              className="reviews"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="5000"
            >
              <h5 className="test-haed">Dipayan Dutta</h5>
              <p className="reviewPara">
                We had south indian breakfast on our way. Food was good.
                Restaurant, rooms and garden are well maintained. It's a good
                deal to stay in off season. Parking and security available.
              </p>
            </div>
            <div
              className="reviews"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="150"
              data-aos-duration="500"
            >
              <h5 className="test-haed">CHANDRASHEKAR N</h5>
              <p className="reviewPara">
                This Resort has everything you need to have a relaxed vacation.
                The staff here is excellent from front office staff to room
                servicing, staff who handles all the activities. They will go
                out of their way to make you feel comfortable for you and your
                kids as well. We loved every moment we spent there
              </p>
            </div>
            <div
              className="reviews"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="250"
              data-aos-duration="500"
            >
              <h5 className="test-haed">Raghunandan M S</h5>
              <p className="reviewPara">
                This place is really neat, nice and spacious. The people there
                are courteous and welcoming. I am attaching the photos for the
                reference. The menu photo is for 2nd Oct 2021. Good parking
                space. Big restaurant. And good staff. You get all kinds of food
                here. I had to go with the South Indian Meal, and it was really
                good. North Indian meals and other food items are also nice (my
                friends' . I would recommend this place to everyone. Taste:
                10/10 Ambience: 9/10 Food variety: 8/10 Hospitality: 10/10
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="reviewsContainer">
            <div
              className="reviews"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="5000"
            >
              <h5 className="test-haed">Ramakrishna Rao</h5>
              <p className="reviewPara">
              Very, very spacious, clean washrooms and plenty of parking space. Vegetarian options: Dal khichdi was very good.

              </p>
            </div>
            <div
              className="reviews"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="150"
              data-aos-duration="500"
            >
              <h5 className="test-haed">Abit Appaiah B A</h5>
              <p className="reviewPara">
                This Resort has everything you need to have a relaxed vacation.
                The staff here is excellent from front office staff to room
                servicing, staff who handles all the activities. They will go
                out of their way to make you feel comfortable for you and your
                kids as well. We loved every moment we spent there
              </p>
            </div>
            <div
              className="reviews"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="250"
              data-aos-duration="500"
            >
              <h5 className="test-haed">Vinutha Reddy</h5>
              <p className="reviewPara">
              They have just started the restaurant where non veg and veg is served in separate buildings

              Food is good..the atmosphere is too good

              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
export default Test;
