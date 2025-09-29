import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, Award, Shield, Globe, Sparkles, Star } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Export', href: '/export' },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Contact', href: '/contact' },
  ];

  const products = [
    'Steel Billets',
    'TMT Bars 550D',
    'CRS TMT Bars',
    'Industrial Grade Steel',
  ];

  const certifications = [
    { icon: Award, text: 'BIS Certified', color: 'bg-accent-500' },
    { icon: Shield, text: 'ISO 9001:2015', color: 'bg-accent-500' },
    { icon: Globe, text: 'Export Quality', color: 'bg-accent-500' },
  ];

  return (
    <footer className="bg-primary-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-accent-500 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary-500 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-primary-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative">
        <div className="container-padding py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-medium hover:shadow-glow-primary transition-all duration-400 hover:scale-105">
                  <span className="text-primary-600 font-bold text-2xl font-display">K</span>
                </div>
                <div>
                  <div className="text-2xl font-bold font-display">KEMO STEEL</div>
                  <div className="text-sm text-primary-200 font-medium tracking-wider">INDUSTRIES</div>
                </div>
              </div>
              <p className="text-primary-100 leading-relaxed text-base">
                Leading manufacturer of premium steel billets and TMT bars, building the future with 
                German Thermex® technology and uncompromising quality standards.
              </p>
              
              {/* Certifications */}
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-4 group hover-lift">
                    <div className={`w-10 h-10 ${cert.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-soft`}>
                      <cert.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-primary-100 font-medium">{cert.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl text-accent-400 font-bold font-display mb-8 flex items-center">
                <Sparkles className="h-5 w-5 mr-3 text-accent-400" />
                Quick Links
              </h3>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-primary-200 hover:text-accent-400 transition-all duration-300 flex items-center group hover-lift"
                    >
                      <ArrowRight className="h-4 w-4 mr-3 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-2 transition-transform duration-300">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-xl text-accent-400 font-bold font-display mb-8 flex items-center">
                <Star className="h-5 w-5 mr-3 text-secondary-400" />
                Our Products
              </h3>
              <ul className="space-y-4 mb-8">
                {products.map((product, index) => (
                  <li key={index} className="text-primary-200 flex items-center hover-lift">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mr-4 shadow-sm"></div>
                    {product}
                  </li>
                ))}
              </ul>
              
              
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl text-accent-400 font-bold font-display mb-8 flex items-center">
                <Phone className="h-5 w-5 mr-3 text-success-400" />
                Contact Info
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group hover-lift">
                  <div className="w-12 h-12 bg-success-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-success-400 transition-all duration-300 shadow-soft">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-primary-100">
                    <div className="font-semibold mb-2">Our Location</div>
                    <div className="text-sm leading-relaxed opacity-90">
                      Survey No. 5/P, V: Budharmora,<br />
                      Bhuj, Gujarat 370115
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group hover-lift">
                  <div className="w-12 h-12 bg-success-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-success-400 transition-all duration-300 shadow-soft">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary-100">+91 7003357003</div>
                    <div className="text-sm text-primary-200 opacity-90">Mon - Sat: 9:00 AM - 6:00 PM</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group hover-lift">
                  <div className="w-12 h-12 bg-success-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-success-400 transition-all duration-300 shadow-soft">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary-100">marketing@kemosteels.com</div>
                    <div className="text-sm text-primary-200 opacity-90">Get instant quotes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-500/30">
          <div className="container-padding py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="text-primary-200 text-sm opacity-90">
                © 2024 KEMO STEEL INDUSTRIES. All rights reserved. | Designed with precision and excellence.
              </div>
              <div className="flex items-center space-x-8 text-sm">
                <Link to="#" className="text-primary-200 hover:text-accent-400 transition-colors duration-300 hover-lift">
                  Privacy Policy
                </Link>
                <Link to="#" className="text-primary-200 hover:text-accent-400 transition-colors duration-300 hover-lift">
                  Terms of Service
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
