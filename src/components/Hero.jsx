import React from "react";
import HeroImage from "../assets/image-mockups.png";

function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row px-3">
      <div className="md:pt-52 md:pl-20 flex flex-col md:gap-7 gap-5 pt-10  text-center md:text-left">
        <h1 className="md:text-6xl text-5xl">
          Next generation <br /> digital bank
        </h1>
        <p className="text-lg px-8 md:px-0">
          Take yout financial life online. Your EasyBank account will be a
          one-stop-shop for spending, saving, budgeting, investing and much more
        </p>
        <button
          type="button"
          className="bg-easybank-gradient py-3 px-6 rounded-full text-white text-lg w-fit mx-auto md:mx-0"
        >
          Request Invite
        </button>
      </div>
      <div className="md:bg-hero-background-desktop bg-hero-background-mobile bg-no-repeat bg-contain md:bg-cover bg-center w-full md:w-3/4 md:pl-48">
        <img src={HeroImage} alt="" className="w-full" />
      </div>
    </div>
  );
}

export default Hero;
