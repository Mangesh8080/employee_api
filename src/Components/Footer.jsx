import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </p>
      <div className="mt-2 space-x-4">
        <a href="#" className="hover:text-white">Privacy Policy</a>
        <a href="#" className="hover:text-white">Terms of Service</a>
        <a href="#" className="hover:text-white">Contact</a>
      </div>
    </footer>
  );
}

export default Footer;
