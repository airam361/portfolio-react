import React, { useEffect, useRef } from "react";
import TagCloud from "TagCloud";

const Tags = [
  "JavaScript",
  "CSS",
  "HTML",
  "Vscode",
  "XD",
  "React",
  "Python",
  "Linux",
  "git",
  "Flutter",
  "Dart",
  "Firebase",
  "SASS",
  "JSON",
  "Figma",
  "3D",
  "TagCloud",
  "JavaScript",
  "CSS3",
  "Animation",
  "Interactive",
  "Mouse",
  "Rolling",
  "Sphere",
  "6KB",
  "v2.x",
];

function TagCloudSphere(props) {
  const IsTagCloudLoaded = useRef(false);

  useEffect(() => {
    if (IsTagCloudLoaded.current) return;

    TagCloud(".content", props.tags, {
      radius: 500,
      maxSpeed: "fast",
      initSpeed: "fast",
      direction: 135,
      keep: true,
      itemClass: "tag-item",
    });

    IsTagCloudLoaded.current = true;
  }, []);

  return <div className="content" />;
}

export default TagCloudSphere;
