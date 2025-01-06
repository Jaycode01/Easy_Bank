import React from "react";
import Logo from "../assets/logo.svg";
import FaceBook from "../assets/icon-facebook.svg";
import YouTube from "../assets/icon-youtube.svg";
import Twitter from "../assets/icon-twitter.svg";
import Pintrest from "../assets/icon-pinterest.svg";
import Instagram from "../assets/icon-instagram.svg";

function Footer() {
  return (
    <div className="bg-DarkBlue flex p-16 text-center md:text-left md:flex-row flex-col justify-between w-full gap-5 md:gap-0 mt-5">
      <div className="flex flex-col gap-7 text-center md:text-left">
        <div className="flex">
          <span className="text-white text-2xl mx-auto md:mx-0 text-center">
            easybank
          </span>
        </div>

        <div className="flex mx-auto md:mx-0 flex-row gap-5">
          <a href="#">
            <img src={FaceBook} alt="" />
          </a>
          <a href="#">
            <img src={YouTube} alt="" />
          </a>
          <a href="#">
            <img src={Twitter} alt="" />
          </a>
          <a href="#">
            <img src={Pintrest} alt="" />
          </a>
          <a href="#">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-2 md:gap-20">
        <div className="text-white flex flex-col gap-1 text-lg">
          <a href="">About us</a>
          <a href="">Contact</a>
          <a href="">Blog</a>
        </div>
        <div className="text-white flex flex-col gap-1 text-lg">
          <a href="">Careers</a>
          <a href="">Support</a>
          <a href="">Privacy Policy</a>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <button
          type="button"
          className="bg-easybank-gradient text-white w-fit text-lg px-6 rounded-full py-3 left md:mx-0 mx-auto"
        >
          Request Invite
        </button>
        <p className="text-white">&copy; EasyBank. All Right Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
