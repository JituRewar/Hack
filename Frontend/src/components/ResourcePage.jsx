function ResourceCard({ resource }) {
  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="font-bold">{resource.name}</h2>
      <p>{resource.type}</p>

      <button className="mt-2 bg-green-500 text-white px-3 py-1 rounded">
        Book
      </button>
    </div>
  );
}

export default ResourceCard;