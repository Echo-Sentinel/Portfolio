import React from "react";
import PricingCard from "../PricingCard/PricingCard";

const plans = [
  {
    title: { label: "FREE" },
    price: 0,
    highlighted: false,
    features: [
      { text: "1 users", included: true, bold: true },
      { text: "5GB storage", included: true },
      { text: "Unlimited public projects", included: true },
      { text: "Community access", included: true },
      { text: "Unlimited private projects", included: false },
      { text: "Dedicated support", included: false },
      { text: "Free linked domain", included: false },
      { text: "Monthly status reports", included: false },
    ],
  },
  {
    title: { label: "⭐ PRO" },
    price: 9,
    highlighted: true,
    features: [
      { text: "5 users", included: true, bold: true },
      { text: "5GB storage", included: true },
      { text: "Unlimited public projects", included: true },
      { text: "Community access", included: true },
      { text: "Unlimited private projects", included: true },
      { text: "Dedicated support", included: true },
      { text: "Free linked domain", included: true },
      { text: "Monthly status reports", included: false },
    ],
  },
  {
    title: { label: "ENTERPRISE" },
    price: 49,
    highlighted: false,
    features: [
      { text: "Unlimited users", included: true, bold: true },
      { text: "5GB storage", included: true },
      { text: "Unlimited public projects", included: true },
      { text: "Community access", included: true },
      { text: "Unlimited private projects", included: true },
      { text: "Dedicated support", included: true },
      { text: "Unlimited linked domains", included: true, bold: true },
      { text: "Monthly status reports", included: false },
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Pay as you grow</h2>
          <p className="text-muted">With our no hassle pricing plans</p>
        </div>
        <div className="row">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
