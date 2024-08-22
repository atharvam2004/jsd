import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";
import "../Styles/navbar.css";
import Dropdown from "react-bootstrap/Dropdown";
function Navbar1() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownDine, setShowDropdownDine] = useState(false);
  const [showDropdownHotel, setShowDropdownHotel] = useState(false);
  const [location, setLocation] = useState("Bylakuppe");

  const handleDropdownChange = (selectedValue) => {
    setLocation(selectedValue);
  };

  return (
    <>
      <Navbar id="navbar-main" expand="lg">
        <div className="stickyNav">
          <a href="/Home" id="logo-navbar">
            <img
              alt="age3"
              id="logo-navbarimg"
              src={logo}
              href="/Home"
              style={{ background: "#FFF", borderRadius: "6rem" }}
            />
          </a>

          <Dropdown
            className="AddDrop"
            onMouseLeave={() => setShowDropdownHotel(false)}
            onMouseOver={() => setShowDropdownHotel(true)}
          >
            <Dropdown.Toggle variant="secondary" id="navbar-itemd">
              <a href="#" className="navbar-itemt">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-geo-alt"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
                {location}
              </a>
              <i className="bi bi-caret-down-fill"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu show={showDropdownHotel}>
              {/* <Dropdown.Item
                href="#"
                onClick={() => handleDropdownChange("Kushalnagar")}
              >
                Kushalnagar
              </Dropdown.Item> */}
              <Dropdown.Item
                href="#"
                onClick={() => handleDropdownChange("Bylakuppe")}
              >
                Bylakuppe
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="toggle-btn"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navparent">
            <a id="navbar-item" href="/Home">
              HOME
            </a>
         
                <a id="navbar-item" href="/accomopage">
                  ACCOMODATION
                </a>
                {/* <Dropdown.Menu show={showDropdown}>
                  <Dropdown.Item href="/ViewNonACSuite">
                    View Non-AC Suite Room
                  </Dropdown.Item>
                  <Dropdown.Item href="/ViewACSuitRoom">
                    View AC Suit Room
                  </Dropdown.Item>
                  <Dropdown.Item href="/ViewACNormalRoom">
                    View AC Normal Room
                  </Dropdown.Item>
                  <Dropdown.Item href="/ViewACStandard">
                    View AC Standard Suit Room
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
              <a id="navbar-item" href="/Dining">
                DINING
              </a>

              <a id="navbar-item" href="/Facilities">
                FACILITIES
              </a>

            {/* {location !== "Kushalnagar" && (
              <a id="navbar-item" href="Experiance">
                EXPERIENCES
              </a>
            )}
      

           {location !== "Kushalnagar" && (
              <a id="navbar-item" href="Offers">
                OFFERS
              </a>
            )}
              */}
              <a id="navbar-item" href="events-weddings">
                EVENTS WEDDINGS
              </a>
              <a id="navbar-item" href="/contact">
                CONTACT US
              </a>

            {/* <div className="nav2">
                <a id="navbar-item"  href="#">
                  HOME
                </a>
                <a id="navbar-item" href="#">
                  ACCOMODATION
                </a>
                <a id="navbar-item" href="#">
                  DINDING
                </a>
                <a id="navbar-item" href="#">
                  FACILITEIS
                </a>
            </div> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
export default Navbar1;
