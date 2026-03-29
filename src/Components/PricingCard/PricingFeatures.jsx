import { CircleCheckBig } from "lucide-react";
import React from "react";

const PricingFeatures = ({ f }) => {
  console.log(f);
  return (
    <p className="ml-5 flex p-2.5">
      <CircleCheckBig className="mr-1.5"></CircleCheckBig>
      {f}
    </p>
  );
};

export default PricingFeatures;
