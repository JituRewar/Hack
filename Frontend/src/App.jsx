import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Resources from "./pages/Resource";
import Bookings from "./pages/Booking";
import Members from "./pages/Member";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/members" element={<Members />} />
    </Routes>
  );
}

export default App;