import React from "react";

import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.parent}>
      <div className={classes.child1}>
      <div className="left-links">
          <a href="/Dashboard">Dashboard</a>
          <a href="/Patients">Patients</a>
          <a href="/human">Human Resources</a>
          <a href="/Clinical">Clinical</a>
          <a href="/Compliance">Compliance</a>
          <a href="/Biling">Biling</a>
          <a href="/Reports">Reports</a>
        </div>
        <div className="right-links">
          <button>Clocked-In</button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M12.5599 21C17.5292 21 21.5576 16.9706 21.5576 12C21.5576 7.02944 17.5292 3 12.5599 3C7.59064 3 3.56226 7.02944 3.56226 12C3.56226 16.9706 7.59064 21 12.5599 21Z"
              stroke="#7E7E7E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.5603 18C13.1816 18 13.6853 17.4963 13.6853 16.875C13.6853 16.2537 13.1816 15.75 12.5603 15.75C11.939 15.75 11.4353 16.2537 11.4353 16.875C11.4353 17.4963 11.939 18 12.5603 18Z"
              fill="#7E7E7E"
            />
            <path
              d="M12.5601 13.5V12.75C13.0791 12.75 13.5865 12.5961 14.0181 12.3076C14.4497 12.0192 14.786 11.6092 14.9847 11.1295C15.1833 10.6499 15.2353 10.1221 15.134 9.61289C15.0327 9.10369 14.7828 8.63596 14.4158 8.26885C14.0488 7.90173 13.5812 7.65173 13.0721 7.55044C12.563 7.44915 12.0354 7.50114 11.5558 7.69982C11.0763 7.8985 10.6664 8.23495 10.3781 8.66663C10.0897 9.09831 9.93579 9.60583 9.93579 10.125"
              stroke="#7E7E7E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M5.81835 9.75072C5.81459 8.86073 5.98729 7.97884 6.32646 7.15605C6.66562 6.33326 7.16453 5.5859 7.79432 4.95721C8.4241 4.32853 9.17226 3.83099 9.99552 3.49339C10.8188 3.15578 11.7008 2.98481 12.5905 2.99037C13.4803 2.99592 14.3601 3.17788 15.1791 3.52574C15.998 3.87359 16.7399 4.38043 17.3618 5.01693C17.9837 5.65342 18.4733 6.40695 18.8022 7.23391C19.131 8.06087 19.2927 8.94485 19.2778 9.83472V10.5017C19.1545 12.7057 19.6102 14.9035 20.5995 16.8767C20.6652 16.9906 20.6999 17.1198 20.7 17.2513C20.7 17.3829 20.6655 17.5121 20.5999 17.6261C20.5343 17.74 20.4398 17.8347 20.326 17.9007C20.2123 17.9666 20.0832 18.0014 19.9517 18.0017H5.14353C5.01212 18.0013 4.88314 17.9663 4.76951 17.9003C4.65587 17.8343 4.56158 17.7396 4.49606 17.6256C4.43055 17.5117 4.39613 17.3825 4.39624 17.2511C4.39635 17.1196 4.43099 16.9905 4.4967 16.8767C5.48603 14.9035 5.94169 12.7057 5.81835 10.5017V9.75072Z"
              stroke="#7E7E7E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.54834 18V18.75C9.54834 19.5456 9.86433 20.3087 10.4268 20.8713C10.9893 21.4339 11.7521 21.75 12.5476 21.75C13.343 21.75 14.1059 21.4339 14.6683 20.8713C15.2308 20.3087 15.5468 19.5456 15.5468 18.75V18"
              stroke="#7E7E7E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
            <button>ME</button><a href="/Accounts">Accounts</a>
          </div>
        
      </div>
      <div className={classes.child2}></div>
      <div className={classes.child3}></div>
    </div>
  );
};

export default Header;
