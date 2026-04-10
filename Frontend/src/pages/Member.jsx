import Layout from "../components/Layout";

function Members() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Members</h1>

      <div className="bg-white p-4 shadow rounded">
        <p>Aman - Admin</p>
        <p>Riya - Member</p>
      </div>
    </Layout>
  );
}

export default Members;