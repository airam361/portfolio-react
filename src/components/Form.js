import { useState } from "react";
import emailjs from "@emailjs/browser";

import classes from "./Form.module.css";

const Form = () => {
  const [name, setName] = useState("");
  // const [nameWasTouched, setNameWasTouched] = useState(false)

  const [email, setEmail] = useState("");
  const [emailWasTouched, setEmailWasTouched] = useState(false);

  const [message, setMessage] = useState("");
  const [messageWasTouched, setMessageWasTouched] = useState(false);

  const emailIsValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    email
  );
  const emailIsInvalid = !emailIsValid && emailWasTouched;

  const messageIsValid = message.trim() !== "";
  const messageIsInvalid = !messageIsValid && messageWasTouched;

  let formIsValid = false;

  if (emailIsValid && messageIsValid) {
    formIsValid = true;
  }

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const emailBlurHandler = (event) => {
    setEmailWasTouched(true);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const messageChangeHandler = (event) => {
    setMessage(event.target.value);
  };

  const messageBlurHandler = (event) => {
    setMessageWasTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEmailWasTouched(true);
    setMessageWasTouched(true);

    if (!formIsValid) {
      console.log("form not valid");
      return;
    }

    // emailjs
    //   .send(
    //     "service_tgavkeq",
    //     "template_h534dyk",
    //     { email: email, message: message },
    //     "4X12NJD-Kp2Bhqm3M"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );

    console.log(name, email, message);
    setName("");
    setEmail("");
    setEmailWasTouched(false);
    setMessage("");
    setMessageWasTouched(false);
  };

  const emailInvalidClass = emailIsInvalid ? classes.invalid : "";
  const messageInvalidClass = messageIsInvalid ? classes.invalid : "";

  return (
    <form className={classes["contact-form"]} onSubmit={formSubmissionHandler}>
      <div className={classes["control-group"]}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={nameChangeHandler}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          className={emailInvalidClass}
        />
      </div>
      <div className={classes["control-group"]}>
        <textarea
          placeholder="Message"
          value={message}
          onChange={messageChangeHandler}
          onBlur={messageBlurHandler}
          className={messageInvalidClass}
        />
      </div>
      <div className={classes["form-action"]}>
        <button>Send message!</button>
        {/* <input className={classes.geeks}></input> */}
      </div>
    </form>
  );
};

export default Form;
