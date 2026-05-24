import logo from "../assets/school-logo.png";

function Header() {
  return (
    <header className="bg-white shadow-md border-b">
      {/* Top Info Bar */}
      <div className="bg-blue-950 text-white text-sm py-2 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-between">
          <p>State: BIHAR</p>

          <p>District: SAMASTIPUR (1019)</p>

          <p>Block: MORWA (101918)</p>

          <p>UDISE CODE: 10191806501</p>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center gap-5">
          <img
            src={logo}
            alt="School Logo"
            className="w-20 h-20 rounded-full border-4 border-blue-900"
          />

          <div>
            <h1 className="text-3xl font-bold text-blue-900">
              P.S SARANGPUR GOPALPUR
            </h1>

            <p className="text-gray-700 mt-1">
              Government Primary School Portal
            </p>

            <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600">
              <span>Category: Primary</span>

              <span>Classes: 1 - 5</span>

              <span>Management: Department of Education</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
      </div>
    </header>
  );
}

export default Header;
