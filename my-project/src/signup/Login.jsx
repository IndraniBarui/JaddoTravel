import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { setAuthData } from '../redux/AuthSlice';
// import { useDispatch } from "react-redux";

function Login() {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.get(`https://petstore.swagger.io/v2/user/login`, {
        params: {
          username: data.username,
          password: data.password
        }
      });

      alert('Login successful!');
      localStorage.setItem("user", JSON.stringify(data));
      // dispatch(setAuthData(JSON.stringify(data)));
      navigate("/home");
      console.log(res.data, "tttttttttttt");
    } catch (err) {
      console.error('Login failed:', err);
      alert('Login failed!');
    }
  };

  const handleSignUp = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h4 className="text-2xl font-semibold text-center mb-6">Login</h4>

        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-medium mb-1">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200 mb-3"
        >
          Submit
        </button>

        <button
          onClick={handleSignUp}
          className="w-full border border-blue-600 text-blue-600 py-2 rounded-md hover:bg-blue-50 transition duration-200"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Login;
