"use client";

import { useState } from "react";
import { Phone, Clock, Shield, Award, Droplets, Wrench, AlertTriangle, PenTool, ChevronRight, Star, Menu, X, MapPin, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";

const PHONE_NUMBER = "(555) 123-4567";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <Droplets className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">ProFlow<span className="text-blue-600">Plumbing</span></span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Services</a>
            <a href="#why-us" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Why Choose Us</a>
            <a href="#testimonials" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Reviews</a>
            <a href="#contact" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href={`tel:${PHONE_NUMBER.replace(/[^0-9]/g, "")}`} className="flex items-center gap-2 text-blue-600 font-semibold">
              <Phone className="w-5 h-5" />
              {PHONE_NUMBER}
            </a>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6">
              <a href="#contact">Request Service</a>
            </Button>
          </div>

          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-blue-100 py-4 px-4"
        >
          <nav className="flex flex-col gap-4">
            <a href="#services" className="text-slate-600 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#why-us" className="text-slate-600 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Why Choose Us</a>
            <a href="#testimonials" className="text-slate-600 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
            <a href="#contact" className="text-slate-600 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <a href={`tel:${PHONE_NUMBER.replace(/[^0-9]/g, "")}`} className="flex items-center gap-2 text-blue-600 font-semibold py-2">
              <Phone className="w-5 h-5" />
              {PHONE_NUMBER}
            </a>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-semibold w-full">
              <a href="#contact">Request Service</a>
            </Button>
          </nav>
        </motion.div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-20 md:pt-24 min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100" />
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e40af' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Clock className="w-4 h-4" />
              24/7 Emergency Service Available
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Fast & Reliable{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Plumbing Services
              </span>{" "}
              You Can Trust
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Licensed, insured, and ready to solve any plumbing problem. From emergency repairs to routine maintenance – we're here when you need us most.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-6 shadow-lg shadow-blue-600/30">
                <a href={`tel:${PHONE_NUMBER.replace(/[^0-9]/g, "")}`} className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold text-lg px-8 py-6">
                <a href="#contact" className="flex items-center gap-2">
                  Request Service
                  <ChevronRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 mt-10 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="text-slate-600 font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" />
                <span className="text-slate-600 font-medium">15+ Years Experience</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&h=600&fit=crop" 
                alt="Professional plumber at work"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border border-blue-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">2,500+</p>
                  <p className="text-slate-600 text-sm">Jobs Completed</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl border border-blue-100"
            >
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-900 font-bold">4.9/5 Rating</p>
              <p className="text-slate-500 text-sm">500+ Reviews</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Droplets,
    title: "Leak Repair",
    description: "Fast detection and repair of water leaks in pipes, faucets, toilets, and water heaters. Stop water damage before it starts.",
  },
  {
    icon: PenTool,
    title: "Drain Cleaning",
    description: "Professional drain clearing for sinks, showers, and main lines. We eliminate clogs and restore proper water flow quickly.",
  },
  {
    icon: Wrench,
    title: "Pipe Installation",
    description: "Expert installation of new plumbing lines for renovations, additions, and new construction. Quality materials guaranteed.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Plumbing",
    description: "24/7 emergency response for burst pipes, sewage backups, and flooding. We arrive fast to minimize damage to your home.",
  },
];

function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 mb-4">
            Professional Plumbing Solutions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From minor repairs to major installations, we handle all your plumbing needs with expertise and care.
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-slate-50 hover:bg-blue-600 rounded-2xl p-6 lg:p-8 transition-all duration-300 border border-slate-100 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-600/20"
            >
              <div className="w-14 h-14 bg-blue-100 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-5 transition-colors">
                <service.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-3 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 group-hover:text-blue-100 transition-colors leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: Award,
    title: "15+ Years Experience",
    description: "Our team brings over 15 years of hands-on plumbing expertise to every job we complete.",
  },
  {
    icon: Clock,
    title: "Fast Response Time",
    description: "We prioritize your time. Most calls are answered within minutes, with same-day service available.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed, bonded, and insured for your complete peace of mind and protection.",
  },
  {
    icon: Star,
    title: "Satisfaction Guaranteed",
    description: "We stand behind our work with a 100% satisfaction guarantee on all services performed.",
  },
];

