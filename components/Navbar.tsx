
import React, { useState, useEffect } from 'react';
import { NAV_LINKS, RESUME_URL, ExternalLinkIcon } from '../constants';
import Button from './ui/Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center max-w-7xl">
        <div className="flex-1"></div>
        <nav className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-medium ${isScrolled ? 'text-slate-700 hover:text-blue-700' : 'text-slate-200 hover:text-sky-300'} transition-colors`}
            >
              {link.label}
            </a>
          ))}
          <Button
            asLink
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant={isScrolled ? 'outline' : 'primary'}
            size="sm"
            className={!isScrolled ? 'border border-slate-300 text-slate-100 hover:bg-slate-100 hover:text-blue-700 !bg-sky-600 hover:!bg-sky-700' : ''}
          >
            Resume <ExternalLinkIcon className="w-4 h-4 ml-1.5" />
          </Button>
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className={`focus:outline-none ${isScrolled ? 'text-slate-700' : 'text-slate-100'}`}
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 right-0 ${isScrolled ? 'bg-white' : 'bg-slate-800'} shadow-lg py-2`}>
          <nav className="flex flex-col items-center space-y-3 py-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-medium ${isScrolled ? 'text-slate-700 hover:text-blue-700' : 'text-slate-200 hover:text-sky-300'} transition-colors py-1`}
              >
                {link.label}
              </a>
            ))}
            <Button
              asLink
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant={isScrolled ? 'outline' : 'primary'}
              size="sm"
              className={`mt-2 ${!isScrolled ? 'border border-slate-300 text-slate-100 hover:bg-slate-100 hover:text-blue-700 !bg-sky-600 hover:!bg-sky-700' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Resume <ExternalLinkIcon className="w-4 h-4 ml-1.5" />
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;