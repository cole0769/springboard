import React from "react";
import { Header } from "./components/header/header.component";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from "./pages/homepage/homepage.component";
import Dashboards from "./pages/dashboards/Dashboards";
import Utilities from "./pages/utlities/Utilities";


import './App.css';
// import ClaimPage from "./pages/utlities/claims/claim.page";
// import ClaimSearchResults from "./pages/utlities/claims/claim.component";
import ClaimSearch from "./pages/utlities/cs/cs.page";
// import SiblingClaimTable from "./pages/utlities/cs/sibling.table.component";


function App() {
  return (
    <div className="App">
      <Header />
      
      <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/dashboards" element={<Dashboards />} />
            <Route path="/utilities" element={<Utilities />} />
            {/* <Route path="/utilities/hwclaim" element={<ClaimSearchResults />} /> */}
            <Route path="/utilities/cs" element={<ClaimSearch />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
