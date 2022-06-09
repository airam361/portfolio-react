import TagCloudSphere from "../components/UI/TagCloudSphere";


import classes from "./About.module.css";

const About = () => {
  const tags = [
    "JavaScript",
    "CSS",
    "HTML",
    "Bootstrap",
    "Vscode",
    "Fun",
    "React",
    "Git",
    "Firebase",
    "JSON",
    "Interactive",
    "npm",
    "Material UI",
  ];

  return (
    <section className={classes.section}>
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
          I define myself as a responsible, loyal and determined to perform
          person. For me, open communication, teamwork and development are
          important; the best team is the one in which we are all like a family.
        </p>
      </div>
      <div className={classes["about-tag-container"]}>
        <TagCloudSphere tags={tags} className={classes["tag-item"]} />
      </div>
    </section>
  );
};

export default About;
