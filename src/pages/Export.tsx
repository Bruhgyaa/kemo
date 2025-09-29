import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Ship, Award, CheckCircle, MapPin, Truck, Shield, Clock, ArrowRight, Sparkles, Target, TrendingUp, Factory } from 'lucide-react';

const Export = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const exportRegions = [
    {
      region: "North America",
      countries: ["United States", "Canada", "Mexico"],
      icon: Globe,
      color: "bg-primary-500",
      stats: "15+ Countries"
    },
    {
      region: "Europe", 
      countries: ["United Kingdom", "Germany", "France", "Netherlands", "Italy"],
      icon: Factory,
      color: "bg-accent-500", 
      stats: "20+ Countries"
    },
    {
      region: "Asia Pacific",
      countries: ["Japan", "South Korea", "Singapore", "Australia", "Thailand"],
      icon: Target,
      color: "bg-secondary-500",
      stats: "18+ Countries"
    },
    {
      region: "Middle East",
      countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman"],
      icon: TrendingUp,
      color: "bg-success-500",
      stats: "12+ Countries"
    }
  ];

  const exportServices = [
    {
      icon: Ship,
      title: "Global Shipping",
      description: "Worldwide shipping with reliable logistics partners and guaranteed on-time delivery",
      gradient: "from-primary-500 to-primary-700",
      bgColor: "bg-primary-50"
    },
    {
      icon: Shield,
      title: "Quality Assurance", 
      description: "International quality standards with comprehensive testing and BIS certification",
      gradient: "from-accent-500 to-accent-700",
      bgColor: "bg-accent-50"
    },
    {
      icon: Award,
      title: "Export Compliance",
      description: "Full compliance with international trade regulations and export documentation",
      gradient: "from-secondary-500 to-secondary-700", 
      bgColor: "bg-secondary-50"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Efficient supply chain management with real-time tracking and updates",
      gradient: "from-success-500 to-success-700",
      bgColor: "bg-success-50"
    }
  ];

  const certifications = [
    "ISO 9001:2015 Quality Management System",
    "BIS Certification (Bureau of Indian Standards)",
    "CE Marking for European Markets",
    "ASTM International Standards Compliance",
    "JIS (Japanese Industrial Standards)",
    "BS (British Standards) Certification",
    "DIN (German Industrial Standards)",
    "Export License from Government of India"
  ];

  const logisticsFeatures = [
    {
      title: "Port Connectivity",
      description: "Direct access to major Indian ports including Kandla, Mumbai, and Chennai for efficient shipping",
      icon: Ship,
      color: "bg-primary-500"
    },
    {
      title: "Export Packaging",
      description: "Export-grade packaging solutions ensuring product safety during long-distance transit",
      icon: Shield,
      color: "bg-accent-500"
    },
    {
      title: "Documentation Support",
      description: "Complete export documentation and customs clearance support for hassle-free shipping",
      icon: Award,
      color: "bg-secondary-500"
    },
    {
      title: "Real-time Tracking",
      description: "Advanced shipment tracking system with delivery status updates and notifications",
      icon: Globe,
      color: "bg-success-500"
    }
  ];

  return (
    <div className="pt-20 page-transition">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container-padding relative">
          <div className="text-center animate-on-scroll">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-8 border border-white/20 shadow-soft">
              <Globe className="h-4 w-4 mr-3 text-accent-400" />
              Global Export Excellence
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold font-display mb-8">
              Worldwide Steel
              <span className="block text-gradient-vibrant">Distribution</span>
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Serving customers across 65+ countries with premium steel products, reliable logistics, 
              and comprehensive export services that meet international standards.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all duration-400 shadow-soft">
                <Globe className="h-10 w-10 text-accent-400" />
              </div>
              <div className="text-4xl font-bold text-accent-400 mb-2">65+</div>
              <div className="text-primary-200 font-medium">Countries Served</div>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all duration-400 shadow-soft">
                <Ship className="h-10 w-10 text-success-400" />
              </div>
              <div className="text-4xl font-bold text-success-400 mb-2">250K+</div>
              <div className="text-primary-200 font-medium">Tons Exported</div>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all duration-400 shadow-soft">
                <Award className="h-10 w-10 text-secondary-400" />
              </div>
              <div className="text-4xl font-bold text-secondary-400 mb-2">800+</div>
              <div className="text-primary-200 font-medium">Global Clients</div>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all duration-400 shadow-soft">
                <CheckCircle className="h-10 w-10 text-accent-400" />
              </div>
              <div className="text-4xl font-bold text-accent-400 mb-2">99.8%</div>
              <div className="text-primary-200 font-medium">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Services */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="text-center mb-20 animate-on-scroll">
            <div className="badge-primary mb-8">
              <Ship className="h-4 w-4 mr-3" />
              Export Services
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-display text-primary-600 mb-8">
              Comprehensive Export Solutions
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Tailored export services designed to meet global market requirements and ensure seamless delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {exportServices.map((service, index) => (
              <div key={index} className="group animate-on-scroll card-vibrant" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="card p-10 text-center h-full">
                  <div className={`w-20 h-20 ${service.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-400 shadow-soft`}>
                    <service.icon className="h-10 w-10 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-primary-600 mb-6">{service.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-padding">
          <div className="text-center mb-20 animate-on-scroll">
            <div className="badge-accent mb-8">
              <Globe className="h-4 w-4 mr-3" />
              Global Reach
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-display text-primary-600 mb-8">
              Serving Six Continents
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Our premium steel products reach customers across major markets worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {exportRegions.map((region, index) => (
              <div key={index} className="group animate-on-scroll card-vibrant" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="card p-8 text-center h-full">
                  <div className={`w-16 h-16 ${region.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-400 shadow-soft`}>
                    <region.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-primary-600 mb-4">{region.region}</h3>
                  <div className="text-accent-600 font-semibold mb-4">{region.stats}</div>
                  <div className="space-y-2">
                    {region.countries.map((country, countryIndex) => (
                      <div key={countryIndex} className="flex items-center justify-center text-sm text-neutral-600">
                        <MapPin className="h-3 w-3 mr-2 text-accent-500" />
                        {country}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center animate-on-scroll">
            <div className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-2xl shadow-medium hover:shadow-glow-primary transition-all duration-400 hover-lift">
              <Sparkles className="h-5 w-5 mr-3" />
              <span className="font-semibold">And many more countries across the globe</span>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Excellence */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="text-center mb-20 animate-on-scroll">
            <div className="badge-secondary mb-8">
              <Truck className="h-4 w-4 mr-3" />
              Logistics Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-display text-primary-600 mb-8">
              Advanced Infrastructure
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              State-of-the-art logistics infrastructure ensuring seamless global delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {logisticsFeatures.map((feature, index) => (
              <div key={index} className="group animate-on-scroll card-vibrant" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="card p-8 hover-lift">
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-400 shadow-soft`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-display text-primary-600 mb-4">{feature.title}</h3>
                      <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Compliance */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="animate-on-scroll">
              <div className="badge-success mb-8">
                <Award className="h-4 w-4 mr-3" />
                International Compliance
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold font-display text-primary-600 mb-8">
                Global Standards & Certifications
              </h2>
              <p className="text-xl text-neutral-600 mb-10 leading-relaxed">
                Our products meet and exceed international quality standards, ensuring compliance 
                with regulations across global markets and building trust with customers worldwide.
              </p>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-4 group animate-on-scroll hover-lift" style={{ animationDelay: `${index * 0.05}s` }}>
                    <div className="w-8 h-8 bg-success-100 rounded-xl flex items-center justify-center group-hover:bg-success-500 transition-all duration-300 shadow-xs">
                      <CheckCircle className="h-5 w-5 text-success-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-neutral-700 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="card p-10 shadow-large hover:shadow-glow-primary transition-all duration-600 hover-lift">
                <div className="text-center mb-10">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-medium">
                    <Ship className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-primary-600 mb-4">Export Process</h3>
                  <p className="text-neutral-600">Streamlined process for global delivery</p>
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-center space-x-6">
                    <div className="w-12 h-12 bg-primary-600 text-white rounded-2xl flex items-center justify-center text-lg font-bold shadow-soft">1</div>
                    <div>
                      <div className="font-bold text-primary-600 mb-2">Order Confirmation</div>
                      <div className="text-sm text-neutral-600">Product specifications and delivery terms finalized</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="w-12 h-12 bg-accent-500 text-white rounded-2xl flex items-center justify-center text-lg font-bold shadow-soft">2</div>
                    <div>
                      <div className="font-bold text-primary-600 mb-2">Quality Testing</div>
                      <div className="text-sm text-neutral-600">Comprehensive quality assurance and certification</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="w-12 h-12 bg-secondary-500 text-white rounded-2xl flex items-center justify-center text-lg font-bold shadow-soft">3</div>
                    <div>
                      <div className="font-bold text-primary-600 mb-2">Export Packaging</div>
                      <div className="text-sm text-neutral-600">Secure packaging for international shipping</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="w-12 h-12 bg-success-500 text-white rounded-2xl flex items-center justify-center text-lg font-bold shadow-soft">4</div>
                    <div>
                      <div className="font-bold text-primary-600 mb-2">Global Delivery</div>
                      <div className="text-sm text-neutral-600">Worldwide shipping with real-time tracking</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
        <div className="container-padding text-center relative">
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-extrabold font-display text-white mb-8">
              Ready to Export KEMO Steel?
            </h2>
            <p className="text-xl text-primary-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join our global network of satisfied customers. Contact our export team for competitive 
              pricing and reliable delivery solutions tailored to your market requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link to="/contact" className="btn-accent group shadow-large hover:shadow-glow">
                <Sparkles className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Request Export Quote
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link to="/products" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary-600 shadow-medium">
                View Export Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Export;
