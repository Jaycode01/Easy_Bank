import React from "react";
import Currency from "../assets/image-currency.jpg";
import Restaurant from "../assets/image-restaurant.jpg";
import Plane from "../assets/image-plane.jpg";
import Confetti from "../assets/image-confetti.jpg";

function Articles() {
  return (
    <div className="bg-VeryLightGray md:p-12 px-8 py-12">
      <h1 className="text-3xl md:text-4xl">Latest Articles</h1>

      <div className="mt-7 md:mt-10 flex flex-col md:flex-row gap-8 w-full">
        <div className="bg-white rounded-xl">
          <img src={Currency} alt="" className="w-full rounded-t-xl" />
          <p className="px-5 mt-7">By Claire Robinson</p>
          <h3 className="px-5 text-2xl">
            Receive money in any currency with no fees
          </h3>
          <p className="px-5 mt-5 pb-3">
            The world is becoming smaller and we are becoming more mobile. So
            why should you be forced to only receive money in a single...
          </p>
        </div>
        <div className="bg-white rounded-xl">
          <img src={Restaurant} alt="" className="w-full rounded-t-xl" />
          <p className="px-5 mt-7">By Wilson Hutton</p>
          <h3 className="px-5 text-2xl">
            Treat yourself with worrying about money
          </h3>
          <p className="px-5 mt-5 pb-3">
            Our simple budgeting feature allow you to seperate out your spending
            and set realistic limits each month. That means you...
          </p>
        </div>
        <div className="bg-white rounded-xl">
          <img src={Plane} alt="" className="w-full rounded-t-xl" />
          <p className="px-5 mt-7">By Wilson Hutton</p>
          <h3 className="px-5 text-2xl">
            Take your EasyBank card wherever you go
          </h3>
          <p className="px-5 pb-3 mt-5">
            We want you to enjoy ypur travels. This is why we don't charge any
            fees on purchases when you are abroad. We'll even show you...
          </p>
        </div>
        <div className="bg-white rounded-xl">
          <img src={Confetti} alt="" className="rounded-t-xl" />
          <p className="px-5 mt-7">By Claire Robinson</p>
          <h3 className="px-5 text-2xl">
            Our invite-only Beta accounts are now live!
          </h3>
          <p className="px-5 pb-3 mt-5">
            After alot of hard work by the whole team, we're excited to launch
            our closed beta. It's easy to request an invite through the site...
          </p>
        </div>
      </div>
    </div>
  );
  bg - white;
}

export default Articles;
