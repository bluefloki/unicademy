import React from "react";
import Navbar from "./Navbar";

export default function Plans() {
  const plans = [
    {
      id: 1,
      name: "Alpha",
      price: "20.0",
      duration: "Quarterly",
      imgPath: "alpha-plan.png",
    },
    {
      id: 2,
      name: "Beta",
      price: "15.0",
      duration: "Semiannually",
      imgPath: "beta-plan.png",
    },
    {
      id: 3,
      name: "Gamma",
      price: "12.5",
      duration: "Annually",
      imgPath: "gamma-plan.png",
    },
  ];

  return (
    <div>
      <Navbar />
      <h2 className="is-size-2 has-text-centered">Pricing</h2>
      <div className="container">
        <div class="columns has-text-centered" style={{ marginTop: 50 }}>
          {plans.map((plan) => {
            return <PlanCard key={plan.id} plan={plan} />;
          })}
        </div>
        <div className="has-text-centered">
          <button className="button is-primary">Become a Member</button>
        </div>
      </div>
    </div>
  );
}

const PlanCard = ({ plan: { name, price, duration, imgPath } }) => {
  return (
    <div class="column">
      <div className="box has-text-black">
        <h3 className="is-size-3">{name}</h3>
        <figure className="image" style={{ margin: 30 }}>
          <img src={require(`../assets/${imgPath}`)} />
        </figure>
        <p>
          <span>✔️</span> Unlimited access to all courses
        </p>
        <h2 className="is-size-2">${price}/Month</h2>
        <p>Billed {duration}</p>
      </div>
    </div>
  );
};
