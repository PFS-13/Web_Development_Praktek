import Header from '@/Components/Dashboard/Header';
import Sidebar from '@/Components/Dashboard/Sidebar';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Route, Router, Routes } from 'react-router-dom';
export default function Dashboard() {

    return (
        <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="w-100">
          <Header />
          <div className="container mt-4">
            <Routes>
              {/* <Route exact path="/" element={<Home />} /> */}
              {/* <Route path="/dramas" element={<Dramas />} />
              <Route path="/validate" element={<Validate />} /> */}
              {/* <Route path="/input_drama" element={<InputNewDrama />} />
              <Route path="/countries" element={<Countries />} />
              <Route path="/awards" element={<Awards />} />
              <Route path="/genre" element={<Genre />} />
              <Route path="/actor" element={<Actor />} />
              <Route path="/comment" element={<Comment />} />
              <Route path="/user" element={<User />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
    )
}
