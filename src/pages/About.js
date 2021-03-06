import TagCloudSphere from "../components/UI/TagCloudSphere";

import classes from "./About.module.css";

const About = () => {
  const tags = [
    "<img src='images/cloudtag/react.png'/>",
    "<img src='images/cloudtag/css3.jpg'/>",
    "<img src='images/cloudtag/html5.jpg'/>",
    "<img src='images/cloudtag/bootstrap.jpg'/>",
    "<img src='images/cloudtag/vscode.jpg'/>",
    "<img src='images/cloudtag/javascript.jpg'/>",
    "<img src='images/cloudtag/github.jpg'/>",
    "<img src='images/cloudtag/firebase.jpg'/>",
    "<img src='images/cloudtag/json.png'/>",
    "<img src='images/cloudtag/npm.jpg'/>",
    "<img src='images/cloudtag/mui.svg'/>",
  ];

  return (
    <section className={classes.section} id="about-page">
      <div className={classes["about-text-container"]}>
        <h2>Learn, Grow, Evolve, Become</h2>
        <p>
          I'm Bianca Rosca. I have a background in Engineering and I would like
          to develop more new skills in IT.
        </p>
        <p>
          My main focus is to shift my career towards
          <span> Frontend Development</span> and I've already started to gain
          knowledge in this direction.
        </p>
        <p>
          I define myself as a responsible, perseverent and determined to perform
          person. For me, open communication, teamwork and growth are important.
        </p>
      </div>
      <div className={classes["about-tag-container"]}>
        <TagCloudSphere tags={tags} className={classes["tag-item"]} />
      </div>
    </section>
  );
};

export default About;
