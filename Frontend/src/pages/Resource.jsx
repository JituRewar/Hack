import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import ResourceCard from "../components/ResourcePage";
import API from "../services/api";

function Resources() {
  const [resources, setResources] = useState([]);

  const addResource = async () => {
  await API.post("/resources", {
    name: "New Lab",
    type: "Room",
    description: "Test Lab"
  });

  alert("Resource Added");
};

  useEffect(() => {
    const fetchResources = async () => {
      const res = await API.get("/resources");
      setResources(res.data);
    };

    fetchResources();
  }, []);

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Resources</h1>

      <div className="grid grid-cols-3 gap-4">
        {resources.map((res, i) => (
          <ResourceCard key={i} resource={res} />
        ))}
      </div>
    </Layout>
  );
}

export default Resources;