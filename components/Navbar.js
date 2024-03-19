'use client'

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 bg-transparent text-white w-full">
      <div className="font-bold text-xl">BNRY</div>
      <nav className={`fixed inset-0 bg-black bg-opacity-50 z-10 transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:static md:translate-x-0 md:bg-transparent md:flex md:items-center`}>
        <ul className="space-y-6 text-center mt-24 md:mt-0 md:space-y-0 md:flex md:space-x-4">
          {/* Add `space-x-*` classes to control horizontal spacing */}
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#use-cases" className="nav-link">Use Cases</a></li>
          <li><a href="#governance" className="nav-link">Governance</a></li>
          <li><a href="#learn" className="nav-link">Learn about TBH</a></li>
        </ul>
      </nav>
      <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-2xl md:hidden">
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
};

export default Navbar;
