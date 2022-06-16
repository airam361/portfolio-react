import { useEffect, useRef } from "react";
import TypeAnimation from "react-type-animation";

import WrapperGoogleMap from "../components/GoogleMaps/WraperGoogleMap";
import Form from "../components/Form";
import useOnScreen from "../customHooks/useOnScreen";

import classes from "./Contact.module.css";

const Contact = (props) => {
  const ref = useRef(null);

  const isVisible = useOnScreen(ref);

  if (isVisible) {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }

  return (
    <section ref={ref} id="contact-page" className={classes.section}>
      <div className={classes["contact-form-container"]}>
        <h2>Contact me</h2>
        {/* <p>If you have any question, don't hesitate to send me a message! :)</p> */}
        {isVisible && (
          <TypeAnimation
            cursor={true}
            repeat={1}
            sequence={[
              "If you have any questions...",
              2000,
              "",
              1000,
              "don't hesitate to send me a message! :)",
            ]}
            wrapper="div"
            className={classes["type-animation"]}
          />
        )}
        <Form />
      </div>
      <div className={classes["contact-map-container"]}>
        <WrapperGoogleMap />
      </div>
    </section>
  );
};

export default Contact;
