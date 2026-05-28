function Hero() {
  return (
    <section className="bg-blue-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-5xl font-bold leading-tight">
            Welcome to
            <br />
            P.S SARANGPUR GOPALPUR
          </h2>

          <p className="mt-6 text-lg text-gray-200 leading-8">
            Official Government Primary School Portal for students, teachers,
            and parents.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-white/10 p-4 rounded-2xl">
              <h3 className="text-yellow-300 font-bold">Academic Year</h3>

              <p>2026-27</p>
            </div>

            <div className="bg-white/10 p-4 rounded-2xl">
              <h3 className="text-yellow-300 font-bold">Classes</h3>

              <p>1 to 5</p>
            </div>

            <div className="bg-white/10 p-4 rounded-2xl">
              <h3 className="text-yellow-300 font-bold">Category</h3>

              <p>Primary School</p>
            </div>

            <div className="bg-white/10 p-4 rounded-2xl">
              <h3 className="text-yellow-300 font-bold">Medium</h3>

              <p>Hindi & Sanskrit</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-white text-black rounded-3xl p-8 shadow-2xl">
          <h3 className="text-3xl font-bold text-blue-900">School Profile</h3>

          <div className="mt-6 space-y-4 text-gray-700">
            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">UDISE Code</span>
              <span>10191806501</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">School Type</span>
              <span>Co-educational</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">Management</span>
              <span>Department of Education</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">Principal</span>
              <span>Pramod Paswan</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">Status</span>
              <span>Operational</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">Session</span>
              <span>2026-27</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">Language Group</span>
              <span>Hindi & English</span>
            </div>
          </div>

          <button className="mt-8 w-full bg-blue-900 text-white py-3 rounded-2xl hover:bg-blue-800 transition">
            Explore School
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
