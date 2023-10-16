import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './Components/Header';

import Sidebar from './Components/Sidebar'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />
        {/* <Routes> */}
        {/* <Route path="/UpcomingTasks" element={<UpcomingTasks />} />
          <Route path="/CompletedTasks" element={<CompletedTasks />} />
          */}
          {/* Define your other routes here */}
        {/* </Routes> */}
      </div>
    </Router>
  );
};

export default App;


