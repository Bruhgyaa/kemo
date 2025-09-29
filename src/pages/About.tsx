import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Factory, Globe, Shield, Zap, Target, Heart, Lightbulb, TrendingUp, CheckCircle, Star, Sparkles } from 'lucide-react';

const About = () => {
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

  const stats = [
    { number: "25+", label: "Years Experience", icon: TrendingUp, color: "bg-gradient-primary" },
    { number: "500K+", label: "Tons Produced", icon: Factory, color: "bg-gradient-accent" },
    { number: "50+", label: "Countries Served", icon: Globe, color: "bg-gradient-secondary" },
    { number: "99.9%", label: "Quality Assurance", icon: Shield, color: "bg-gradient-success" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Quality Excellence",
      description: "Uncompromising commitment to delivering superior steel products that exceed international standards",
      gradient: "from-primary-500 to-primary-700",
      bgColor: "bg-primary-50",
      iconColor: "text-primary-600"
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Building lasting relationships through exceptional service and personalized solutions",
      gradient: "from-accent-500 to-accent-700",
      bgColor: "bg-accent-50",
      iconColor: "text-accent-600"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing cutting-edge technology and continuous improvement in manufacturing processes",
      gradient: "from-secondary-500 to-secondary-700",
      bgColor: "bg-secondary-50",
      iconColor: "text-secondary-600"
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Responsible manufacturing practices that protect our environment for future generations",
      gradient: "from-success-500 to-success-700",
      bgColor: "bg-success-50",
      iconColor: "text-success-600"
    }
  ];

  const milestones = [
    {
      year: "1999",
      title: "Foundation",
      description: "KEMO Steel Industries established with a vision to revolutionize steel manufacturing",
      icon: Factory,
      color: "bg-primary-500"
    },
    {
      year: "2005",
      title: "BIS Certification",
      description: "Achieved Bureau of Indian Standards certification for quality assurance",
      icon: Award,
      color: "bg-accent-500"
    },
    {
      year: "2012",
      title: "German Technology",
      description: "Integrated advanced Thermex® technology for superior steel production",
      icon: Zap,
      color: "bg-secondary-500"
    },
    {
      year: "2018",
      title: "Global Expansion",
      description: "Expanded operations to serve 50+ countries worldwide",
      icon: Globe,
      color: "bg-success-500"
    },
    {
      year: "2024",
      title: "Industry Leader",
      description: "Recognized as a leading manufacturer with 500K+ tons annual production",
      icon: Star,
      color: "bg-primary-600"
    }
  ];

  const achievements = [
    "BIS Certified manufacturing facility",
    "ISO 9001:2015 quality management system",
    "German Thermex® technology integration",
    "500,000+ tons annual production capacity",
    "50+ countries export network",
    "25+ years industry experience",
    "99.9% quality assurance record",
    "Zero compromise on safety standards"
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
              Our Story
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold font-display mb-8">
              Building Excellence
              <span className="block text-gradient-vibrant">Since 1999</span>
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              From humble beginnings to industry leadership, discover how KEMO Steel Industries 
              has been shaping the future of construction with premium steel solutions and unwavering commitment to quality.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group animate-on-scroll card-vibrant" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="card p-10 h-full">
                  <div className={`w-20 h-20 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:shadow-glow transition-all duration-400`}>
                    <stat.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-primary-600 mb-4">{stat.number}</div>
                  <div className="text-neutral-600 font-semibold">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="animate-on-scroll">
              <div className="badge-primary mb-8">
                <Factory className="h-4 w-4 mr-3" />
                Our Journey
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold font-display text-primary-600 mb-8">
                A Legacy of Steel Excellence
              </h2>
              <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                <p>
                  Founded in 1999 with a vision to revolutionize the steel industry, KEMO Steel Industries 
                  has grown from a small manufacturing unit to one of India's most trusted steel producers.
                </p>
                <p>
                  Our journey began with a simple yet powerful mission: to provide superior quality steel 
                  products that meet the evolving needs of modern construction and infrastructure development.
                </p>
                <p>
                  Today, we stand proud as a BIS-certified manufacturer, serving over 50 countries worldwide 
                  with our premium steel billets and TMT bars, all manufactured using advanced German Thermex® technology.
                </p>
              </div>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-6">
                <Link to="/products" className="btn-primary group shadow-medium hover:shadow-glow-primary">
                  Explore Products
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link to="/contact" className="btn-accent group shadow-medium hover:shadow-glow">
                  Get in Touch
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            <div className="relative animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="aspect-square bg-gradient-primary rounded-2xl flex items-center justify-center text-white shadow-large hover:shadow-glow-primary transition-all duration-400 hover-lift">
                    <div className="text-center">
                      <Award className="h-12 w-12 mx-auto mb-4" />
                      <div className="text-2xl font-bold">BIS</div>
                      <div className="text-sm opacity-90">Certified</div>
                    </div>
                  </div>
                  <div className="aspect-square bg-gradient-accent rounded-2xl flex items-center justify-center text-white shadow-large hover:shadow-glow transition-all duration-400 hover-lift">
                    <div className="text-center">
                      <Zap className="h-12 w-12 mx-auto mb-4" />
                      <div className="text-2xl font-bold">German</div>
                      <div className="text-sm opacity-90">Technology</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 mt-12">
                  <div className="aspect-square bg-gradient-secondary rounded-2xl flex items-center justify-center text-white shadow-large hover:shadow-glow-secondary transition-all duration-400 hover-lift">
                    <div className="text-center">
                      <Globe className="h-12 w-12 mx-auto mb-4" />
                      <div className="text-2xl font-bold">50+</div>
                      <div className="text-sm opacity-90">Countries</div>
                    </div>
                  </div>
                  <div className="aspect-square bg-gradient-success rounded-2xl flex items-center justify-center text-white shadow-large hover:shadow-glow-success transition-all duration-400 hover-lift">
                    <div className="text-center">
                      <Shield className="h-12 w-12 mx-auto mb-4" />
                      <div className="text-2xl font-bold">99.9%</div>
                      <div className="text-sm opacity-90">Quality</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="text-center mb-20 animate-on-scroll">
            <div className="badge-secondary mb-8">
              <Heart className="h-4 w-4 mr-3" />
              Our Values
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-display text-primary-600 mb-8">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Our core values shape every decision we make and every product we create, 
              ensuring excellence in everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group animate-on-scroll card-vibrant" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="card p-8 text-center h-full">
                  <div className={`w-16 h-16 ${value.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-400 shadow-soft`}>
                    <value.icon className={`h-8 w-8 ${value.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold font-display text-primary-600 mb-4">{value.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-padding">
          <div className="text-center mb-20 animate-on-scroll">
            <div className="badge-accent mb-8">
              <TrendingUp className="h-4 w-4 mr-3" />
              Our Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-display text-primary-600 mb-8">
              Milestones of Excellence
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Key moments that shaped our journey to becoming a leading steel manufacturer
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary rounded-full hidden lg:block"></div>
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center animate-on-scroll ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <div className="card p-8 shadow-medium hover:shadow-large transition-all duration-400 hover-lift">
                      <div className="flex items-center mb-6">
                        <div className={`w-12 h-12 ${milestone.color} rounded-xl flex items-center justify-center mr-4 shadow-soft`}>
                          <milestone.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="text-2xl font-bold text-accent-600">{milestone.year}</div>
                      </div>
                      <h3 className="text-xl font-bold font-display text-primary-600 mb-4">{milestone.title}</h3>
                      <p className="text-neutral-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden lg:flex w-6 h-6 bg-white border-4 border-primary-600 rounded-full shadow-medium z-10"></div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="animate-on-scroll">
              <div className="badge-success mb-8">
                <Award className="h-4 w-4 mr-3" />
                Our Achievements
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold font-display text-primary-600 mb-8">
                Recognition & Excellence
              </h2>
              <p className="text-xl text-neutral-600 mb-10 leading-relaxed">
                Our commitment to quality and innovation has earned us recognition 
                as a trusted leader in the steel manufacturing industry.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-4 group animate-on-scroll hover-lift" style={{ animationDelay: `${index * 0.05}s` }}>
                    <div className="w-8 h-8 bg-success-100 rounded-xl flex items-center justify-center group-hover:bg-success-500 transition-all duration-300 shadow-xs">
                      <CheckCircle className="h-5 w-5 text-success-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-neutral-700 font-medium text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="aspect-square bg-gradient-hero rounded-3xl flex items-center justify-center text-white shadow-large hover:shadow-glow-primary transition-all duration-600 hover-lift">
                <div className="text-center">
                  <div className="text-8xl font-extrabold font-display mb-6">25</div>
                  <div className="text-2xl font-bold mb-4">Years of Excellence</div>
                  <div className="text-lg opacity-90 px-6">
                    Building trust through quality and innovation
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-full h-full bg-accent-500/20 rounded-3xl -z-10 blur-sm"></div>
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
              Ready to Build with Excellence?
            </h2>
            <p className="text-xl text-primary-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of satisfied customers who trust KEMO Steel for their construction needs. 
              Experience the difference that 25 years of expertise makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link to="/contact" className="btn-accent group shadow-large hover:shadow-glow">
                <Sparkles className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Get Started Today
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

export default About;
