function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* School Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">P.S SARANGPUR GOPALPUR</h2>

          <p className="text-gray-300 leading-7">
            Government Primary School Portal under Department of Education,
            Bihar.
          </p>

          <p className="mt-4 text-gray-400">UDISE CODE: 10191806501</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>

          <ul className="space-y-3 text-gray-300">
            <li>Home</li>
            <li>About School</li>
            <li>Academics</li>
            <li>Teachers</li>
            <li>Notice Board</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact</h2>

          <ul className="space-y-3 text-gray-300">
            <li>State: Bihar</li>
            <li>District: Samastipur</li>
            <li>Block: Morwa</li>
            <li>School Category: Primary</li>
            <li>Management: Department of Education</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-gray-400">
        © 2026 P.S SARANGPUR GOPALPUR | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
