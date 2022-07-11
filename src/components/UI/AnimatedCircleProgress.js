import classes from "./AnimatedCircleProgress.module.css";

const AnimatedCircleProgress = (props) => {
  let circleClass = `circle-${props.type}`;
  let shadowClass = `shadow-${props.type}`;

  return (
    <div className={classes.progressbar}>
      <svg className={classes["progressbar__svg"]}>
        <circle
          cx={props.center}
          cy={props.center}
          r={props.radius}
          className={` ${classes["progressbar__svg-circle"]} ${classes[circleClass]} ${classes[shadowClass]}`}
        ></circle>
      </svg>
      <span
        className={` ${classes["progressbar__text"]}  ${classes[shadowClass]}`}
      >
        {props.name}
      </span>
    </div>
  );
};

export default AnimatedCircleProgress;
