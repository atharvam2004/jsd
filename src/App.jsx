//import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/navbar";
import ReservationForm from "./components/reservation";
import Intro from "./components/intro";
import Accomodation from "./components/accomodation";
import Test from "./components/test";
import Footer from "./components/footer";
import Slide from "./components/slideshow";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import AccomoPage from "./components/AccomoPage";
import ViewNonACRoom from "./components/ViewNonACRoom";
import ViewACSuitRoom from "./components/ViewACSuitRoom";
import ViewACNormalRoom from "./components/ViewACNormalRoom";
import EvenWeddings from "./components/EvenWeddings";
import Offers from "./components/Offers";
import Dining from "./components/Dining";

import Facilities from "./components/Facilities";
import Contact from "./components/contactus";

import Experiance from "./components/Experiance";
import EventWeddingForm from "./components/EventWeddingForm";
import AOS from "aos";
import "aos/dist/aos.css";
import ViewNonACStandard from "./components/ViewNonACStandard";
import ViewNonACSuite from "./components/ViewNonACSuite";
import ViewACStandard from "./components/ViewACStandard";
import { BrowserRouter } from "react-router-dom";

if (window.innerWidth >= 768) {
  AOS.init();
}
function App() {
  const router = [
    {
      path: "/",
      element: (
        <div>
          {/* <Intro
            title1="LUXURY"
            text1="Our hotel boasts a range of exquisite accommodations, each thoughtfully designed to cater to your every need. Whether you choose our lavish suites, spacious family rooms, you'll find yourself surrounded by plush furnishings, modern amenities, and breathtaking views of Coorg's verdant landscapes."
            title2="HOSPITALITY"
            text2="At our charming retreat nestled in the heart of Coorg, experience the epitome of warm hospitality. From the moment you step into our welcoming lobby, our dedicated staff is committed to ensuring your stay is nothing short of exceptional. Immerse yourself in the cozy ambiance of our well-appointed guest rooms, where attention to detail meets comfort. Indulge in personalized service that extends beyond expectations, making your visit an unforgettable journey of warmth and genuine care."
          /> */}
          <Accomodation />
          <Test />
        </div>
      ),
    },
    {
      path: "about",
      element: <div>About</div>,
    },
    {
      path: "Home",
      element: (
        <div>
          <Intro
            title1="LUXURY"
            text1="Our hotel boasts a range of exquisite accommodations, each thoughtfully designed to cater to your every need. Whether you choose our lavish suites, spacious family rooms, you'll find yourself surrounded by plush furnishings, modern amenities. Indulge your taste buds at our on-site restaurant, where our talented chefs curate a culinary experience that showcases the rich flavors of Coorg. From aromatic local delicacies to international cuisines, every bite will be a celebration of taste and refinement. Pair your meal with a fine selection of wines and spirits, and let your senses be tantalized."
            title2="AT SIRI AMBARI"
            text2="Immerse yourself in serenity as you unwind by our. For those seeking rejuvenation, our spa offers a sanctuary of relaxation. As you explore Coorg, prepare to be mesmerized by its natural wonders. Embark on guided tours to discover cascading waterfalls, mist-covered mountains, and sprawling coffee plantations. Take a leisurely stroll through aromatic spice gardens, or embark on an exhilarating trek through lush forests teeming with Siri Ambari Guide Facility. Coorg is a haven for nature lovers and adventure seekers alike."
          />
          <Accomodation />
          <Test />
        </div>
      ),
    },
    {
      path:"AccomoPage",
      element:<AccomoPage/>,
    },
    {
      path: "ViewNonACRoom",
      element: <ViewNonACRoom />,
    },
    {
      path: "ViewACSuitRoom",
      element: <ViewACSuitRoom />,
    },
    {
      path: "ViewACNormalRoom",
      element: <ViewACNormalRoom />,
    },
    {
      path: "ViewNonACStandard",
      element: <ViewNonACStandard />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
    {
      path: "ViewNonACSuite",
      element: <ViewNonACSuite />,
    },
    {
      path: "ViewACStandard",
      element: <ViewACStandard />,
    },
    {
      path: "events-weddings",
      element: <EvenWeddings />,
    },
    {
      path: "/Offers",
      element: <Offers />,
    },
    {
      path: "/Dining",
      element: <Dining />,
    },
    {
      path: "Facilities",
      element: <Facilities />,
    },
    {
      path: "Experiance",
      element: <Experiance />,
    },
    {
      path: "/EventWeddingForm",
      element: <EventWeddingForm />,
    },
  ];

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Slide />
        <ReservationForm />
        <Routes>
          {router.map((route, i) => (
            <Route {...route} />
          ))}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
