// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import Login from './pages/login/login';
// import Signup from './pages/signup/signup';
// import Home from './pages/home/home';


// function App() {

//   return (
    
//     <div className= 'p4 h-screen flex items-center justify-center'>
//      <Routes>
//       <Route path='/' element= {<Home />} />
//       <Route path='/login' element= {<Login />} />
//       <Route path='/signup' element= {<Signup />} />

//      </Routes>
//     </div>
  
//   );
// }

// export default App;


import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import Home from './pages/home/home';

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
