// import React from 'react';
// import { Link } from 'react-router-dom';  // Ensure to import Link for routing
// import GenderCheckbox from './GenderCheckbox';
// import { useState } from 'react';
// const Signup = () => {
//   const [inputs, setInputs] = useState({
//     fullName: '',
//     username: '',
//     password: '',
//     confirmPassword:'',
//     gender: ''
//   })


//   const handleCheckboxChange = (gender) => {
//     setInputs({...inputs,gender})

//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(inputs);
//   };


//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-white/30 backdrop-blur-sm'>
//         <h1 className='text-3xl font-semibold text-center text-gray-300'>
//           Sign Up <span className='text-blue-500'>ChatApp</span>
//         </h1>

//         <form onSubmit={handleSubmit}>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Full Name</span>
//             </label>
//             <input
//               type='text'
//               placeholder='Sunny Anand'
//               className='w-full input-bordered h-10 bg-gray-700 rounded-sm text-gray-300'
//               value={inputs.fullName}
//               onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
//             />
//           </div>

//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Username</span>
//             </label>
//             <input
//               type='text'
//               placeholder='Sunnyanand'
//               className='w-full input-bordered h-10 bg-gray-700 rounded-sm text-gray-300'
//               value={inputs.username}
//               onChange={(e) => setInputs({...inputs, username: e.target.value})}
//             />
//           </div>

//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Password</span>
//             </label>
//             <input
//               type='password'  // Changed to password for security
//               placeholder='Enter Password'
//               className='w-full input-bordered h-10 bg-gray-700 rounded-sm text-gray-300'
//               value={inputs.password}
//               onChange={(e) => setInputs({...inputs, password: e.target.value})}
//             />
//           </div>

//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Confirm Password</span>
//             </label>
//             <input
//               type='password'  // Changed to password for security
//               placeholder='Confirm Password'
//               className='w-full input-bordered h-10 bg-gray-700 rounded-sm text-gray-300'
//               value={inputs.confirmPassword}
//               onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
//             />
//           </div>

//           <GenderCheckbox onCheckboxChange = { handleCheckboxChange} selectGender={inputs.gender}/>

//           <Link
//             to='/login'
//             className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
//           >
//             Already have an account?
//           </Link>

//           <div>
//             <button className='btn btn-block btn-sm mt-2 border-slate-700 w-full input-bordered h-10 bg-gray-700 rounded-sm'>
//               Sign Up
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GenderCheckbox from './GenderCheckbox';
import useSignup from '../../hooks/useSignup';

 const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });

  const {loading, signup}= useSignup()


  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(inputs)
    // console.log(inputs);
  };

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-white/30 backdrop-blur-sm'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Sign Up <span className='text-blue-500'>ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input
              type='text'
              placeholder='Sunny Anand'
              className='w-full input-bordered h-10 bg-gray-700 rounded-sm text-gray-300'
              value={inputs.fullName}
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input
              type='text'
              placeholder='Sunnyanand'
              className='w-full input-bordered h-10 bg-gray-700 rounded-sm text-gray-300'
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              className='w-full input-bordered h-10 bg-gray-700 rounded-sm text-gray-300'
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input
              type='password'
              placeholder='Confirm Password'
              className='w-full input-bordered h-10 bg-gray-700 rounded-sm text-gray-300'
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            />
          </div>

          {/* Gender Selection */}
          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

          <Link
            to='/login'
            className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
          >
            Already have an account?
          </Link>

          <div>
            <button type="submit" className='btn btn-block btn-sm mt-2 border-slate-700 w-full input-bordered h-10 bg-gray-700 rounded-sm'>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
