import React from 'react'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home'
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Profile from './pages/Profile';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
