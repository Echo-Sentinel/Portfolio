import React from "react";
const ContactForm = () => (
  <section className="text-center">
    <h2>Get in touch</h2>
    <p>We'd love to hear from you</p>
    <form className="mx-auto" style={{ maxWidth: "500px" }}>
      <input
        type="text"
        placeholder="Full name"
        className="form-control mb-2"
      />
      <input
        type="email"
        placeholder="Email address"
        className="form-control mb-2"
      />
      <input
        type="text"
        placeholder="Phone number"
        className="form-control mb-2"
      />
      <textarea
        placeholder="Message"
        rows="4"
        className="form-control mb-3"
      ></textarea>
      <button className="btn btn-primary w-100">Submit</button>
    </form>
  </section>
);

export default ContactForm;
