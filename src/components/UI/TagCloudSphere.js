import React, { useEffect, useRef } from "react";
import TagCloudCustom from "./TagCloud";

//Example for TAGS
// const tags = [
//   "JavaScript",
//   "CSS",
//   "HTML",
//   "Vscode",
//   "React",
//   "git",
//   "Firebase",
//   "JSON",
//   "Interactive",
// ];

function TagCloudSphere(props) {
  const IsTagCloudLoaded = useRef(false);
  let radius = 350;
  if (window.matchMedia("(orientation: portrait)").matches) {
    if (window.innerWidth < 600) {
      radius = 150;
    }
  } else {
    if (window.innerWidth < 1024) {
      radius = 150;
    }
  }

  useEffect(() => {
    if (IsTagCloudLoaded.current) return;

    TagCloudCustom(".content", props.tags, {
      radius: radius, //350
      // maxSpeed: "fast",
      // initSpeed: "fast",
      direction: 135,
      keep: true,
      itemClass: props.className,
    });

    IsTagCloudLoaded.current = true;
  }, [props.tags, radius]);

  return <div className="content" />;
}

export default TagCloudSphere;
