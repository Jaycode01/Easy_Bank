import React from "react";
import OnlineBanking from "../assets/icon-online.svg";
import SimpleBudgeting from "../assets/icon-budgeting.svg";
import FastOnboarding from "../assets/icon-onboarding.svg";
import OpenAPI from "../assets/icon-api.svg";

function Dependability() {
  return (
    <div className="flex flex-col bg-gray-200 mt-10 p-10 md:p-20 text-center md:text-left">
      <h1 className="text-5xl">Why choose EasyBank?</h1>
      <p className="text-xl mt-5">
        We leverage Open Banking to turn your bank account into your financial
        hub.
      </p>
      <p className="text-xl">Control your finances like never before.</p>
      <div className="flex md:flex-row w-full md:mt-24 mt-12 md:gap-10 gap-6 flex-col">
        <div className="">
          <img src={OnlineBanking} alt="" className="mx-auto" />
          <h2 className="text-2xl text-center">Online Banking</h2>
          <br />
          <p className="">
            Our mobile web and mobile application allows you to keep track of
            your finances anywhere you are in the world
          </p>
        </div>
        <div className="">
          <img src={SimpleBudgeting} alt="" className="mx-auto" />
          <h2 className="text-2xl text-center">Simple Budgeting</h2>
          <br />
          <p className="">
            See exactly where your money goes each month. Receive notifications
            when you are close to hitting your limits.
          </p>
        </div>
        <div className="">
          <img src={FastOnboarding} alt="" className="mx-auto" />
          <h2 className="text-2xl text-center">Fast Onboarding</h2>
          <br />
          <p className="">
            We don't do branches. Open your account online and start taking
            control of your finances right away.
          </p>
        </div>
        <div className="">
          <img src={OpenAPI} alt="" className="mx-auto" />
          <h2 className="text-2xl text-center">Open API</h2>
          <br />
          <p className="">
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dependability;
