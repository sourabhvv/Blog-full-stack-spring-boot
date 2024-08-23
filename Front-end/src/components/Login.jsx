import axios from 'axios';
import { useState, React } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    await axios.post("http://localhost:8005/auth/login", {
      password: password,
      email: email,
    }).then(function(response) {
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        window.location.href = '/dashboard';
      }
    }).catch(function(error) {
      console.log(error);
      toast.error('😟 Invalid credentials', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
  }

  return (
    <div className='bg-gray-100 min-h-screen flex items-center justify-center p-4'>
      <div className='bg-white rounded-lg shadow-lg p-8 max-w-md w-full'>
        <ToastContainer />
        <h2 className='text-2xl font-bold text-center text-gray-900 mb-6'>Welcome Back!</h2>
        <form className='space-y-6' method="POST" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
              className='mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            />
          </div>

          <div>
            <label htmlFor="password" className='block text-sm font-medium text-gray-700'>Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              className='mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            />
          </div>

          <div className='flex justify-between items-center'>
            <Link to="#" className='text-sm text-blue-600 hover:text-blue-500'>Forgot password?</Link>
          </div>

          <button
            type="submit"
            className='w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
          >
            Sign In
          </button>

          <p className='text-center text-sm text-gray-600'>
            Don't have an account? <Link to="/SignUp" className='text-blue-600 hover:underline'>Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
