import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Zap, CheckCircle, Star, Factory, Sparkles, Target, TrendingUp } from 'lucide-react';

const Products = () => {
  // Static products data
  const products = [
    {
      _id: 1,
      name: "Steel Billets",
      category: "Raw Material",
      description: "High-quality steel billets for industrial and construction applications.",
      specifications: ["Grade: Fe500", "Length: 12m", "Width: 150mm", "Standard: BIS Certified"],
      features: ["High Strength", "Corrosion Resistant", "Uniform Size"]
    },
    {
      _id: 2,
      name: "TMT Bars 550D",
      category: "Construction Steel",
      description: "Thermex® TMT bars designed for earthquake-resistant structures.",
      specifications: ["Grade: Fe550D", "Length: 12m", "Diameter: 8-32mm", "BIS Certified"],
      features: ["High Ductility", "Superior Tensile Strength", "Rust Resistant"]
    },
    {
      _id: 3,
      name: "CRS TMT Bars",
      category: "Reinforcement Steel",
      description: "Cold Rolled Steel TMT bars for premium construction projects.",
      specifications: ["Grade: Fe500", "Length: 12m", "Diameter: 10-25mm", "BIS Certified"],
      features: ["High Strength", "Flexible", "Corrosion Resistant"]
    },
    {
      _id: 4,
      name: "Industrial Grade Steel",
      category: "Industrial Use",
      description: "Steel suitable for manufacturing and heavy machinery applications.",
      specifications: ["Grade: Fe500/550", "Customized Sizes Available", "ISO Certified"],
      features: ["Durable", "Precision Rolled", "Reliable Performance"]
    }
  ];

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

  const features = [
    {
      icon: Shield,
      title: "BIS Certified Quality",
      description: "All products meet Bureau of Indian Standards with rigorous quality control",
      gradient: "from-primary-500 to-primary-700",
      bgColor: "bg-primary-50"
    },
    {
      icon: Zap,
      title: "German Technology",
      description: "Advanced Thermex® technology for superior strength and durability",
      gradient: "from-accent-500 to-accent-700",
      bgColor: "bg-accent-50"
    },
    {
      icon: Award,
      title: "Export Quality",
      description: "International standards compliance for global market requirements",
      gradient: "from-secondary-500 to-secondary-700",
      bgColor: "bg-secondary-50"
    }
  ];

  const applications = [
    {
      title: "High-Rise Construction",
      description: "Perfect for skyscrapers and multi-story buildings requiring superior strength",
      icon: Factory,
      color: "bg-primary-500"
    },
    {
      title: "Infrastructure Projects",
      description: "Ideal for bridges, highways, and large-scale infrastructure development",
      icon: Target,
      color: "bg-accent-500"
    },
    {
      title: "Industrial Facilities",
      description: "Suitable for manufacturing plants and industrial construction projects",
      icon: TrendingUp,
      color: "bg-secondary-500"
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
              <Sparkles className="h-4 w-4 mr-3 text-accent-400" />
              Premium Steel Products
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold font-display mb-8">
              Engineered for
              <span className="block text-gradient-vibrant">Excellence</span>
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of premium steel products, manufactured with 
              German Thermex® technology and certified to the highest international standards.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="text-center mb-20 animate-on-scroll">
            <div className="badge-primary mb-8">
              <Award className="h-4 w-4 mr-3" />
              Why Choose Our Products
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-display text-primary-600 mb-8">
              Unmatched Quality Standards
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Every product is crafted with precision and tested rigorously to ensure superior performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="group animate-on-scroll card-vibrant" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="card p-10 text-center h-full">
                  <div className={`w-20 h-20 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-400 shadow-soft`}>
                    <feature.icon className="h-10 w-10 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-primary-600 mb-6">{feature.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-padding">
          <div className="text-center mb-20 animate-on-scroll">
            <div className="badge-accent mb-8">
              <Factory className="h-4 w-4 mr-3" />
              Our Product Range
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-display text-primary-600 mb-8">
              Premium Steel Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <div key={product._id} className="group animate-on-scroll card-vibrant" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="card overflow-hidden shadow-medium hover:shadow-large">
                  {/* Product Image */}
                  <div className="h-64 bg-gradient-primary relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center p-6">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                          <Factory className="h-8 w-8 text-white" />
                        </div>
                        <div className="text-2xl font-bold font-display mb-3">{product.name}</div>
                        <div className="inline-flex items-center px-3 py-1 bg-accent-500 text-white text-xs font-semibold rounded-full">
                          {product.category}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold font-display text-primary-600 mb-4">{product.name}</h3>
                    <p className="text-neutral-600 mb-8 leading-relaxed">{product.description}</p>

                    {/* Specifications */}
                    <div className="mb-8">
                      <h4 className="text-lg font-bold text-primary-600 mb-4">Specifications</h4>
                      <div className="space-y-3">
                        {product.specifications.map((spec, specIndex) => (
                          <div key={specIndex} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-accent-500 rounded-full mr-4 flex-shrink-0"></div>
                            <span className="text-neutral-600 font-medium">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="text-lg font-bold text-primary-600 mb-4">Key Features</h4>
                      <div className="space-y-3">
                        {product.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-success-500 mr-4 flex-shrink-0" />
                            <span className="text-neutral-600 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link 
                      to="/contact" 
                      className="w-full btn-primary group shadow-medium hover:shadow-glow-primary"
                    >
                      <Star className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                      Get Quote
                      <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="text-center mb-20 animate-on-scroll">
            <div className="badge-secondary mb-8">
              <Target className="h-4 w-4 mr-3" />
              Applications
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-display text-primary-600 mb-8">
              Perfect for Every Project
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Our steel products are designed to meet the demanding requirements of various construction applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applications.map((application, index) => (
              <div key={index} className="group animate-on-scroll card-vibrant" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="card p-10 text-center h-full">
                  <div className={`w-16 h-16 ${application.color} rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-400 shadow-soft`}>
                    <application.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-primary-600 mb-6">{application.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{application.description}</p>
                </div>
              </div>
            ))}
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Get personalized recommendations and competitive quotes for your steel requirements. 
              Our experts are ready to help you choose the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link to="/contact" className="btn-accent group shadow-large hover:shadow-glow">
                <Sparkles className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Get Custom Quote
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link to="/about" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary-600 shadow-medium">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
