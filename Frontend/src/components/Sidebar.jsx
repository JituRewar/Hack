import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5">
      <h2 className="text-xl font-bold mb-6">CampusSphere</h2>

      <ul className="space-y-4">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/bookings">Bookings</Link></li>
        <li><Link to="/members">Members</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;