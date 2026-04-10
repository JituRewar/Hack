import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Signup() {
  const navigate = useNavigate();

  // State for form fields
  const [formData, setFormData] = useState({
    username: "", // Changed from 'name' to 'username' to match typical backend naming
    email: "",
    password: "",
  });
  
  const [loading, setLoading] = useState(false);

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    const { username, email, password } = formData;

    // Basic validation
    if (!username || !email || !password) {
      return alert("Please fill all fields");
    }

    setLoading(true);
    try {
      // Endpoint: http://localhost:8000/api/v1/users/register
      // BaseURL in api.js handles "/api/v1", so we use "/users/register"
      const res = await API.post("/users/register", formData);

      if (res.status === 201 || res.status === 200) {
        alert("Signup Successful ✅");
        navigate("/login");
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Signup Failed ❌";
      console.error("Backend Error:", err.response?.data);
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 shadow-lg rounded-xl w-80">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Signup</h2>

        <input
          name="username"
          className="w-full border border-gray-300 p-2 mb-3 rounded focus:outline-blue-500"
          placeholder="Username"
          onChange={handleChange}
        />

        <input
          name="email"
          type="email"
          className="w-full border border-gray-300 p-2 mb-3 rounded focus:outline-blue-500"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          className="w-full border border-gray-300 p-2 mb-6 rounded focus:outline-blue-500"
          placeholder="Password"
          onChange={handleChange}
        />

        <button
          onClick={handleSignup}
          disabled={loading}
          className={`w-full text-white p-2 rounded font-semibold transition ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Registering..." : "Signup"}
        </button>
        
        <p className="text-sm text-center mt-4 text-gray-600">
          Already have an account? 
          <span 
            className="text-blue-500 cursor-pointer ml-1" 
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;