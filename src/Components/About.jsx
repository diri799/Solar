import React from "react";

const About = () => {
  return (
    <div className="w-full">
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Versaflex Technologies
            </h1>
            <p className="text-xl mb-8">
              Your trusted partner in sustainable energy solutions
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Our Story
            </h2>
            <p className="text-gray-600">
              We are committed to providing innovative and sustainable energy
              solutions that help our clients reduce their environmental impact
              while saving on energy costs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
