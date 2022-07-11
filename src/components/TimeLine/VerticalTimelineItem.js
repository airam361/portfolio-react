import { useState } from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import OpenWithRoundedIcon from "@mui/icons-material/OpenWithRounded";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";

import { Modal } from "@mui/material";
import { Box } from "@mui/system";

import classes from "./VerticalTimelineItem.module.css";
import { useRef } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95vw",
  height: "90vh",
  border: "none",
};

const VerticalTimelineItem = (props) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  return (
    <>
      <Modal
        open={open}
        onClick={handleClose}
      >
        <Box sx={style}>
          <button className={classes.btnClose} onClick={handleClose}></button>
          <iframe
            ref={ref}
            className={classes.iframe}
            src={props.url}
          ></iframe>
        </Box>
      </Modal>
      <div className={classes.container}>
        <img src={props.img} alt="Site view" />
        <div className={classes.overlay}>
          <h3 className={classes.name}>{props.name}</h3>
          <div className={classes.middle}>
            <a href={props.github} target="_blank" rel="noopener noreferrer">
              <GitHubIcon fontSize="large" />
            </a>
            <OpenWithRoundedIcon fontSize="large" onClick={handleOpen} />
            <a href={props.url} target="_blank" rel="noopener noreferrer">
              <LaunchRoundedIcon fontSize="large" />
            </a>
          </div>
          <div className={classes.bottom}>
            {props.description_tags.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default VerticalTimelineItem;
