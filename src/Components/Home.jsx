import React from "react";
import { ArrowRight, Sun, Zap, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-32">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg mb-4 text-secondary">More Than Solar. We're Building a Greener Tomorrow</p>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              From Sunlight to Self-Reliance. We're Powering Homes and Businesses with Clean Energy
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="stat-item"
          >
            <h2 className="text-5xl font-bold text-secondary mb-2">200+</h2>
            <p className="text-gray-600">Homes and Offices Powered</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-5xl font-bold text-secondary mb-2">10+</h2>
            <p className="text-gray-600">Years in Business</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-5xl font-bold text-secondary mb-2">3,000+</h2>
            <p className="text-gray-600">Satisfied Customers</p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="transition-all duration-300 ease-in-out bg-gray-50 p-6 rounded-lg cursor-pointer hover:shadow-md">
                <summary className="font-semibold text-lg list-none">
                  How do I determine the right capacity of solar panels for my property?
                </summary>
                <p className="mt-4 text-gray-600">
                  Determining the appropriate capacity of solar panels involves evaluating factors such as your energy consumption, available roof space, orientation, and local weather conditions. Our team conducts a thorough assessment to recommend the optimal solution tailored to your specific needs.
                </p>
              </details>
              {/* Add more FAQ items as needed */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src="/company-image.jpg" alt="Our Company" className="rounded-lg shadow-xl" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-600">To be the leading name in sustainable energy solutions, delivering innovative and reliable power systems for homes and businesses.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-600">To keep investing in research and development in clean and green energy solutions that will deliver dependable power solutions for customers nationwide.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Switch to Clean Energy?</h2>
          <Link
            to="/contact"
            className="inline-flex items-center bg-secondary text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition duration-300"
          >
            Get Started <ArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
