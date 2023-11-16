"use client";

import React from "react";
import tw, { styled, css } from "twin.macro";
import SmallButton from "../SmallButton";
import Chris from "@/assets/images/Chris.jpg";
import Volunteer from "@/assets/images/Volunteer.png";
import Donations from "@/assets/images/Donations.png";
import Partners from "@/assets/images/Partners.png";
import Heart from "@/assets/icons/Heart.svg";
import Image from "next/image";
import { recoletaLocalFont } from "@/app/fonts";
import { recoletaboldLocalFont } from "@/app/fonts";
import { recoletasemiboldLocalFont } from "@/app/fonts";

const index = () => {
  return (
    <Root>
      {/* <div className="get-involved-hero bg-green-400 h-[100vh]"></div> */}
      <GetInvolvedSection>  
      <Card>
        <div className="get-involved-text flex flex-col md:justify-between md:items-start items-center w-[100%] h-[60%] md:w-[60%] md:h-[90%] lg:h-[75%]">
          <div className="get-involved-text1 w-[70%] md:w-[50%] h-[12%] md:h-[20%] flex items-center md:items-start md:justify-start justify-center">
            <GetInvolvedText1 className={recoletaboldLocalFont.className}>Make a donation</GetInvolvedText1>
          </div>
          <div className="get-involved-text2 pt-3 md:pt-0 text-[11px] lg:text-[17px] w-full md:w-[80%] h-fit md:h-fit md:text-left text-center">
            <p>Every donation, no matter the size, plays a crucial role in helping us achieve these goals. With your support, we can provide children with healthier and more inspiring places to learn, ensure the safety of our communities, and empower individuals to thrive. By contributing to our cause, you're not just donating; you're investing in a brighter future. Join us in this meaningful journey of transformation, and together, we can build a healthier, safer, and more vibrant world for all.</p>

          </div>
          <div className="get-involved-img h-[40%] w-[80%] md:w-[40%] md:h-full flex justify-center items-end md:items-center ">
            <GetInvolvedImage>
              <Image
                className=" w-[93%] h-[93%] rounded-full"
                src={Donations}
                alt="Location"
              />
            </GetInvolvedImage>
          </div>
        </Card>
      </GetInvolvedSection>
      <GetInvolvedSection>
        <div className="w-[85%] h-[480px] md:h-[50%] lg:h-[70%] flex md:flex-row md:justify-between flex-col justify-center items-center">
          <div className="get-involved-img h-[204.2px] w-[80%] md:w-[40%] md:h-full flex justify-center items-end md:items-center ">
            <GetInvolvedImage>
              <Image
                className=" w-[93%] h-[93%] rounded-full"
                src={Volunteer}
                alt="Location"
              />
            </GetInvolvedImage>
          </div>
          <div className="get-involved-text flex flex-col md:justify-evenly md:items-start items-center w-[100%] h-[45%] md:w-[50%] md:h-[80%]">
            <div className="get-involved-text1 w-[70%] md:w-[50%] h-[36.75px] md:h-[20%] flex items-center md:items-end md:justify-start justify-center">
              <GetInvolvedText1 className={recoletaboldLocalFont.className}>
                Volunteer with us
              </GetInvolvedText1>
            </div>
            <div className="get-involved-text2 pt-3 md:pt-0 text-[11px] lg:text-[15px] w-full md:w-[100%] h-fit md:h-fit md:text-left text-center">
              <p>
                Are you interested in volunteering with CSHEEH? You can forward
                an application to our email address{" "}
                <span className="get-involved-mail">
                  volunteer@csheehnigeria.org
                </span>{" "}
                or fill our volunteer application form using the button below.
                We look forward to hearing from you.
              </p>
            </div>
            <div className="get-involved-btn w-[45%] md:w-[30%] md:h-[20%] h-[72px] flex md:justify-start justify-center items-end md:items-center">
              <SmallButton>Apply Now</SmallButton>
            </div>
          </div>
        </div>
      </GetInvolvedSection>
      <GetInvolvedSection>
        <Card>
          <div className="get-involved-text flex flex-col md:justify-evenly md:items-start items-center w-[100%] h-[60%] md:w-[60%] md:h-[90%]">
            <div className="get-involved-text1 w-[85%] md:w-[70%] h-[12%] md:h-[20%] flex items-center md:items-end md:justify-start justify-center">
              <GetInvolvedText1 className={recoletaboldLocalFont.className}>
                Become one of our partners
              </GetInvolvedText1>
            </div>
            <div className="get-involved-text2 pt-3 md:pt-0 text-[11px] lg:text-[15px] w-full md:w-[87%] h-fit md:h-fit md:text-left text-center">
              <p>
                Individuals and organizations that desire to partner with CSHEEH
                may forward their proposals to our official email address{" "}
                <span className="get-involved-mail">
                  info@csheehnigeria.org
                </span>{" "}
                or fill our contact form. We also welcome donations and grants
                from individuals and organizations. All donations are channeled
                strictly towards the realization of the organization’s
                objectives and account will be given where necessary.
              </p>
            </div>
            <div className="get-involved-btn w-[45%] md:w-[30%] md:h-[20%] h-[24%] flex md:justify-start justify-center items-end md:items-center">
              <SmallButton>Contact Us</SmallButton>
            </div>
          </div>
          <div className="get-involved-img h-[40%] w-[80%] md:w-[40%] md:h-full flex justify-center items-end md:items-center ">
            <GetInvolvedImage>
              <Image
                className=" w-[93%] h-[93%] rounded-full"
                src={Partners}
                alt="Location"
              />
            </GetInvolvedImage>
          </div>
        </Card>
      </GetInvolvedSection>
    </Root>
  );
};

export default index;

const Root = styled.div(() => [tw`w-full h-[100vh] bg-slate-600`, css``]);

const Card = styled.div(() => [
  tw`w-[85%] h-[500px] lg:w-[80%] md:h-[50%] lg:h-[70%] flex md:flex-row flex-col justify-center items-center`,
  css``,
]);

const GetInvolvedSection = styled.div(() => [
  tw`bg-[#ffff] md:h-[50vh] lg:h-[100vh] flex justify-center items-center pt-12 md:pt-0`,
  css`get-involved-section`,
]);

const GetInvolvedText1 = styled.div(() => [
  tw`text-[18px] md:text-[18px] lg:text-[27px] font-[1000] tracking-wide`,
  css``,
]);

const GetInvolvedImage = styled.div(() => [
  tw`border border-solid border-[#C4C4C4] w-[200px] h-[200px] md:w-[230px] md:h-[230px] lg:w-[300px] lg:h-[300px] xl:w-[380px] xl:h-[380px] rounded-full flex justify-center items-center `,
  css``,
]);
