import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </p>
      <div className="mt-2 space-x-4">
        <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
        <Link to="/terms" className="hover:text-white">Terms of Service</Link>
        <Link to="/contact" className="hover:text-white">Contact</Link>
      </div>
    </footer>
  );
}

export default Footer;
