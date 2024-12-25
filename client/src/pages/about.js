import React from 'react';

const About = () => {
  return (
    <div className="about-container p-8 bg-gray-100 text-black">
      <section className="hero-section relative h-screen bg-cover bg-center flex items-center">
        <div className="image-container relative w-1/2 h-full">
          <img src="art-aesthetic-tote-bag.jpg" alt="Hero" className="w-full h-full object-cover" />
          <div className="overlay absolute inset-0 bg-black opacity-10"></div>
        </div>
        <div className="text-container w-1/2 p-8">
          <h1 className="hero-text text-black text-8xl font-playfair font-bold right-48 relative"><i>ABOUT US</i></h1>
          <p className="text-lg mt-4">
            Founded in 1920, our ice cream factory has been delivering delicious and innovative flavors for over a century. From our humble beginnings to becoming a household name, our commitment to quality and customer satisfaction has never wavered.
          </p>
        </div>
      </section>

      <section className="history-section mb-8">
        <h1 className="text-3xl font-bold mb-4">Our History</h1>
        <p className="text-lg mb-4">
          Founded in 1920, our ice cream factory has been delivering delicious and innovative flavors for over a century. From our humble beginnings to becoming a household name, our commitment to quality and customer satisfaction has never wavered.
        </p>
        <img src="/path/to/history-photo.jpg" alt="History of the factory" className="history-photo w-full h-auto rounded-lg shadow-md" />
      </section>

      <section className="testimonials-section mb-8">
        <h1 className="text-3xl font-bold mb-4">Testimonials</h1>
        <div className="testimonial mb-4 p-4 bg-white rounded-lg shadow-md">
          <p className="text-lg italic">"The best ice cream I've ever had! The flavors are so unique and delicious."</p>
          <p className="text-right mt-2">- Happy Customer</p>
        </div>
        <div className="testimonial p-4 bg-white rounded-lg shadow-md">
          <p className="text-lg italic">"I can't get enough of their ice cream. It's a treat I look forward to every week."</p>
          <p className="text-right mt-2">- Ice Cream Lover</p>
        </div>
      </section>

      <section className="fun-fact-section">
        <h1 className="text-3xl font-bold mb-4">Fun Fact</h1>
        <p className="text-lg">
          Did you know? Our factory produces over 1 million gallons of ice cream every year, enough to fill 1.5 Olympic-sized swimming pools!
        </p>
      </section>
    </div>
  );
}

export default About;