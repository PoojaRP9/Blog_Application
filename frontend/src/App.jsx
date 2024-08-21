import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link , Routes} from 'react-router-dom';
import { AppProvider } from './AppContext';
const BASEURL = 'http://localhost:8000'
import './App.css'
import Home from './components/home'
import Signup from './components/signup';
import Post from './components/post';
import Profile from './components/Profile';



function App() {
  

  return (
   
   <AppProvider>
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup /> } />
      <Route path="/post" element={<Post /> } />
      <Route path="/profile" element={<Profile /> } />
    </Routes>
  </Router>
  </AppProvider>
   
  )
}

export default App