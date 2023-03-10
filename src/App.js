import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Post from './pages/PostPage';

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs/:postId' element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
