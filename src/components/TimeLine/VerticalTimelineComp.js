import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import VerticalTimelineItem from "./VerticalTimelineItem";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import { timeline_data } from "../../store/timelineData";


const VerticalTimelineComp = () => {
  return (
    <VerticalTimeline lineColor={"var(--color-primary)"}>
      {timeline_data.reverse().map((obj, index) => (
        <VerticalTimelineElement
          key={index}
          contentStyle={{
            display: "flex",
            background: "var(--color-secondary)",
            width: "37%",
            marginLeft: "8%",
            marginRight: "8%",
            padding: "5px",
            borderRadius: "1rem",
          }}
          contentArrowStyle={{
            border: "10px solid  transparent",
            borderRight: "15px solid  var(--color-secondary)",
          }}
          date={obj.date}
          iconStyle={{
            background: "#fff",
            boxShadow: "none",
            border: "3px solid var(--color-primary)",
          }}
          icon={<StarOutlinedIcon fontSize="large" />}
        >
          <VerticalTimelineItem
            key={index}
            name={obj.name}
            url={obj.url}
            img={obj.img}
            github={obj.github}
            description_tags={obj.description_tags}
          />
        </VerticalTimelineElement>
      ))}

      <VerticalTimelineElement
        iconStyle={{
          background: "var(--color-secondary)",
          boxShadow: "none",
          border: "3px solid var(--color-primary)",
        }}
        icon={<StarOutlinedIcon fontSize="large" />}
      />
    </VerticalTimeline>
  );
};

export default VerticalTimelineComp;
