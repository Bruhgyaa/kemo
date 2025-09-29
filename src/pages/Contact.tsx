import React, { useState, useEffect } from 'react';
import { useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Building, Globe, Award, CheckCircle, ArrowRight, Sparkles, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    productInterest: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitContact = useMutation(api.contacts.submitContact);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitContact(formData);
      toast.success('Thank you! Your message has been sent successfully. We will get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        productInterest: ''
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Facility",
      details: [
        "Survey No. 5/P, V: Budharmora",
        "Bhuj, Gujarat 370115, India"
      ],
      color: "bg-primary-500",
      bgColor: "bg-primary-50"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "+91 7003357003",
        "Mon - Sat: 9:00 AM - 6:00 PM IST"
      ],
      color: "bg-accent-500",
      bgColor: "bg-accent-50"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "marketing@kemosteels.com",
        "Quick response within 24 hours"
      ],
      color: "bg-secondary-500",
      bgColor: "bg-secondary-50"
    }
  ];

  const productOptions = [
    "Steel Billets",
    "TMT Bars 550D",
    "CRS TMT Bars",
    "Custom Steel Solutions",
    "Export Inquiry",
    "General Inquiry"
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "25+ Years Experience",
      description: "Trusted expertise in steel manufacturing"
    },
    {
      icon: CheckCircle,
      title: "BIS Certified Quality",
      description: "Guaranteed quality with official certifications"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving 65+ countries worldwide"
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "24-hour response time guarantee"
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
              <MessageSquare className="h-4 w-4 mr-3 text-accent-400" />
              Get In Touch
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold font-display mb-8">
              Let's Build
              <span className="block text-gradient-vibrant">Together</span>
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your steel requirements? Our expert team is here to provide
              personalized solutions and competitive quotes for your construction projects.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2 animate-on-scroll">
              <div className="card p-10 shadow-large hover:shadow-glow-primary transition-all duration-600">
                <div className="mb-10">
                  <div className="badge-primary mb-6">
                    <Send className="h-4 w-4 mr-3" />
                    Send Message
                  </div>
                  <h2 className="text-3xl font-bold font-display text-primary-600 mb-4">
                    Get Your Custom Quote
                  </h2>
                  <p className="text-neutral-600 leading-relaxed">
                    Fill out the form below and our team will get back to you within 24 hours with a personalized quote.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-primary-600 mb-3">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="input-field pl-12"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-primary-600 mb-3">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="input-field pl-12"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-primary-600 mb-3">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="input-field pl-12"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-primary-600 mb-3">
                        Company Name
                      </label>
                      <div className="relative">
                        <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="input-field pl-12"
                          placeholder="Enter your company name"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="productInterest" className="block text-sm font-semibold text-primary-600 mb-3">
                      Product Interest
                    </label>
                    <select
                      id="productInterest"
                      name="productInterest"
                      value={formData.productInterest}
                      onChange={handleInputChange}
                      className="input-field"
                    >
                      <option value="">Select a product or service</option>
                      {productOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-primary-600 mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="input-field resize-none"
                      placeholder="Tell us about your requirements, quantities, delivery location, and any specific needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary group shadow-medium hover:shadow-glow-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="mr-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        Send Message
                        <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="card p-8 shadow-medium hover:shadow-large transition-all duration-400 hover-lift">
                <div className="badge-accent mb-6">
                  <Phone className="h-4 w-4 mr-3" />
                  Contact Information
                </div>
                <h3 className="text-2xl font-bold font-display text-primary-600 mb-6">
                  Reach Out to Us
                </h3>

                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="group">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 ${info.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300 shadow-soft`}>
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-primary-600 mb-2">{info.title}</h4>
                          {info.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="text-neutral-600 text-sm leading-relaxed">
                              {detail}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="card p-8 shadow-medium hover:shadow-large transition-all duration-400 hover-lift">
                <div className="badge-success mb-6">
                  <Award className="h-4 w-4 mr-3" />
                  Why Choose KEMO Steel
                </div>
                <h3 className="text-xl font-bold font-display text-primary-600 mb-6">
                  Trusted Excellence
                </h3>

                <div className="space-y-6">
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="w-10 h-10 bg-success-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-success-500 transition-all duration-300 shadow-xs">
                        <item.icon className="h-5 w-5 text-success-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-600 mb-1">{item.title}</h4>
                        <p className="text-sm text-neutral-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Location */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-padding">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="badge-secondary mb-8">
              <MapPin className="h-4 w-4 mr-3" />
              Our Location
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-display text-primary-600 mb-8">
              Visit Our Manufacturing Facility
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Located in the industrial hub of Gujarat, our state-of-the-art facility is equipped with modern technology
            </p>
          </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch h-full">
            <div className="animate-on-scroll h-full">
              <div className="card p-10 shadow-large hover:shadow-glow-primary transition-all duration-600 h-full">
              <h3 className="text-2xl font-bold font-display text-primary-600 mb-8">
                Manufacturing Excellence in Gujarat
              </h3>

              <div className="space-y-6 mb-8 flex-grow">
                <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-primary-600 mb-2">Complete Address</div>
                  <div className="text-neutral-600 leading-relaxed">
                  Survey No. 5/P, V: Budharmora<br />
                  Bhuj, Gujarat 370115, India
                  </div>
                </div>
                </div>

                <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-accent-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-primary-600 mb-2">Operating Hours</div>
                  <div className="text-neutral-600 leading-relaxed">
                  Monday - Saturday: 9:00 AM - 6:00 PM<br />
                  Sunday: Closed
                  </div>
                </div>
                </div>

                <div className="flex items-start space-x-4">
                <Building className="h-6 w-6 text-secondary-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-primary-600 mb-2">Facility Features</div>
                  <div className="text-neutral-600 leading-relaxed">
                  Modern manufacturing equipment<br />
                  Quality testing laboratories<br />
                  Export packaging facilities
                  </div>
                </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <a
                href="https://maps.google.com/?q=Survey+No.+5/P,+V:+Budharmora,+Bhuj,+Gujarat+370115"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group shadow-medium hover:shadow-glow-primary"
                >
                <MapPin className="mr-3 h-5 w-5" />
                Get Directions
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a
                href="tel:+917003357003"
                className="btn-accent group shadow-medium hover:shadow-glow"
                >
                <Phone className="mr-3 h-5 w-5" />
                Call Now
                </a>
              </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-xl h-full min-h-[600px]"
            >
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7326.764155839298!2d70.19282917617085!3d23.33816830447552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f11.1!3m3!1m2!1s0x395091024e8966dd%3A0xe0aaecf83c556b7f!2sKEMO%20STEEL%20INDUSTRIES%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1759139458837!5m2!1sen!2sin" 
                className="w-full h-full"
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </motion.div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Don't wait! Contact our expert team today for competitive quotes and personalized
              steel solutions that meet your exact requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <a
                href="tel:+917003357003"
                className="btn-accent group shadow-large hover:shadow-glow"
              >
                <Phone className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Call Now: +91 7003357003
              </a>
              <a
                href="mailto:marketing@kemosteels.com"
                className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary-600 shadow-medium"
              >
                <Mail className="mr-3 h-5 w-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
