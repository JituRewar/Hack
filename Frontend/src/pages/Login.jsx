import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-bold mb-4">CampusSphere Login</h2>

        <input className="w-full border p-2 mb-3" placeholder="Email" />
        <input className="w-full border p-2 mb-3" placeholder="Password" type="password" />

        <button
          onClick={() => navigate("/dashboard")}
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;