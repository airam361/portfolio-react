import { NavLink } from "react-router-dom";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <NavLink to="/">
          <svg
            version="1.0"
            // xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 1280 1280"
            // preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
              fill="#fca311"
              stroke="none"
            >
              <path d="M7065 10853 c-625 -33 -1282 -171 -1815 -380 -766 -300 -1412 -782 -1948 -1451 -383 -479 -656 -1030 -777 -1567 -64 -284 -89 -512 -89 -800 1 -232 11 -330 70 -630 138 -715 275 -1106 414 -1184 40 -22 49 -23 154 -17 302 19 827 66 845 76 46 24 63 102 40 185 -6 22 -46 114 -89 205 -224 474 -313 895 -282 1328 46 659 310 1248 843 1887 106 127 431 458 574 585 728 645 1534 1033 2450 1178 57 9 59 9 35 -7 -14 -9 -57 -45 -96 -81 -116 -107 -203 -174 -307 -236 -55 -32 -114 -74 -133 -92 -60 -58 -131 -218 -281 -632 -217 -600 -414 -1315 -613 -2230 -306 -1404 -530 -2254 -717 -2720 -175 -437 -449 -810 -778 -1061 -100 -76 -268 -186 -392 -255 -242 -135 -433 -208 -668 -253 -206 -40 -245 -63 -245 -148 0 -55 30 -97 92 -127 58 -28 200 -56 283 -56 56 0 399 -61 625 -111 409 -91 965 -168 1432 -200 233 -15 781 -7 983 16 179 20 391 55 552 91 193 43 1047 279 1206 334 394 134 756 325 1082 570 550 413 866 854 977 1363 30 139 33 475 5 607 -86 405 -342 827 -652 1075 -226 181 -628 372 -1057 502 -70 21 -128 40 -128 43 0 3 56 29 123 59 170 76 636 310 733 369 373 224 745 567 950 874 286 429 365 918 222 1368 -152 477 -585 867 -1218 1097 -146 53 -930 291 -1065 323 -205 49 -425 82 -675 100 -123 9 -518 11 -665 3z m1516 -594 c353 -231 529 -608 529 -1131 0 -489 -159 -951 -469 -1363 -145 -192 -418 -453 -661 -632 -100 -74 -264 -183 -274 -183 -4 0 -4 10 -1 23 316 1359 577 2364 705 2717 124 341 132 370 125 416 -12 84 -35 97 -250 154 -104 28 -194 53 -200 55 -5 3 85 4 200 2 l210 -2 86 -56z m-844 -3889 c366 -89 656 -271 833 -521 359 -509 343 -1441 -37 -2104 -157 -274 -387 -547 -634 -753 -188 -156 -541 -363 -669 -391 -25 -5 -130 -15 -235 -21 -338 -20 -740 10 -1205 91 -179 31 -471 89 -570 113 -30 8 -68 17 -84 21 -28 6 -24 10 75 62 657 348 1152 792 1532 1374 123 189 178 288 291 521 203 419 365 892 492 1440 45 193 49 207 68 203 12 -3 76 -18 143 -35z" />
            </g>
          </svg>
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
