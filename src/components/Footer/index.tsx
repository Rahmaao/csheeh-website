"use client";
import React, { use } from "react";
import facebook from "@/assets/icons/facebook.svg";
import instagram from "@/assets/icons/instagram.svg";
import logo from "@/assets/icons/logo.svg";
import Location from "@/assets/icons/Location.svg";
import phone from "@/assets/icons/phone.svg";
import Message from "@/assets/icons/Message.svg";
import Image from "next/image";
import { nunitoFont } from "@/app/fonts";
import { openSansFont } from "@/app/fonts";
import tw, { styled, css } from "twin.macro";
import Logo from "@/components/Logo";

const index = () => {
  return (
    <Root className={nunitoFont.className}>
      <div className="main-footer grid md:grid-cols-2">
        <div className="card footer-section1 flex justify-center h-full">
          <div className="footer-content1 flex flex-col justify-evenly">
            <div className="footer-logo w-[50%] h-[33%]">
              <Logo />
            </div>
            <div className="footer-component2 flex">
              <div className="icon-img">
                <div className="img-icon">
                  <Image src={Location} alt="Location" className="icon-1" />
                </div>
              </div>
              <div className="text-content">
                <p className="text2 text-[8px] md:text-[10px] lg:text-xs">
                  Centre for School Health Education and Environmental Hygiene
                  (CSHEEH) <br />
                  Sentosa Park, Near Fire Service, Zone A 1st Gate, Legislative
                  Quarters, <br /> Apo, Abuja.
                </p>
              </div>
            </div>
            <div className="footer-component3 flex">
              <div className="icon-img">
                <div className="img-icon">
                  <Image src={Message} alt="Message" className="icon-1" />
                </div>
              </div>
              <div className="text-content">
                <p className="text3 text-[8px] md:text-[10px] lg:text-xs">
                  info@csheehnigeria.org
                </p>
              </div>
            </div>
            <div className="footer-component4 flex">
              <div className="icon-img">
                <div className="img-icon">
                  <Image src={phone} alt="phone" className="icon-1" />
                </div>
              </div>
              <div className="text-content">
                <p className="text3 text-[8px] md:text-[10px] lg:text-xs">
                  +234 803 787 1487; +234 805 356 3370
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card footer-section2 flex justify-center items-center md:h-full">
          <div className="footer-content2 flex flex-col items-center md:items-end justify-around md:justify-between">
            <div className="footer-component5 flex justify-between">
              <div className="footer-nav-items">
                <a href="">ABOUT US</a>
              </div>
              <div className="footer-nav-items">
                <a href="">GET INVOLVED</a>
              </div>
              <div className="footer-nav-items">
                <a href="">MEDIA</a>
              </div>
              <div className="footer-nav-items">
                <a href="">CONTACT US</a>
              </div>
            </div>
            <div className="footer-component6 flex justify-between items-center">
              <div className="logo-img1">
                <Image src={facebook} alt="facebook" className="icon-1" />
              </div>
              <div className="logo-img1">
                <Image src={instagram} alt="instagram" className="icon-1" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Copyright className={nunitoFont.className}>
        <hr className="h-[0.2px] w-[95%] mx-auto mt-3 border-0 bg-[#a3a3a343]" />
        <p className="text-[7px] md:text-[10px] font-thin tracking-wide text-white">
          Copyright © CSHEEH 2023. All rights reserved.
        </p>
      </Copyright>
    </Root>
  );
};

export default index;

const Root = styled.div(() => [
  tw`w-full h-[20em] flex flex-col bg-[#030426]`,
  css`footer-div`,
]);

const Copyright = styled.div(() => [
  tw`flex flex-col justify-evenly items-center w-full h-[20%] text-gray`,
  css``,
]);
