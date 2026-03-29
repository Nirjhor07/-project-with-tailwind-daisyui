import { Suspense } from "react";
import "./App.css";
import Navbar from "./Components/Nav/Navbar";
import PricingData from "./Components/PricingData/PricingData";

const pricingData = async () => {
  const res = await fetch("../public/Pricing.json");
  return res.json();
};

function App() {
  const pricingDataPromise = pricingData();
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Suspense
          fallback={<span className="loading loading-bars loading-lg"></span>}
        >
          <PricingData pricingDataPromise={pricingDataPromise}></PricingData>
        </Suspense>
      </main>
    </>
  );
}

export default App;
