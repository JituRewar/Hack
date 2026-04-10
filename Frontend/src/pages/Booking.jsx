import Layout from "../components/Layout";

function Bookings() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Bookings</h1>

      <div className="bg-white p-4 rounded shadow">
        <p>Lab 1 → Approved</p>
        <p>Projector → Pending</p>
      </div>
    </Layout>
  );
}

export default Bookings;