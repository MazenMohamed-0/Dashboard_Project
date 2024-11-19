import React, { useState, useEffect } from 'react'; 
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import DashboardPage from './pages/DashboardPage';
import UserListPage from './pages/UserListPage'; 
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import SignUpPage from './pages/SignUpPage';
import EditPage from './pages/EditPage';
import ProfilePage2 from './pages/ProfilePage2';

import axios from 'axios';

function App() {
  const [userlists, setUserlists] = useState([]); 

  useEffect(() => {
    axios.get('http://localhost:3001/getUsers') 
      .then(response => setUserlists(response.data)) 
      .catch(error => console.error("There was an error fetching the users!", error));
  }, []);

  return (
    <div className="App">
      <Router>
        <div className="app-container">
          <div className="content">
            <Routes>
              <Route path="/" element={<Navigate to="/UserListPage" />} />
              <Route path="/Dashboard" element={<DashboardPage />} />
              <Route path="/UserListPage" element={<UserListPage userlists={userlists} />} /> 
              <Route path="/LoginPage" element={<LoginPage />} />
              <Route path="/ProfilePage" element={<ProfilePage />} />
              <Route path="/ProfilePage2" element={<ProfilePage2 />} />
              <Route path="/SignUpPage" element={<SignUpPage />} />
              <Route path='/EditPage' element={<EditPage/>}/>
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
