import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import StudentDetail from './components/StudentDetails';
import StudentEntries from './components/StudentEntries';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path="/stdetails" element={<StudentDetail />} />
        <Route path="/totentries" element={<StudentEntries />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
