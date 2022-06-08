import TypeAnimation from "react-type-animation";

import ParticleBackground from "../components/UI/ParticleBackground";

import classes from "./Home.module.css";

const Home = (props) => {
  return (
    <section className={classes.section}>
      <ParticleBackground>
        <div className={classes.content}>
          <h1>Hello</h1>
          <TypeAnimation
            cursor={true}
            repeat={Infinity}
            sequence={[
              "React typing animation based on typical",
              3000,
              "This text will be repeated infinitely.",
              3000,
            ]}
            wrapper="div"
            className={classes["type-animation"]}
          />
        </div>
      </ParticleBackground>
    </section>
  );
};

export default Home;
