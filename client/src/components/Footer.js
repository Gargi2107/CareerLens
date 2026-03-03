function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20 px-5 py-10">
      <div className="max-w-6xl mx-auto text-center">

        {/* Brand */}
        <p className="text-xl font-bold mb-4">
          CareerLens
        </p>

        {/* Links */}
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="/"
            className="text-gray-300 text-sm hover:text-white transition"
          >
            About
          </a>
          <a
            href="/"
            className="text-gray-300 text-sm hover:text-white transition"
          >
            Contact
          </a>
          <a
            href="/"
            className="text-gray-300 text-sm hover:text-white transition"
          >
            Privacy Policy
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} CareerLens. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;