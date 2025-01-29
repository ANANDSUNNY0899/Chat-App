import React from 'react';
import { Link } from 'react-router-dom'; // Don't forget to import Link

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-white/30 backdrop-blur-sm'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Login
          <span className='text-blue-500'> ChatApp</span>
        </h1>

        <form>
          <div>
            <label className='label p-5'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input
              type='text'
              placeholder='Enter username'
              className='w-full input-border h-10 bg-gray-700 rounded-sm'
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Enter Password</span>
            </label>
            <input
              type='password'  // Change to password field for security
              placeholder='Enter password'
              className='w-full input-border h-10 bg-gray-700 rounded-sm'
            />
          </div>

          <Link to='/signup' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
            {"Don't"} have an account?
          </Link>

          <button className='btn btn-block btn-sm mt-2 w-full input-border h-10 bg-gray-700 rounded-sm'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
