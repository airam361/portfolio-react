import { useEffect, useRef, useState } from "react";
import AnimatedCircleProgress from "../components/UI/AnimatedCircleProgress";
import useOnScreen from "../customHooks/useOnScreen";

import classes from "./Skills.module.css";

const Skills = () => {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  const [center, setCenter] = useState("90");
  const [radius, setRadius] = useState("80");

  useEffect(() => {
    function handleResize() {
      setCenter("90");
      setRadius("80");
      
      if (window.matchMedia("(orientation: portrait)").matches) {
        if (window.innerWidth < 900) {
          setCenter("60");
          setRadius("50");
        }
      } else {
        if (window.innerWidth < 1024) {
          setCenter("60");
          setRadius("50");
        }
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return (
    <section className={classes.section} id="skills-page">
      <div className={classes["title-container"]}>
        <h2>Skills</h2>
      </div>
      <div ref={ref} className={classes.container}>
        {isVisible && (
          <div className={classes["container__progressbars"]}>
            <AnimatedCircleProgress
              type="html"
              center={center}
              radius={radius}
              name="HTML"
            />

            <AnimatedCircleProgress
              type="css"
              center={center}
              radius={radius}
              name="CSS"
            />

            <AnimatedCircleProgress
              type="bootstrap"
              center={center}
              radius={radius}
              name="Bootstrap"
            />
            <AnimatedCircleProgress
              type="materialui"
              center={center}
              radius={radius}
              name="MaterialUI"
            />

            <AnimatedCircleProgress
              type="js"
              center={center}
              radius={radius}
              name="JavaScript"
            />

            <AnimatedCircleProgress
              type="react"
              center={center}
              radius={radius}
              name="React"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