function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 mb-6">
              Trusted by Homeowners Throughout the Area
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              We're not just plumbers – we're your neighbors committed to keeping your home's plumbing running smoothly. Our reputation is built on reliability, quality work, and fair pricing.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{feature.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop" 
                alt="Professional plumber working"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white rounded-xl p-6 shadow-xl max-w-xs">
              <p className="text-3xl font-bold mb-1">98%</p>
              <p className="text-blue-100">Customer satisfaction rate based on post-service surveys</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Riverside",
    rating: 5,
    text: "Had a burst pipe emergency at 2 AM. They arrived within 30 minutes and had everything fixed by sunrise. Absolutely incredible service!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    name: "Michael Chen",
    location: "Oak Park",
    rating: 5,
    text: "Finally found a plumber I can trust. Fair prices, honest assessment, and quality work. They've been maintaining our home's plumbing for 3 years now.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    name: "Emily Rodriguez",
    location: "Willow Creek",
    rating: 5,
    text: "The team was professional, clean, and explained everything clearly. They installed our new water heater quickly and at a great price. Highly recommend!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-blue-200 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Don't just take our word for it – hear from homeowners who've experienced our commitment to excellence.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-slate-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 mb-6">
              Request Service Today
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Need plumbing help? Fill out the form and we'll get back to you within the hour during business hours. For emergencies, call us directly for immediate assistance.
            </p>
            
            <div className="space-y-6">
              <a href={`tel:${PHONE_NUMBER.replace(/[^0-9]/g, "")}`} className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-blue-100 group-hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors">
                  <Phone className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Call Us 24/7</p>
                  <p className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{PHONE_NUMBER}</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Email Us</p>
                  <p className="text-xl font-bold text-slate-900">info@proflowplumbing.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Service Area</p>
                  <p className="text-xl font-bold text-slate-900">Metro Area & Surrounding Communities</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl text-white">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-6 h-6" />
                <h3 className="text-xl font-bold">24/7 Emergency Service</h3>
              </div>
              <p className="text-blue-100">
                Plumbing emergencies don't wait – and neither do we. Call anytime for immediate assistance with burst pipes, flooding, or sewage backups.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-slate-50 rounded-2xl p-6 lg:p-8 border border-slate-100">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Request Submitted!</h3>
                  <p className="text-slate-600 mb-6">
                    Thank you for contacting us. We'll get back to you within the hour during business hours.
                  </p>
                  <Button onClick={() => setSubmitted(false)} variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    Submit Another Request
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Request a Free Quote</h3>
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Smith"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white border-slate-200 h-12 text-base"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-white border-slate-200 h-12 text-base"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                      Service Needed *
                    </label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => setFormData({ ...formData, service: value })}
                      required
                    >
                      <SelectTrigger className="bg-white border-slate-200 h-12 text-base">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="leak-repair">Leak Repair</SelectItem>
                        <SelectItem value="drain-cleaning">Drain Cleaning</SelectItem>
                        <SelectItem value="pipe-installation">Pipe Installation</SelectItem>
                        <SelectItem value="emergency">Emergency Plumbing</SelectItem>
                        <SelectItem value="water-heater">Water Heater Service</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Additional Details (Optional)
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Describe your plumbing issue..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-white border-slate-200 text-base resize-none"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-14 text-lg">
                    Submit Request
                  </Button>
                  
                  <p className="text-sm text-slate-500 text-center">
                    By submitting, you agree to be contacted regarding your service request.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">ProFlow<span className="text-blue-400">Plumbing</span></span>
            </div>
            <p className="text-slate-400 mb-4">
              Your trusted local plumbing experts. Fast, reliable service for all your plumbing needs.
            </p>
            <div className="flex items-center gap-2 text-blue-400 font-semibold">
              <Phone className="w-5 h-5" />
              {PHONE_NUMBER}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors">Leak Repair</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Drain Cleaning</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Pipe Installation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Emergency Plumbing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Water Heater Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Service Area</h3>
            <ul className="space-y-2 text-slate-400">
              <li>Downtown Metro</li>
              <li>Riverside</li>
              <li>Oak Park</li>
              <li>Willow Creek</li>
              <li>And surrounding areas</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Hours</h3>
            <ul className="space-y-2 text-slate-400">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="text-white">7am - 7pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white">8am - 5pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white">Closed</span>
              </li>
              <li className="mt-4 text-blue-400 font-semibold">
                24/7 Emergency Available
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © 2024 ProFlow Plumbing. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-slate-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
