import { NavLink } from "react-router-dom";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <NavLink
          to="/"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <img src="/logo.svg" alt="logo" />
          <span>Bianca</span>
        </NavLink>
        <span>Junior</span>
        <span>Frontend</span>
        <span>Developer</span>
      </div>
      <nav className={classes["page-nav"]}>
        <ul>
          <li>
            <NavLink
              to="/about"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav className={classes["social-nav"]}>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/bianca-rosca-3316b314b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon fontSize="medium" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/airam361"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon fontSize="medium" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
