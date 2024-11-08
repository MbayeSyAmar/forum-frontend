import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/login_register/Register';
import Login from './components/login_register/Login';
import PostsList from './components/PostsList';
import NewPost from './components/NewPost';
import HomePage from './components/home_page/HomePage';


function App() {
  return (
    <Router>
      <div>
    
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts" element={<PostsList />} />
          <Route path="/new-post" element={<NewPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
