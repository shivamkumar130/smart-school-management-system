import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Facilities() {

  const facilities = [
    "Bihar Government Scholarship",
    "Sports Facilities",
    "Mid-Day Meal",
    "Clean Drinking Water",
    "Free Book Distribution",
    "Medical Checkup",
  ];

  return (
    <>
      <Header />
      <Navbar />

      <section className="bg-blue-900 text-white py-16 min-h-screen">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            School Facilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center hover:bg-white/20 transition"
              >

                <h3 className="text-2xl font-semibold">
                  {facility}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Facilities;