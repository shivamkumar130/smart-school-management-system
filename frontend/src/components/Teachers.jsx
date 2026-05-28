function Teachers() {

  const teachers = [
    {
      name: "Pramod Paswan",
      role: "Head Teacher / Principal",
      qualification: "B.A + Teacher Training",
    },
    {
      name: "Vikash Kumar",
      role: "Primary Teacher",
      qualification: "B.Sc + B.Ed",
    },
    {
    name: "Shivlal Sah",
    role: "Primary Teacher",
    qualification: "M.A + D.El.Ed",
    },
    {
      name: "Prashant Kumar Jha",
      role: "Prakhand Teacher",
      qualification: "MCA + D.El.Ed",
    },
    {
      name: "Hajari Sah",
      role: "Primary Teacher",
      qualification: "B.A + Teacher Training",
    },
    {
      name: "Bebi Kumari",
      role: "Primary Teacher",
      qualification: "M.A + D.El.Ed",
    },
    {
      name: "Geeta Yadav",
      role: "Primary Teacher",
      qualification: "B.A + D.El.Ed",
    },
  ];

  return (
    <section className="bg-white py-16">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
          Teacher Details
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Qualified teaching staff of P.S SARANGPUR GOPALPUR
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition"
            >

              {/* Avatar */}
              <div className="w-24 h-24 bg-blue-900 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto">

                {teacher.name.charAt(0)}

              </div>

              {/* Details */}
              <div className="text-center mt-6">

                <h3 className="text-2xl font-bold text-blue-900">
                  {teacher.name}
                </h3>

                <p className="mt-2 text-gray-700 font-medium">
                  {teacher.role}
                </p>

                <p className="mt-3 text-gray-600">
                  {teacher.qualification}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Teachers;