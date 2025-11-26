import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Globe, Zap, CheckCircle, Star, TrendingUp, Users, Factory } from 'lucide-react';



const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  useEffect(() => {
    const slides = ["/assets/slag.png", "/assets/tmt.png", "/assets/ironwork.png"];
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // change every 5s
    return () => clearInterval(interval);
  }, []);

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
      title: "Industrial Grade Excellence",
      description: "BIS Certified quality ensuring superior strength and durability for critical applications",
      gradient: "from-primary-600 to-primary-700"
    },
    {
      icon: Award,
      title: "Unbreakable Strength",
      description: "550 D/CRS variants engineered for maximum structural integrity and performance",
      gradient: "from-accent-500 to-accent-600"
    },
    {
      icon: Zap,
      title: "German Technology",
      description: "Advanced Thermex® technology delivering enhanced performance and reliability",
      gradient: "from-steel-600 to-steel-700"
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "International quality compliance serving 50+ countries worldwide",
      gradient: "from-blue-600 to-blue-700"
    }
  ];

  const stats = [
    { number: "25+", label: "Years Experience", icon: TrendingUp },
    { number: "500K+", label: "Tons Produced", icon: Factory },
    { number: "50+", label: "Countries Served", icon: Globe },
    { number: "99.9%", label: "Quality Assurance", icon: Shield }
  ];

  const whyChooseUs = [
    "Superior tensile strength and ductility",
    "Earthquake resistant construction technology",
    "Fire resistant up to 600°C temperature",
    "Advanced corrosion resistant coating",
    "BIS and ISO certified quality assurance",
    "German Thermex® manufacturing technology"
  ];

  const products = [
    {
      name: "Steel Billets",
      category: "Raw Materials",
      description: "Premium quality steel billets manufactured for superior strength and industrial applications",
      gradient: "from-primary-600 to-primary-800",
      features: ["High-grade steel", "Industrial strength", "BIS certified"]
    },
    {
      name: "TMT 550D",
      category: "Premium Grade",
      description: "Premium grade TMT bars with 550 MPa yield strength for high-rise construction projects",
      gradient: "from-accent-500 to-accent-700",
      features: ["550 MPa strength", "Earthquake resistant", "German technology"]
    },
    {
      name: "CRS Bars",
      category: "Corrosion Resistant",
      description: "Corrosion resistant steel bars designed for coastal and industrial environments",
      gradient: "from-steel-600 to-steel-800",
      features: ["Corrosion resistant", "Marine grade", "Extended lifespan"]
    }
  ];

  return (
    <div className="overflow-hidden page-transition">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0">
          {[
            "/assets/slag.png",
            "/assets/tmt.png",
            "/assets/ironwork.png",
          ].map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? "opacity-100" : "opacity-0"
                }`}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative container-padding py-24 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center text-white">
            {/* Left Side */}
            <div className="space-y-10 animate-on-scroll">
              <div className="inline-flex items-center px-5 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/20 shadow-soft">
                <Star className="h-4 w-4 mr-3 text-accent-400" />
                Trusted by 50+ Countries Worldwide
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-display leading-tight">
                Building the
                <span className="block gradient-text bg-gradient-to-r from-accent-400 to-accent-300 bg-clip-text text-transparent">
                  Future
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 leading-relaxed max-w-2xl">
                Premium steel billets and TMT bars manufactured with German Thermex® technology
                for uncompromising strength, durability, and performance excellence.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/products" className="btn-primary group shadow-large hover:shadow-glow-primary">
                  Explore Products
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

              </div>
            </div>

            {/* Right Side Card (unchanged) */}
            <div className="relative animate-on-scroll" style={{ animationDelay: '0.3s' }}>
              {/* ... keep your existing card code ... */}
            </div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-padding">
          <div className="text-center mb-24 animate-on-scroll">
            <div className="inline-flex items-center px-5 py-3 bg-primary-50 rounded-full text-primary-600 font-semibold mb-6 shadow-xs border border-primary-100">
              <Award className="h-4 w-4 mr-3" />
              Why Choose KEMO Steel
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-display text-primary-600 mb-8">
              Excellence in Every Bar
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Experience the perfect blend of German technology and Indian craftsmanship
              in every steel product we manufacture with precision and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group animate-on-scroll card-interactive" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="card p-10 text-center h-full shadow-soft hover:shadow-large">
                  <div className={`icon-container-lg bg-gradient-to-br ${feature.gradient} text-white mx-auto mb-8 group-hover:scale-110 group-hover:shadow-glow transition-all duration-400`}>
                    <feature.icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-primary-600 mb-6">{feature.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="text-center mb-24 animate-on-scroll">
            <div className="inline-flex items-center px-5 py-3 bg-accent-50 rounded-full text-accent-600 font-semibold mb-6 shadow-xs border border-accent-100">
              <Factory className="h-4 w-4 mr-3" />
              Our Premium Products
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-display text-primary-600 mb-8">
              Engineered for Strength
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Built for the future with cutting-edge technology and uncompromising quality standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <div key={index} className="card overflow-hidden card-interactive animate-on-scroll shadow-soft hover:shadow-large" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`h-64 bg-gradient-to-br ${product.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="text-white text-center relative z-10">
                    <div className="text-3xl font-bold font-display mb-3">{product.name}</div>
                    <div className="text-sm opacity-90 px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm border border-white/30">
                      {product.category}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-2 h-2 bg-white/60 rounded-full animate-pulse shadow-sm"></div>
                </div>
                <div className="p-10">
                  <h3 className="text-xl font-bold font-display text-primary-600 mb-6">{product.name}</h3>
                  <p className="text-neutral-600 mb-8 leading-relaxed">{product.description}</p>
                  <div className="space-y-3 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-accent-500 mr-4 flex-shrink-0" />
                        <span className="text-neutral-600 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/products" className="text-accent-600 font-semibold hover:text-accent-700 transition-colors duration-300 flex items-center group hover-lift">
                    Learn More
                    <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="animate-on-scroll">
              <div className="inline-flex items-center px-5 py-3 bg-primary-50 rounded-full text-primary-600 font-semibold mb-8 shadow-xs border border-primary-100">
                <Users className="h-4 w-4 mr-3" />
                Trust & Excellence
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold font-display text-primary-600 mb-8">
                Strength in Every Detail
              </h2>
              <p className="text-xl text-neutral-600 mb-10 leading-relaxed">
                With over 25 years of experience and cutting-edge German technology,
                we deliver steel products that exceed international standards and customer expectations.
              </p>

              <div className="space-y-5 mb-10">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-center space-x-5 group animate-on-scroll hover-lift" style={{ animationDelay: `${index * 0.05}s` }}>
                    <div className="w-8 h-8 bg-accent-100 rounded-xl flex items-center justify-center group-hover:bg-accent-500 transition-all duration-300 shadow-xs">
                      <CheckCircle className="h-5 w-5 text-accent-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-neutral-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/about" className="btn-primary group shadow-medium hover:shadow-large">
                Learn More About Us
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            <div className="relative animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-8">
                  <div className="card p-8 bg-gradient-primary text-white shadow-medium hover:shadow-large card-interactive">
                    <Star className="h-8 w-8 text-accent-400 mb-6" />
                    <div className="text-2xl font-bold font-display mb-3">BIS Certified</div>
                    <div className="text-primary-200 text-sm font-medium">Quality Assurance</div>
                  </div>
                  <div className="card p-8 bg-gradient-accent text-white shadow-medium hover:shadow-large card-interactive">
                    <Globe className="h-8 w-8 mb-6" />
                    <div className="text-2xl font-bold font-display mb-3">50+ Countries</div>
                    <div className="text-accent-200 text-sm font-medium">Global Reach</div>
                  </div>
                </div>
                <div className="space-y-8 mt-16">
                  <div className="card p-8 bg-gradient-steel text-white shadow-medium hover:shadow-large card-interactive">
                    <Zap className="h-8 w-8 text-accent-400 mb-6" />
                    <div className="text-2xl font-bold font-display mb-3">Thermex®</div>
                    <div className="text-steel-300 text-sm font-medium">German Technology</div>
                  </div>
                  <div className="card p-8 bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-medium hover:shadow-large card-interactive">
                    <Shield className="h-8 w-8 text-accent-400 mb-6" />
                    <div className="text-2xl font-bold font-display mb-3">550 MPa</div>
                    <div className="text-blue-200 text-sm font-medium">Ultimate Strength</div>
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
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
        <div className="container-padding text-center relative">
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-extrabold font-display text-white mb-8">
              Ready to Build with Excellence?
            </h2>
            <p className="text-xl text-primary-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Get in touch with our steel experts to discuss your requirements
              and discover how KEMO Steel can strengthen your next project with premium quality solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">

              <Link to="/products" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary-600 shadow-medium">
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
