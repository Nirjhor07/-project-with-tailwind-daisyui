import React, { use } from "react";
import PricingCard from "../PricingCard/PricingCard";

const PricingData = ({ pricingDataPromise }) => {
  // console.log(pricingDataPromise)
  const pricingData = use(pricingDataPromise);
  const pricing = pricingData.pricing;
  //   console.log(pricing.id)
  // console.log(pricingData)
  return (
    <div className="space-y-2.5">
      <h2 className="text-4xl text-center">
        All pricing cards : {pricing.length}
      </h2>
      <div className="grid grid-cols-3 gap-3 p-4 ">
        {pricing.map((pricingCard) => (
          <PricingCard
            key={pricingCard.id}
            pricingCard={pricingCard}
          ></PricingCard>
        ))}
      </div>
    </div>
  );
};

export default PricingData;
