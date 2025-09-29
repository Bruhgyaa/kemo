import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, Shield, CheckCircle, Globe, Zap, Star, FileCheck, Users, ArrowRight, Sparkles, Target, TrendingUp, Factory } from 'lucide-react';

const Certifications = () => {
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

  const certifications = [
    {
      icon: Award,
      title: "BIS Certification",
      subtitle: "Bureau of Indian Standards",
      description: "Official certification ensuring compliance with Indian quality standards for steel products",
      details: [
        "IS 1786:2008 for TMT Bars compliance",
        "IS 2830:2012 for Steel Billets standards",
        "Regular quality audits and monitoring",
        "Compliance with Indian construction standards"
      ],
      color: "bg-primary-500",
      bgColor: "bg-primary-50",
      borderColor: "border-primary-200"
    },
    {
      icon: Globe,
      title: "ISO 9001:2015",
      subtitle: "Quality Management System",
      description: "International standard for quality management systems ensuring consistent product quality",
      details: [
        "Quality management system implementation",
        "Continuous improvement processes",
        "Customer satisfaction focus",
        "Regular third-party audits and assessments"
      ],
      color: "bg-accent-500",
      bgColor: "bg-accent-50",
      borderColor: "border-accent-200"
    },
    {
      icon: Shield,
      title: "ISO 14001:2015",
      subtitle: "Environmental Management",
      description: "Environmental management system certification for sustainable manufacturing practices",
      details: [
        "Environmental impact reduction strategies",
        "Sustainable manufacturing practices",
        "Waste management optimization",
        "Energy efficiency improvements"
      ],
      color: "bg-secondary-500",
      bgColor: "bg-secondary-50",
      borderColor: "border-secondary-200"
    },
    {
      icon: Users,
      title: "ISO 45001:2018",
      subtitle: "Occupational Health & Safety",
      description: "Occupational health and safety management system ensuring worker protection",
      details: [
        "Comprehensive worker safety protocols",
        "Risk assessment and management procedures",
        "Safety training and awareness programs",
        "Incident prevention and response measures"
      ],
      color: "bg-success-500",
      bgColor: "bg-success-50",
      borderColor: "border-success-200"
    },
    {
      icon: Zap,
      title: "German Thermex®",
      subtitle: "Technology Certification",
      description: "Advanced German technology certification for superior steel manufacturing processes",
      details: [
        "German engineering standards compliance",
        "Advanced heat treatment processes",
        "Superior strength and durability",
        "International technology benchmarks"
      ],
      color: "bg-primary-600",
      bgColor: "bg-primary-50",
      borderColor: "border-primary-200"
    },
    {
      icon: FileCheck,
      title: "Export License",
      subtitle: "Government of India",
      description: "Official export license from Government of India for international trade operations",
      details: [
        "Legal authorization for global exports",
        "Compliance with export regulations",
        "International trade documentation",
        "Customs clearance authorization"
      ],
      color: "bg-accent-600",
      bgColor: "bg-accent-50",
      borderColor: "border-accent-200"
    }
  ];

  const qualityStandards = [
    {
      standard: "ASTM International",
      description: "American Society for Testing and Materials standards",
      icon: Target,
      color: "bg-primary-500"
    },
    {
      standard: "JIS Standards",
      description: "Japanese Industrial Standards for steel products",
      icon: Factory,
      color: "bg-accent-500"
    },
    {
      standard: "British Standards (BS)",
      description: "UK standards for construction materials",
      icon: Shield,
      color: "bg-secondary-500"
    },
    {
      standard: "DIN Standards",
      description: "German Industrial Standards compliance",
      icon: TrendingUp,
      color: "bg-success-500"
    }
  ];

  const qualityProcess = [
    {
      step: "Raw Material Testing",
      description: "Comprehensive testing of raw materials before production",
      icon: FileCheck
    },
    {
      step: "Production Monitoring",
      description: "Continuous monitoring throughout manufacturing process",
      icon: Target
    },
    {
      step: "Quality Inspection",
      description: "Multi-stage quality inspection and testing procedures",
      icon: Shield
    },
    {
      step: "Final Certification",
      description: "Final quality certification before product dispatch",
      icon: Award
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
              <Award className="h-4 w-4 mr-3 text-accent-400" />
              Quality Certifications
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold font-display mb-8">
              Certified
              <span className="block text-gradient-vibrant">Excellence</span>
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Our commitment to quality is validated by prestigious international certifications 
              and rigorous compliance with global standards, ensuring trust and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Main Certifications */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="text-center mb-20 animate-on-scroll">
            <div className="badge-primary mb-8">
              <Shield className="h-4 w-4 mr-3" />
              Our Certifications
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-display text-primary-600 mb-8">
              International Standards
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Recognized certifications that validate our commitment to quality, safety, and environmental responsibility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className={`group animate-on-scroll card-vibrant ${cert.borderColor} border-2`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="card p-8 h-full">
                  <div className={`w-16 h-16 ${cert.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-400 shadow-soft`}>
                    <cert.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-bold font-display text-primary-600 mb-2">{cert.title}</h3>
                    <div className="text-sm font-semibold text-accent-600 mb-4">{cert.subtitle}</div>
                    <p className="text-neutral-600 leading-relaxed">{cert.description}</p>
                  </div>

                  <div className="space-y-3">
                    {cert.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-success-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-neutral-600 font-medium">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Standards */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-padding">
          <div className="text-center mb-20 animate-on-scroll">
            <div className="badge-accent mb-8">
              <Globe className="h-4 w-4 mr-3" />
              International Standards
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-display text-primary-600 mb-8">
              Global Compliance
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Our products meet and exceed international standards across major global markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityStandards.map((standard, index) => (
              <div key={index} className="group animate-on-scroll card-vibrant" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="card p-8 text-center h-full">
                  <div className={`w-16 h-16 ${standard.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-400 shadow-soft`}>
                    <standard.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-primary-600 mb-4">{standard.standard}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{standard.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="animate-on-scroll">
              <div className="badge-secondary mb-8">
                <Target className="h-4 w-4 mr-3" />
                Quality Process
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold font-display text-primary-600 mb-8">
                Rigorous Quality Control
              </h2>
              <p className="text-xl text-neutral-600 mb-10 leading-relaxed">
                Our comprehensive quality control process ensures every product meets the highest 
                standards before reaching our customers, maintaining consistency and reliability.
              </p>
              
              <div className="space-y-6">
                {qualityProcess.map((process, index) => (
                  <div key={index} className="flex items-start space-x-6 group animate-on-scroll hover-lift" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500 transition-all duration-300 shadow-soft">
                      <process.icon className="h-6 w-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-primary-600 mb-2">{process.step}</h4>
                      <p className="text-neutral-600 leading-relaxed">{process.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="aspect-square bg-gradient-hero rounded-3xl flex items-center justify-center text-white shadow-large hover:shadow-glow-primary transition-all duration-600 hover-lift">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-6xl font-extrabold font-display mb-4">99.9%</div>
                  <div className="text-xl font-bold mb-4">Quality Assurance</div>
                  <div className="text-lg opacity-90">
                    Consistent excellence in every product we manufacture
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-full h-full bg-accent-500/20 rounded-3xl -z-10 blur-sm"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Benefits */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-padding">
          <div className="text-center mb-20 animate-on-scroll">
            <div className="badge-success mb-8">
              <Star className="h-4 w-4 mr-3" />
              Compliance Benefits
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-display text-primary-600 mb-8">
              Why Certifications Matter
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Our certifications provide tangible benefits that ensure superior product quality and customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group animate-on-scroll card-vibrant">
              <div className="card p-8 text-center h-full">
                <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500 transition-all duration-400 shadow-soft">
                  <Shield className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors duration-400" />
                </div>
                <h3 className="text-xl font-bold font-display text-primary-600 mb-4">Quality Assurance</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Guaranteed product quality that meets international standards and customer expectations
                </p>
              </div>
            </div>

            <div className="group animate-on-scroll card-vibrant" style={{ animationDelay: '0.1s' }}>
              <div className="card p-8 text-center h-full">
                <div className="w-16 h-16 bg-accent-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-500 transition-all duration-400 shadow-soft">
                  <Globe className="h-8 w-8 text-accent-600 group-hover:text-white transition-colors duration-400" />
                </div>
                <h3 className="text-xl font-bold font-display text-primary-600 mb-4">Global Acceptance</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Products accepted in international markets with recognized certification standards
                </p>
              </div>
            </div>

            <div className="group animate-on-scroll card-vibrant" style={{ animationDelay: '0.2s' }}>
              <div className="card p-8 text-center h-full">
                <div className="w-16 h-16 bg-secondary-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary-500 transition-all duration-400 shadow-soft">
                  <Users className="h-8 w-8 text-secondary-600 group-hover:text-white transition-colors duration-400" />
                </div>
                <h3 className="text-xl font-bold font-display text-primary-600 mb-4">Customer Trust</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Enhanced customer confidence through verified quality and compliance standards
                </p>
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
              Experience Certified Quality
            </h2>
            <p className="text-xl text-primary-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Choose KEMO Steel for products that meet the highest international standards. 
              Our certifications guarantee quality, safety, and reliability in every delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link to="/contact" className="btn-accent group shadow-large hover:shadow-glow">
                <Sparkles className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Get Certified Products
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link to="/products" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary-600 shadow-medium">
                View Our Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
