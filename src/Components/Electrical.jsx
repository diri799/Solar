import { motion } from "framer-motion";
import { ArrowRight, Zap, Battery, Shield, Settings } from "lucide-react";

export default function Electrical() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-gray-50 to-white pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight"
              >
                <span className="text-green-600">Innovative</span> Electrical Engineering Solutions
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-gray-600 mt-6"
              >
                Powering the future with cutting-edge electrical design, consultancy, and implementation services tailored to your specific needs.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 space-x-4"
              >
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors duration-300"
                >
                  Get Started
                  <ArrowRight size={18} className="ml-2" />
                </a>
                <a 
                  href="#services" 
                  className="inline-flex items-center px-6 py-3 border border-green-600 text-green-600 font-medium rounded-md hover:bg-green-50 transition-colors duration-300"
                >
                  Our Services
                </a>
              </motion.div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="relative h-64 md:h-auto overflow-hidden rounded-lg shadow-xl">
                <img 
                  src="/electrical-hero.jpg" 
                  alt="Electrical engineering solutions" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg animate-pulse">
                25+ Years
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver comprehensive electrical engineering solutions tailored to meet your specific project requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-green-600" />,
                title: "Power Systems Design",
                description: "Comprehensive electrical system design for residential and commercial properties."
              },
              {
                icon: <Shield className="w-8 h-8 text-green-600" />,
                title: "Electrical Safety",
                description: "Professional safety inspections and upgrades to protect your property."
              },
              {
                icon: <Settings className="w-8 h-8 text-green-600" />,
                title: "System Maintenance",
                description: "Regular maintenance and servicing of electrical systems."
              },
              {
                icon: <Battery className="w-8 h-8 text-green-600" />,
                title: "Backup Solutions",
                description: "Installation and maintenance of backup power systems."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl border-t-4 border-green-600 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
