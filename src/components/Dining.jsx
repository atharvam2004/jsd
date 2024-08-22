import React from "react";
import "../Styles/offers.css";
import lux from "../assets/acc3.jpg";

import cul11 from "../assets/food1.jpeg";
import cul21 from "../assets/food2.jpg";
import chana from "../assets/chana.webp";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import "aos/dist/aos.css";
const DemoBox = (props) => (
  <p className={`height-${props.value}`}>{props.children}</p>
);
const Offers = () => (
  <div>
    <div style={{ textAlign: "center", margin: "2rem 8rem" }}>
      <h1 style={{ color: "#debe64", marginBottom: "1rem", fontWeight: "600" }}>
        DINING FACILITIES & ARRANGEMENTS
      </h1>

      <p style={{ color: "#363433", fontWeight: "500" }}>
        Embark on a culinary journey at our Coorg retreat, where dining is an
        art for every palate. Our distinguished facilities cater to diverse
        preferences, offering a perfect blend of flavors. For vegetarian
        connoisseurs, our dedicated restaurant serves a delectable array of
        Coorg's authentic dishes. Non-vegetarian enthusiasts can relish a
        separate gastronomic adventure at our specialized restaurant, featuring
        an enticing selection of locally-inspired delicacies.
      </p>
      <p style={{ color: "#363433", fontWeight: "500" }}>
        Whether you savor the earthy essence of Coorg's vegetarian fare or the
        savory delights of non-vegetarian dishes, our dining options promise a
        delightful experience for every guest.
      </p>
    </div>

    <h2
      style={{
        textAlign: "center",
        color: "#debe64",
        marginBottom: "1rem",
        fontWeight: "600",
        margin: "2rem 8rem",
      }}
    >
      Veg Delights
    </h2>
    <p
      style={{
        textAlign: "center",
        color: "#363433",
        fontWeight: "500",
        margin: "2rem 8rem",
      }}
    >
      Indulge in a symphony of vegetarian flavors at our dedicated restaurant.
      Our Veg Delights menu features a delightful array of dishes, including
      Paneer Tikka Masala, Chana Masala, Baingan Bharta, Aloo Gobi, Vegetable
      Biryani, and the crispy and spicy Gobi Manchurian. Each dish is crafted to
      perfection, promising a delightful experience for our vegetarian guests.
    </p>

    <Container fluid style={{ padding: 0, right: 0 }}>
      <Row className="parentLux" style={{ padding: 0 }}>
        <Col
          lg={6}
          id=""
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="300"
          className="luxDiv"
        >
          <div className="luxhead">
            <h4
              className="pptheads"
              style={{
                color: "#debe64",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Veg Dishes:
            </h4>
            <ul>
              <li style={{ fontWeight: "500", padding: "1%" }}>
                <strong
                  className="pptheads"
                  style={{ color: "#debe64", fontWeight: "500" }}
                >
                  Paneer Tikka Masala:
                </strong>{" "}
                A delightful dish featuring paneer in a rich and flavorful
                masala.
              </li>
              <li style={{ fontWeight: "500", padding: "1%" }}>
                <strong
                  className="pptheads"
                  style={{ color: "#debe64", fontWeight: "500" }}
                >
                  Chana Masala:
                </strong>{" "}
                Savor the goodness of chickpeas in a spicy masala.
              </li>
              <li style={{ fontWeight: "500", padding: "1%" }}>
                <strong
                  className="pptheads"
                  style={{ color: "#debe64", fontWeight: "500" }}
                >
                  Baingan Bharta:
                </strong>{" "}
                Enjoy the smoky flavors of roasted eggplant in this classic
                dish.
              </li>
              <li style={{ fontWeight: "500", padding: "1%" }}>
                <strong
                  className="pptheads"
                  style={{ color: "#debe64", fontWeight: "500" }}
                >
                  Aloo Gobi:
                </strong>{" "}
                A comforting combination of potatoes and cauliflower in a
                flavorful curry.
              </li>
              <li style={{ fontWeight: "500", padding: "1%" }}>
                <strong
                  className="pptheads"
                  style={{ color: "#debe64", fontWeight: "500" }}
                >
                  Vegetable Biryani:
                </strong>{" "}
                Try our fragrant and flavorful rice dish made with an assortment
                of fresh veggies and aromatic spices.
              </li>
              <li style={{ fontWeight: "500", padding: "1%" }}>
                <strong
                  className="pptheads"
                  style={{ color: "#debe64", fontWeight: "500" }}
                >
                  Gobi Manchurian:
                </strong>{" "}
                Don't miss this crispy and spicy Indo-Chinese dish made with
                cauliflower florets fried and coated in a tangy sauce.
              </li>

              <li style={{ fontWeight: "500", padding: "1%" }}>
                <strong
                  className="pptheads"
                  style={{ color: "#debe64", fontWeight: "500" }}
                >
                  Vegetable Chow Mein:
                </strong>{" "}
                Savor the goodness of vegetables in our delicious chow mein.
              </li>
              <li style={{ fontWeight: "500", padding: "1%" }}>
                <strong
                  className="pptheads"
                  style={{ color: "#debe64", fontWeight: "500" }}
                >
                  Szechuan Dishes:
                </strong>{" "}
                Try our spicy and flavorful Szechuan Chicken, Szechuan Fish, and
                Szechuan Tofu.
              </li>
              <li style={{ fontWeight: "500", padding: "1%" }}>
                <strong
                  className="pptheads"
                  style={{ color: "#debe64", fontWeight: "500" }}
                >
                  Chinese-style Fried Rice and Noodles:
                </strong>{" "}
                Don't miss our signature dishes made with fresh veggies and your
                choice of meat or tofu.
              </li>
            </ul>
            <button className="buttonLux">BOOK NOW</button>
            {/* <button className="buttonLux">VIEW ACCOMODATION OPTIONS</button> */}
          </div>
        </Col>
        <Col
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="200"
          data-aos-duration="500"
          lg={6}
          style={{ padding: 0 }}
        >
          <Carousel fade id="luxImg">
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="menuimg"
                src={chana}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="menuimg"
                src={cul11}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="menuimg"
                src="https://media.istockphoto.com/id/1334115358/photo/cabbage-manchurian.webp?b=1&s=170667a&w=0&k=20&c=OH_BQXtbxXrdgPH-yHWiFNta57DJuXjPR3348VzqPK8="
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item id="luxImg">
              <img
                className="d-block w-100"
                id="menuimg"
                src="https://media.istockphoto.com/id/980079724/photo/indian-vegetable-pulav-or-biryani-made-using-basmati-rice-served-in-a-ceramic-bowl-selective.webp?b=1&s=170667a&w=0&k=20&c=0otWV9vjZMyUwasO11uJMzYh2tevQuNI4iTvmrVCWEU="
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
    <h2
      style={{
        textAlign: "center",
        color: "#debe64",
        marginBottom: "1rem",
        fontWeight: "600",
        margin: "2rem 8rem",
      }}
    >
      Non-Veg Extravaganza
    </h2>
    <p
      style={{
        textAlign: "center",
        color: "#363433",
        fontWeight: "500",
        margin: "2rem 8rem",
      }}
    >
      For those seeking a meaty adventure, our Non-Veg Extravaganza awaits at
      our specialized restaurant. Satisfy your cravings with flavorful delights
      such as Chicken Chettinad, Mutton Rogan Josh, Fish Fry, Prawns Masala,
      Tandoori Chicken, and the delectable Chicken 65. Indulge in a culinary
      journey that caters to the diverse preferences of our non-vegetarian
      patrons, all prepared with precision and passion.
    </p>

    <Container fluid style={{ padding: 0, right: 0 }}>
      <Row className="parentLux" style={{ padding: 0 }}>
        <Col
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="200"
          data-aos-duration="500"
          lg={6}
          style={{ padding: 0 }}
        >
          <Carousel fade id="luxImg">
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="menuimg"
                src="https://media.istockphoto.com/id/1411646705/photo/chicken-tikka-masala-cooked-marinated-chicken-in-spiced-curry-sauce.webp?b=1&s=170667a&w=0&k=20&c=en-Tx0TIpjDIu2lWtKI1vKyvvpVfxbmrJFPstZq_ydw="
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                id="menuimg"
                src="https://media.istockphoto.com/id/1052326454/photo/chettinad-chicken-curry-with-chili-pepper-closeup-horizontal-top-view.webp?b=1&s=170667a&w=0&k=20&c=Fk5_lzzHErYxeJhYKem9BAsYqWSoRCo481RVRaJ19YE="
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item id="luxImg">
              <img
                className="d-block w-100"
                id="menuimg"
                src="https://media.istockphoto.com/id/1309538220/photo/rogan-josh.webp?b=1&s=170667a&w=0&k=20&c=NqmYLDCjQa9zIoCfIsRmflCAG5onAMOUKxAEoU-FQ1E="
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item id="luxImg">
              <img
                className="d-block w-100"
                id="menuimg"
                src="https://media.istockphoto.com/id/482470253/photo/curry-shrimp.webp?b=1&s=170667a&w=0&k=20&c=j0f4Eoyd-4eDH34-dtiLh5bNd0Pq-Kyu4xdXqvuafTQ="
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col
          lg={6}
          id=""
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="300"
          className="luxDiv"
          style={{ backgroundColor: "rgb(29, 14, 0)" }}
        >
          <div className="luxhead">
            <h4
              className="pptheads"
              style={{
                color: "#debe64",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Non-Veg Dishes:
            </h4>
            <ul>
              <li style={{ fontWeight: "500", padding: "1%" }}>
                <strong
                  className="pptheads"
                  style={{ color: "#debe64", fontWeight: "500" }}
                >
                  Chicken Chettinad:
                </strong>{" "}
                Satisfy your meat cravings with this flavorful chicken dish.
              </li>
              <li style={{ fontWeight: "500", padding: "1%" }}>
                <strong
                  className="pptheads"
                  style={{ color: "#debe64", fontWeight: "500" }}
                >
                  Mutton Rogan Josh:
                </strong>{" "}
                Experience the richness of our Mutton Rogan Josh.
              </li>
              <li style={{ fontWeight: "500", padding: "1%" }}>
                <strong
                  className="pptheads"
                  style={{ color: "#debe64", fontWeight: "500" }}
                >
                  Fish Fry:
                </strong>{" "}
                Delight in the crispy goodness of our fish fry.
              </li>
              <li style={{ fontWeight: "500", padding: "1%" }}>
                <strong
                  className="pptheads"
                  style={{ color: "#debe64", fontWeight: "500" }}
                >
                  Prawns Masala:
                </strong>{" "}
                Enjoy prawns cooked to perfection in a flavorful masala.
              </li>
              <li style={{ fontWeight: "500", padding: "1%" }}>
                <strong
                  className="pptheads"
                  style={{ color: "#debe64", fontWeight: "500" }}
                >
                  Sweet and Sour Chicken:
                </strong>{" "}
                Indulge in the comforting and satisfying flavors of this classic
                Chinese dish.
              </li>
              <li style={{ fontWeight: "500", padding: "1%" }}>
                <strong
                  className="pptheads"
                  style={{ color: "#debe64", fontWeight: "500" }}
                >
                  Kung Pao Shrimp:
                </strong>{" "}
                Enjoy the spicy and flavorful taste of our Kung Pao Shrimp.
              </li>
              <li style={{ fontWeight: "500", padding: "1%" }}>
                <strong
                  className="pptheads"
                  style={{ color: "#debe64", fontWeight: "500" }}
                >
                  Tandoori Chicken:
                </strong>{" "}
                Sink your teeth into succulent chicken marinated in a spicy
                blend of yogurt and Indian spices, cooked in a traditional clay
                oven.
              </li>
              <li style={{ fontWeight: "500", padding: "1%" }}>
                <strong
                  className="pptheads"
                  style={{ color: "#debe64", fontWeight: "500" }}
                >
                  Chicken 65:
                </strong>{" "}
                Sample our delectable, spicy, and crispy fried chicken dish
                that's sure to please your taste buds.
              </li>
              <li style={{ fontWeight: "500", padding: "1%" }}>
                <strong
                  className="pptheads"
                  style={{ color: "#debe64", fontWeight: "500" }}
                >
                  Coorgi-style Biryani:
                </strong>{" "}
                Enjoy the rich and spicy taste of our signature biryani made
                with locally sourced ingredients.
              </li>
              <li style={{ fontWeight: "500", padding: "1%" }}>
                <strong
                  className="pptheads"
                  style={{ color: "#debe64", fontWeight: "500" }}
                >
                  Egg Biryani:
                </strong>{" "}
                A delightful biryani with the goodness of eggs. Price: 250
              </li>
              <li style={{ fontWeight: "500", padding: "1%" }}>
                <strong
                  className="pptheads"
                  style={{ color: "#debe64", fontWeight: "500" }}
                >
                  Chicken Tikka Biryani:
                </strong>{" "}
                A flavorful biryani infused with the goodness of chicken tikka.
              </li>
              <li style={{ fontWeight: "500", padding: "1%" }}>
                <strong
                  className="pptheads"
                  style={{ color: "#debe64", fontWeight: "500" }}
                >
                  Chicken Dum Biryani:
                </strong>{" "}
                Experience the richness of our Chicken Dum Biryani.
              </li>
              <li style={{ fontWeight: "500", padding: "1%" }}>
                <strong
                  className="pptheads"
                  style={{ color: "#debe64", fontWeight: "500" }}
                >
                  Thalakatti Biryani:
                </strong>{" "}
                Savour the traditional flavors of Thalakatti Biryani.
              </li>
            </ul>
            <button className="buttonLux">BOOK NOW</button>
            {/* <button className="buttonLux">VIEW ACCOMODATION OPTIONS</button> */}
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);
export default Offers;
