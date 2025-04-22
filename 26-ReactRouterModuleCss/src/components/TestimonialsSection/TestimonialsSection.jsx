import React from "react";
import TestimonialCard from "../Testimonial/Testimonial";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Thank you for putting together such a great product. We loved working with you...",
      name: "Client Name, Location",
    },
    {
      text: "The whole team was a huge help with putting things together...",
      name: "Client Name, Location",
    },
  ];

  return (
    <section className="text-center my-5">
      <h2>Customer testimonials</h2>
      <p>Our customers love working with us</p>
      <div className="d-flex flex-column align-items-center">
        {testimonials.map((t, idx) => (
          <TestimonialCard key={idx} {...t} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
