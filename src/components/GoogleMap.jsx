import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 59.955413,
      lng: 30.337844,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "80vh", width: "100%" }}>
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d475.66912562941235!2d76.01675480259784!3d12.400788103341174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5a1eeefa312c5%3A0xf5adce2b4a947f47!2sSiri%20Ambari%20-%20Fine%20Dine%20Multi%20Cusine!5e0!3m2!1sen!2sin!4v1699779782227!5m2!1sen!2sin"
  width="100%"
  height="100%"
  style={{ border: 0, maxWidth: "100%" }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
   
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA1we5BwdCAeDvXWng7ye2PxWV-aq-w908" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact> */}
    </div>
  );
}
