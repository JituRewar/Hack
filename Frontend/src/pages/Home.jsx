import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Navbar */}
      <div className="flex justify-between items-center p-5 bg-white shadow">
        <h1 className="text-xl font-bold">CampusSphere</h1>

        <div className="space-x-4">
          <Link to="/login" className="text-blue-500">Login</Link>
          <Link to="/signup" className="bg-blue-500 text-white px-4 py-1 rounded">
            Signup
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mt-20 px-4">
        <h2 className="text-4xl font-bold mb-4">
          Manage Your Community Smartly 🚀
        </h2>

        <p className="text-gray-600 mb-6 max-w-xl">
          CampusSphere helps you manage members, resources, and communication
          in one powerful platform.
        </p>

        <Link
          to="/signup"
          className="bg-blue-500 text-white px-6 py-3 rounded text-lg"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default Home;