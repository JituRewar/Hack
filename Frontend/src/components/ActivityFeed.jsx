function ActivityFeed() {
  const activities = [
    "Aman booked Lab 1",
    "Riya joined club",
    "Projector returned"
  ];

  return (
    <div className="mt-6 bg-white p-4 rounded shadow">
      <h2 className="font-bold mb-2">Live Activity</h2>
      {activities.map((act, i) => (
        <p key={i} className="text-sm">{act}</p>
      ))}
    </div>
  );
}

export default ActivityFeed;