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


// import { Route, Routes } from 'react-router-dom';
// import React from 'react';
// import './App.css';
// import Login from './pages/login/login';
// // import Signup from './pages/signup/signup';
// // import signup from './pages/signup/SignUp';
// import Home from './pages/home/home'; 
// import { Toaster } from 'react-hot-toast';
// import Signup from './pages/signup/Signup';
// import { useAuthContext } from './context/AuthContext';

// function App() {
//   const {authUser}= useAuthContext();
//   return (
//     <div className="p-4 h-screen flex items-center justify-center">
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={authUser ? <Navigate to='/' /> :<signUp />} />
//       </Routes>
//       <Toaster />
//     </div>
//   );
// }

// export default App;







// import { Route, Routes, Navigate } from 'react-router-dom';
// import React from 'react';
// import './App.css';
// import Login from './pages/login/login';
// import Signup from './pages/signup/Signup';
// import Home from './pages/home/home'; 
// import { Toaster } from 'react-hot-toast';
// import { useAuthContext } from './context/AuthContext';

// function App() {
//   const { authUser, loading } = useAuthContext();

//   if (loading) return <p>Loading...</p>;  // ✅ Prevent redirect flickering

//   return (
//     <div className="p-4 h-screen flex items-center justify-center">
//       <Routes>
//         <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" />} />
//         <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
//         <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup />} />
//       </Routes>
//       <Toaster />
//     </div>
//   );
// }

// export default App;






import { Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import './App.css';
import Login from './pages/login/Login';
import Home from './pages/home/home';
import Signup from './pages/signup/Signup';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';

function App() {
  const { authUser } = useAuthContext();

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
      <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" />} />
      <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
     <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
