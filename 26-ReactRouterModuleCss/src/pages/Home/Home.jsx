import React from "react";
import style from "../../assets/css/style.module.css";
import HeroSection from "../../components/Hero/Hero";
import FeatureCards from "../../components/Cards/Cards";
import PricingSection from "../../components/PricingSection/PricingSection";
import TestimonialsSection from "../../components/TestimonialsSection/TestimonialsSection";
import ContactForm from "../../components/Contact/Contact";

const Home = () => {
  return (
    <div className={style.title}>
      <HeroSection />
      <FeatureCards />
      <PricingSection />
      <TestimonialsSection />
      <ContactForm />
    </div>
  );
};

export default Home;
