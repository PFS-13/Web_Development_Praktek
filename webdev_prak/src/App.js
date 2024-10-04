import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './pages/Home';
import Dramas from './pages/Dramas';
import Countries from './pages/Countries';
import Awards from './pages/Awards';
import Genre from './pages/Genre';
import Actor from './pages/Actor';
import Comment from './pages/Comment';
import User from './pages/User';
import Validate from './pages/validate_drama';
import InputNewDrama from './pages/Input_drama';

const App = () => {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="w-100">
          <Header />
          <div className="container mt-4">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/dramas" element={<Dramas />} />
              <Route path="/validate" element={<Validate />} />
              <Route path="/input_drama" element={<InputNewDrama />} />
              <Route path="/countries" element={<Countries />} />
              <Route path="/awards" element={<Awards />} />
              <Route path="/genre" element={<Genre />} />
              <Route path="/actor" element={<Actor />} />
              <Route path="/comment" element={<Comment />} />
              <Route path="/user" element={<User />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
