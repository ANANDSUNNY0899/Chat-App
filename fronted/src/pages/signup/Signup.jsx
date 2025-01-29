import React from 'react';
import { Link } from 'react-router-dom';  // Ensure to import Link for routing
import GenderCheckbox from './GenderCheckbox';

const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-white/30 backdrop-blur-sm'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Sign Up <span className='text-blue-500'>ChatApp</span>
        </h1>

        <form>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input
              type='text'
              placeholder='Sunny Anand'
              className='w-full input-bordered h-10 bg-gray-700 rounded-sm text-gray-300'
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
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input
              type='password'  // Changed to password for security
              placeholder='Enter Password'
              className='w-full input-bordered h-10 bg-gray-700 rounded-sm text-gray-300'
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input
              type='password'  // Changed to password for security
              placeholder='Confirm Password'
              className='w-full input-bordered h-10 bg-gray-700 rounded-sm text-gray-300'
            />
          </div>

          <GenderCheckbox />

          <Link
            to='/login'
            className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
          >
            Already have an account?
          </Link>

          <div>
            <button className='btn btn-block btn-sm mt-2 border-slate-700 w-full input-bordered h-10 bg-gray-700 rounded-sm'>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
