import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import classes from './Header.module.css';
import UpcomingTasks from "./UpcomingTasks";
import CompletedTasks from "./CompletedTasks";

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
        <Link to="/UpcomingTasks">UpcomingTasks</Link>
        <Link to="/CompletedTasks">Completed Tasks</Link>
        <Routes>
        <Route path="/UpcomingTasks" element={<UpcomingTasks />} />
          <Route path="/CompletedTasks" element={<CompletedTasks />} />
          </Routes>
      </div>
    </div>
  );
};

export default Header;

