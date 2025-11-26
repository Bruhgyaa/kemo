import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ArrowRight, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Export', href: '/export' },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${isScrolled
        ? 'bg-white/95 backdrop-blur-lg shadow-large border-b border-neutral-100/50'
        : 'bg-white/95 backdrop-blur-lg shadow-large border-b border-neutral-100/50'
      }`}>
      {/* Main navigation */}
      <nav className="container-padding">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="w-20 h-20 flex items-center justify-center">
                <img src="/assets/logo.png" alt="Logo Kemo Steels" />
              </div>
            </div>
            {/* <div className="hidden sm:block">
              <div className="text-2xl font-bold font-display text-primary-600 group-hover:text-primary-700 transition-colors duration-300">
                KEMO STEEL
              </div>
              <div className="text-sm font-medium text-steel-600 tracking-wider opacity-80">INDUSTRIES</div>
            </div> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 hover-lift ${isActive(item.href)
                    ? 'text-primary-600 bg-primary-50 shadow-xs border border-primary-100'
                    : 'text-neutral-700 hover:text-primary-600 hover:bg-neutral-50'
                  }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent-500 rounded-full shadow-sm"></div>
                )}
              </Link>
            ))}

          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-xl transition-all duration-300 hover-lift"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden animate-fade-in-up">
            <div className="py-6 space-y-2 bg-white/95 backdrop-blur-lg border-t border-neutral-100 rounded-b-2xl shadow-large">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-6 py-4 text-base font-semibold rounded-xl transition-all duration-300 hover-lift ${isActive(item.href)
                      ? 'text-primary-600 bg-primary-50 shadow-xs border border-primary-100'
                      : 'text-neutral-700 hover:text-primary-600 hover:bg-neutral-50'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
