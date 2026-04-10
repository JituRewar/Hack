import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const res = await API.post("/auth/register", {
        name,
        email,
        password
      });

      alert("Signup Successful ✅");

      // redirect to login
      navigate("/login");

    } catch (err) {
      console.log(err);
      alert("Signup Failed ❌");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 shadow rounded w-80">
        <h2 className="text-xl font-bold mb-4">Signup</h2>

        <input
          className="w-full border p-2 mb-3"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full border p-2 mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full border p-2 mb-3"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Signup
        </button>
      </div>
    </div>
  );
}

export default Signup;