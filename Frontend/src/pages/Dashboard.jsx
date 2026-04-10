import Layout from "../components/Layout";
import ActivityFeed from "../components/ActivityFeed";

function Dashboard() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow rounded">👥 Members: 50</div>
        <div className="bg-white p-4 shadow rounded">📦 Resources: 20</div>
        <div className="bg-white p-4 shadow rounded">📅 Bookings: 10</div>
      </div>

      <ActivityFeed />
    </Layout>
  );
}

export default Dashboard;