import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link , Routes} from 'react-router-dom';

const BASEURL = 'http://localhost:8000'
import './App.css'
import Home from './components/home'
import Signup from './components/signup';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup /> } />
    </Routes>
  </Router>,
    </>
  )
}

export default App