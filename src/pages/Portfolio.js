import classes from "./Portfolio.module.css";

import VerticalTimelineComp from "../components/TimeLine/VerticalTimelineComp";

const Portfolio = (props) => {
  return (
    <section className={classes.section} id="portfolio-page">
      <div className={classes["title-container"]}>
        <h2>Some of my projects</h2>
      </div>
      <div className={classes["timeline-container"]}>
        <VerticalTimelineComp />
      </div>
    </section>
  );
};

export default Portfolio;
