import React from "react";
import PricingFeatures from "./PricingFeatures";

const PricingCard = ({ pricingCard }) => {
//   console.log(pricingCard);
  const { plan, price, description, features } = pricingCard;
  return (
    <div className="bg-violet-300 border-amber-800 rounded-2xl shadow card ">
      <div className="text-center font-bold text-3xl">
        <h1>Membership : {plan}</h1>
        <h2>Price: {price}</h2>
      </div>
      <div>
        <p className="text-center text-2xl mt-1.5 mb-1.5">{description}</p>
      </div>
      <div>
        {/* features */}
        {features.map((f,index)=><PricingFeatures key={index} f={f}></PricingFeatures>)}
      </div>
    </div>
  );
};

export default PricingCard;
