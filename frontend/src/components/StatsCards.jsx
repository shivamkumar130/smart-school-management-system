function StatsCards() {
  const stats = [
    {
      title: "Total Students",
      value: "76+",
    },
    {
      title: "Teachers",
      value: "7",
    },
    {
      title: "Classes",
      value: "1 to 5",
    },
    {
      title: "Academic Year",
      value: "2026-27",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          School Statistics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition"
            >
              <h2 className="text-5xl font-bold text-blue-900">{item.value}</h2>

              <p className="mt-4 text-xl text-gray-600 font-medium">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsCards;
