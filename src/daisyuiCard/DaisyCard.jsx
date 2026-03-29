import { CircleCheckBig } from "lucide-react";
import React from "react";

const daisyCard = ({ priceCrad }) => {
  const { plan, description, price, features, popular } = priceCrad;
  return (
    <div className="card w-full bg-base-100 shadow-sm">
      <div className="card-body ">
        {popular && (
          <span className="badge badge-xs badge-warning animate-pulse">
            Most Popular
          </span>
        )}
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">{plan}</h2>
          <span className="text-xl">{price}$ / month</span>
        </div>
        <p>{description}</p>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          {features.map((feature, index) => (
            <li key={index} className="flex">
              <CircleCheckBig className="mr-4"></CircleCheckBig>

              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-2">
          <button className="btn btn-primary btn-block">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default daisyCard;
