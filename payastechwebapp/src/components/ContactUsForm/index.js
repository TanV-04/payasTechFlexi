import { React, useRef } from "react";
import {
  MapContainer,
  ContactInfoContainer,
  InfoHeader,
} from "./ContactUsElements";

const ContactFrom = () => {
  return (
    <>
      <MapContainer>
        <iframe
          width="100%"
          height="400"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=720&amp;height=400&amp;hl=en&amp;q=302,%20Pearl%20Square,%203rd%20Floor,%20above%20Dwarka%20Sweets,%20Satavnagar,%20Handewadi%20Road,%20Hadapsar,%20Pune,%20Maharashtra%20-%20411028+(Payas%20Technologies)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps devices</a>
        </iframe>
      </MapContainer>

      <ContactInfoContainer>
        <InfoHeader>
          <strong>Contact Info</strong>
          <hr />
          <p>
            {" "}
            <i class="fa-solid fa-location-dot" /> 302, Pearl Square, 3rd Floor,
            above Dwarka Sweets, Satavnagar, Handewadi Road, Hadapsar, Pune,
            Maharashtra - 411028
          </p>
          <p>
            {" "}
            <i class="fa-solid fa-phone" /> +91 8767591462 | +91 7822869695
          </p>
          <p>
            {" "}
            <i class="fa-solid fa-envelope" /> info@payastechnologies.com
          </p>
        </InfoHeader>
      </ContactInfoContainer>
    </>
  );
};

export default ContactFrom;
