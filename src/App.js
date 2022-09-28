import React from "react";
import { Header } from "./components/header/header.component";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from "./pages/homepage/homepage.component";
import Dashboards from "./pages/dashboards/Dashboards";
import Utilities from "./pages/utlities/Utilities";


import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      
      <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/dashboards" element={<Dashboards />} />
            <Route path="/utilities" element={<Utilities />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
