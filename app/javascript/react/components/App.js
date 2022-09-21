import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sample from "./Sample";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Sample />} />
      </Routes>
    </Router>
  );
};

export default App;
