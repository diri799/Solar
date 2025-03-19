import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contacts = () => {
  return (
    <div className="w-full">
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl mb-8">
              Get in touch with our team of experts
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <Phone className="text-secondary w-8 h-8 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-primary mb-2">Call Us</h2>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <Mail className="text-secondary w-8 h-8 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-primary mb-2">
                Email Us
              </h2>
              <p className="text-gray-600">info@versaflex.com</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <MapPin className="text-secondary w-8 h-8 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-primary mb-2">
                Visit Us
              </h2>
              <p className="text-gray-600">123 Energy Street, Solar City</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
