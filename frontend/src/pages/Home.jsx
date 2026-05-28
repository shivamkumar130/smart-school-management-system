import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsCards from "../components/StatsCards";
import NoticeBoard from "../components/NoticeBoard";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-gray-100">

      <Header />

      <Navbar />

      <Hero />

      <div className="py-10">
        <StatsCards />
      </div>

      <div className="py-10 bg-white">
        <NoticeBoard />
      </div>

      <Footer />

    </div>
  );
}

export default Home;