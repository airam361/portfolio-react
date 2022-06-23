import { NavLink } from "react-router-dom";

import TypeAnimationCustom from "../components/UI/TypeAnimationCustom";
import ParticleBackground from "../components/UI/ParticleBackground";

import classes from "./Home.module.css";

const Home = () => {
  return (
    <section className={classes.section}>
      <ParticleBackground>
        <div className={classes.content}>
          <h1>Hi,</h1>
          <h1>I'm Bianca,</h1>
          <h1>Jr. Frontend Developer</h1>
          <TypeAnimationCustom
            cursor={true}
            repeat={Infinity}
            sequence={[
              "I'm driven by learning",
              2000,
              "",
              1000,
              "Ready to be part of your team",
              2000,
              "",
              1000,
            ]}
            className={classes["type-animation"]}
          />
          <button>
            <NavLink to="/contact">Contact me!</NavLink>
          </button>
        </div>
      </ParticleBackground>
    </section>
  );
};

export default Home;
