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
          <img width="80" height="80" src="/logo.svg" />
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
              className={(navData) =>
                navData.isActive ? classes.active : classes.link
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={(navData) =>
                navData.isActive ? classes.active : classes.link
              }
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={(navData) =>
                navData.isActive ? classes.active : classes.link
              }
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
              <LinkedInIcon fontSize="small" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/airam361"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon fontSize="small" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
