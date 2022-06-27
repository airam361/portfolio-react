// import { useRef } from "react";
// import TypeAnimation from "react-type-animation";

import WrapperGoogleMap from "../components/GoogleMaps/WraperGoogleMap";
import Form from "../components/Form";
import TypeAnimationCustom from "../components/UI/TypeAnimationCustom";

import classes from "./Contact.module.css";

const Contact = (props) => {
  return (
    <section id="contact-page" className={classes.section}>
      <div className={classes["contact-form-container"]}>
        <h2>Contact me</h2>
        <TypeAnimationCustom
          cursor={true}
          repeat={1}
          sequence={[
            "If you have any questions...",
            2000,
            "",
            1000,
            "don't hesitate to send me a message! :)",
          ]}
          className={classes["type-animation"]}
        />
        <Form />
      </div>

      <div className={classes["contact-map-container"]}>
        <WrapperGoogleMap />
      </div>
    </section>
  );
};

export default Contact;
