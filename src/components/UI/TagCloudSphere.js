import React, { useEffect, useRef } from "react";
import TagCloud from "TagCloud";

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

  useEffect(() => {
    if (IsTagCloudLoaded.current) return;

    TagCloud(".content", props.tags, {
      radius: 350,
      // maxSpeed: "fast",
      // initSpeed: "fast",
      direction: 135,
      keep: true,
      itemClass: props.className,
    });

    IsTagCloudLoaded.current = true;
  }, [props.tags]);

  return <div className="content" />;
}

export default TagCloudSphere;
