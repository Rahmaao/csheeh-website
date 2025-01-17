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
import Link from "next/link";

const index = () => {
  return (
    <Root className={nunitoFont.className}>
      <div className="main-footer h-[90%] md:h-[80%] grid md:grid-cols-2 pt-7 md:pt-0">
        <div className="card footer-section1 flex justify-center h-full">
          <div className="pb-6 md:pb-0 footer-content1 w-[90%] md:w-[80%] flex flex-col justify-around">
            <div className="footer-logo w-[70%] md:w-[50%] h-[40%] md:h-[33%] md:mt-[8px] md:mb-[15px]">
              <Link href="/">
                <Logo />
              </Link>
            </div>
            <div className="footer-component2 flex">
              <div className="icon-img w-[8%] md:w-[5%] pt-[4px] md:pt-[2px]">
                <div className="img-icon w-[100%] md:w-[60%] h-[15px] md:h-[13px]">
                  <Image src={Location} alt="Location" className="icon-1" />
                </div>
              </div>
              <div className="text-content w-[95%] lg:w-[430px]">
                <p className="text2 text-xs pl-2 md:pl-0">
                  Centre for School Health Education and Environmental Hygiene
                  (CSHEEH) Sentosa Park, Near Fire Service, Zone A 1st Gate,
                  Legislative Quarters, Apo, Abuja.
                </p>
              </div>
            </div>
            <div className="footer-component3 flex">
              <div className="icon-img w-[8%] md:w-[5%] pt-[4px] md:pt-[2px]">
                <div className="img-icon w-[100%] md:w-[60%] h-[15px] md:h-[13px]">
                  <Image src={Message} alt="Message" className="icon-1" />
                </div>
              </div>
              <div className="text-content">
                <p className="text3 text-xs pl-2 md:pl-0">info@csheeh.org</p>
              </div>
            </div>
            <div className="footer-component4 flex">
              <div className="icon-img w-[8%] md:w-[5%] pt-[4px] md:pt-[2px]">
                <div className="img-icon w-[100%] md:w-[60%] h-[15px] md:h-[13px]">
                  <Image src={phone} alt="phone" className="icon-1" />
                </div>
              </div>
              <div className="text-content">
                <p className="text3 text-xs pl-2 md:pl-0">
                  +234 803 787 1487; +234 805 356 3370
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card footer-section2 flex justify-center items-center md:h-full">
          <div className="w-[90%] h-[100%] pt-0 md:pt-[15px] flex flex-col items-center md:items-end justify-evenly md:justify-between">
            <div className="w-full md:w-[80%] h-[30%] md:h-[20%] pb-2 md:pb-0 footer-component5 flex items-start justify-between md:justify-between">
              <div className="footer-nav-items">
                <Link href="/about">ABOUT US</Link>
              </div>
              <div className="footer-nav-items">
                <Link href="/get-involved">GET INVOLVED</Link>
              </div>
              <div className="footer-nav-items">
                <Link href="/media">MEDIA</Link>
              </div>
              <div className="footer-nav-items">
                <Link href="/contact">CONTACT US</Link>
              </div>
            </div>
            <div className="w-[110px] md:w-[20%] h-[35px] md:h-[35%] flex justify-between items-center">
              <div className="logo-img1 w-[50%] md:w-[35%]">
                <Image src={facebook} alt="facebook" className="icon-1" />
              </div>
              <div className="logo-img1 w-[50%] md:w-[35%]">
                <Image src={instagram} alt="instagram" className="icon-1" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Copyright className={nunitoFont.className}>
        <p className="text-[10px] font-thin tracking-wide text-white">
          Copyright © CSHEEH 2024. All rights reserved.
        </p>
      </Copyright>
    </Root>
  );
};

export default index;

const Root = styled.div(() => [
  tw`w-full h-[40em] md:h-[20em] flex flex-col bg-[#030426] justify-between`,
  css`footer-div`,
]);

const Copyright = styled.div(() => [
  tw`flex flex-col justify-evenly items-center w-full h-[10%] text-gray border-t-1 border-[#a3a3a343]`,
  css``,
]);
