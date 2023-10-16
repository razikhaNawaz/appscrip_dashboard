import React from "react";
import { Link } from "react-router-dom";
import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.parent}>
      <div className={classes.child1}>
        <p>Dashboard</p>
        <p>Patients</p>
        <p>Human Resources</p>
        <p>Clinical</p>
        <p>Compliance</p>
        <p>Billing</p>
        <p>Reports</p>
      </div>
      <div className={classes.child2}>
        <h1>Tasks</h1>
        <Link to="/UpcomingTasks">Upcoming Tasks</Link><span />
        <Link to="/CompletedTasks">Completed Tasks</Link>
      </div>
    </div>
  );
};

export default Header;

