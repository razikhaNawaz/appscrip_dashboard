import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Header from './Components/Header';
import UpcomingTasks from './Components/UpcomingTasks'; // Import UpcomingTasks component
import CompletedTasks from './Components/CompletedTasks'; // Import IncomingTasks component
import Sidebar from './Components/Sidebar'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/UpcomingTasks" component={UpcomingTasks} />
          <Route path="/CompletedTasks" component={<CompletedTasks />} />
          {/* Define your other routes here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;


