import React, { use } from "react";
import PricingCard from "../PricingCard/PricingCard";
import DaisyCard from "../../daisyuiCard/DaisyCard";

const PricingData = ({ pricingDataPromise }) => {
  // console.log(pricingDataPromise)
  const pricingData = use(pricingDataPromise);
  const pricing = pricingData.pricing;
  //   console.log(pricing.id)
  // console.log(pricingData)
  return (
    <div className="space-y-2.5 mt-7.5">
      <h2 className="text-4xl text-center font-extrabold">
        All pricing cards : {pricing.length}
      </h2>
      {/* <div className="grid grid-cols-3 gap-3 p-4 ">
        {pricing.map((pricingCard) => (
          <PricingCard
            key={pricingCard.id}
            pricingCard={pricingCard}
          ></PricingCard>
        ))}
      </div> */}

      {/* daisyUi cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {pricing.map((priceCrad) => (
          <DaisyCard key={priceCrad.id} priceCrad={priceCrad}></DaisyCard>
        ))}
      </div>
    </div>
  );
};

export default PricingData;
