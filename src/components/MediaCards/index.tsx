"use client";
import React from "react";
import tw, { styled, css } from "twin.macro";
import brush from "@/assets/images/brush.png";
import dental from "@/assets/images/dental.png";
import dental2 from "@/assets/images/dental2.png";
import handwash from "@/assets/images/handwash.png";
import handwashing from "@/assets/images/handwashing.png";
import taps from "@/assets/images/taps.png";
import health from "@/assets/images/health.png";
import hepatitis from "@/assets/images/hepatitis.png";
import pads from "@/assets/images/pads.png";
import Image from "next/image";
import { recoletaLocalFont } from "@/app/fonts";
import { recoletaboldLocalFont } from "@/app/fonts";
import { recoletasemiboldLocalFont } from "@/app/fonts";

const index = () => {
  return (
    <Root>
      <div className="get-involved-hero bg-green-400 h-[100vh]"></div>
      <MediaSection>
        <div className="media-text w-full h-[15%]   md:pl-[75px] flex md:justify-normal justify-center items-center">
          <div className="media-text-card w-[85%] lg:w-[50%] h-[80%] lg:h-[80%] md:h-[50%]  flex flex-col justify-center items-center md:items-start">
            <MediaText1 className={recoletasemiboldLocalFont.className}>
              News, Press + Featured Articles
            </MediaText1>
            <div className="media-text2 text-[15px] w-[90%] h-[35%] text-center md:text-left  flex items-center">
              <p>
                Stay informed and inspired with our latest news and featured
                articles, offering insights, updates, and success stories.
              </p>
            </div>
          </div>
        </div>
        <div className="media-cards w-full h-[85%] bg-[#ffff] flex flex-col justify-evenly items-center">
          <MediaCard>
            <a target="_blank" href="https://nannews.ng/2023/10/19/organisation-calls-for-coordinated-efforts-in-pursuit-of-universal-hand-hygiene/" className="media-card w-[100%] md:w-[85%] lg:w-[30%] h-[30%] lg:h-[90%]  flex lg:flex-col items-center">
              <div className="media-image h-full lg:h-[75%] w-[50%] lg:w-full  flex justify-center items-center">
                <MediaImage>
                  <Image
                    className=" w-[93%] h-[93%] rounded-full"
                    src={taps}
                    alt="Location"
                  />
                </MediaImage>
              </div>
              <div className="media-img-text h-[50%] lg:h-[25%] w-[50%] lg:w-[90%] lg:pt-4  flex flex-col items-center justify-evenly">
                <p className="text-[10px] md:text-[13px] font-bold text-center">
                  NGO Donates Handwashing Facilities To FCT School
                </p>
                <span className="block text-[#058A51] text-[10px] md:text-[12px] font-semibold">
                  <p>OCTOBER 21, 2023</p>
                </span>
              </div>
            </a>
            <a target="_blank" href="https://www.abujadigest.info/stories/education/ngo-donates-handwashing-facilities-to-fct-school/" className="media-card w-[100%] md:w-[85%] lg:w-[30%] h-[30%] lg:h-[90%]  flex lg:flex-col items-center">
              <div className="media-image h-full lg:h-[75%] w-[50%] lg:w-full  flex justify-center items-center">
                <MediaImage>
                  <Image
                    className=" w-[93%] h-[93%] rounded-full"
                    src={handwashing}
                    alt="Location"
                  />
                </MediaImage>
              </div>
              <div className="media-img-text h-[50%] lg:h-[25%] w-[50%] lg:w-[90%] lg:pt-4  flex flex-col items-center justify-evenly">
                <p className="text-[10px] md:text-[13px] font-bold text-center">
                  Organisation calls for coordinated efforts in pursuit of
                  universal hand hygiene
                </p>
                <span className="block text-[#058A51] text-[10px] md:text-[12px] font-semibold">
                  <p>OCTOBER 19, 2023</p>
                </span>
              </div>
            </a>
            <a target="_blank" href="https://www.abujadigest.info/stories/health/world-menstrual-hygiene-day-stakeholders-call-for-early-pre-menstrual-counseling/" className="media-card w-[100%] md:w-[85%] lg:w-[30%] h-[30%] lg:h-[90%]  flex lg:flex-col items-center">
              <div className="media-image h-full lg:h-[75%] w-[50%] lg:w-full  flex justify-center items-center">
                <MediaImage>
                  <Image
                    className=" w-[93%] h-[93%] rounded-full"
                    src={pads}
                    alt="Location"
                  />
                </MediaImage>
              </div>
              <div className="media-img-text h-[50%] lg:h-[25%] w-[50%] lg:w-[100%] lg:pt-4  flex flex-col items-center justify-evenly">
                <p className="text-[10px] md:text-[13px] font-bold text-center">
                  World Menstrual Hygiene Day: Stakeholders Call for Early
                  Pre-menstrual Counseling
                </p>
                <span className="block text-[#058A51] text-[10px] md:text-[12px] font-semibold">
                  <p>MAY 30, 2023</p>
                </span>
              </div>
            </a>
          </MediaCard>
          <MediaCard>
            <a target="_blank" href="https://www.ethiopianewsobserver.com/csheeh-unilever-partner-to-integrate-oral-hygiene-into-school-curricula-founder/" className="media-card w-[100%] md:w-[85%] lg:w-[30%] h-[30%] lg:h-[90%]  flex lg:flex-col items-center">
              <div className="media-image h-full lg:h-[75%] w-[50%] lg:w-full  flex justify-center items-center">
                <MediaImage>
                  <Image
                    className=" w-[93%] h-[93%] rounded-full"
                    src={brush}
                    alt="Location"
                  />
                </MediaImage>
              </div>
              <div className="media-img-text h-[50%] lg:h-[25%] w-[50%] lg:w-[90%] lg:pt-4  flex flex-col items-center justify-evenly">
                <p className="text-[10px] md:text-[13px] font-bold text-center">
                  CSHEEH, Unilever partner to integrate oral hygiene into school
                  curricula
                </p>
                <span className="block text-[#058A51] text-[10px] md:text-[12px] font-semibold">
                  <p>MARCH 23, 2023</p>
                </span>
              </div>
            </a>
            <a target="_blank" href="https://www.abujadigest.info/stories/health/stakeholders-call-for-improved-dental-health-infrastructure-in-primary-health-centers/" className="media-card w-[100%] md:w-[85%] lg:w-[30%] h-[30%] lg:h-[90%]  flex lg:flex-col items-center">
              <div className="media-image h-full lg:h-[75%] w-[50%] lg:w-full  flex justify-center items-center">
                <MediaImage>
                  <Image
                    className=" w-[93%] h-[93%] rounded-full"
                    src={dental2}
                    alt="Location"
                  />
                </MediaImage>
              </div>
              <div className="media-img-text h-[50%] lg:h-[25%] w-[50%] lg:w-[100%] lg:pt-4  flex flex-col items-center justify-evenly">
                <p className="text-[10px] md:text-[13px] font-bold text-center">
                  Stakeholders Call for Improved Dental Health infrastructure in
                  Primary Health Centers
                </p>
                <span className="block text-[#058A51] text-[10px] md:text-[12px] font-semibold">
                  <p>MARCH 20, 2023</p>
                </span>
              </div>
            </a>
            <a target="_blank" href="https://www.abujadigest.info/stories/health/world-hepatitis-day-fct-residents-get-free-vaccination/" className="media-card w-[100%] md:w-[85%] lg:w-[30%] h-[30%] lg:h-[90%]  flex lg:flex-col items-center">
              <div className="media-image h-full lg:h-[75%] w-[50%] lg:w-full  flex justify-center items-center">
                <MediaImage>
                  <Image
                    className=" w-[93%] h-[93%] rounded-full"
                    src={hepatitis}
                    alt="Location"
                  />
                </MediaImage>
              </div>
              <div className="media-img-text h-[50%] lg:h-[25%] w-[50%] lg:w-[90%] lg:pt-4  flex flex-col items-center justify-evenly">
                <p className="text-[10px] md:text-[13px] font-bold text-center">
                  World Hepatitis Day: FCT Residents Get Free Vaccination
                </p>
                <span className="block text-[#058A51] text-[10px] md:text-[12px] font-semibold">
                  <p>JULY 28, 2022</p>
                </span>
              </div>
            </a>
          </MediaCard>
          <MediaCard>
            <a target="_blank" href="https://www.abujadigest.info/stories/health/health-education-group-conducts-impact-assessment-of-hygiene-facilities/" className="media-card w-[100%] md:w-[85%] lg:w-[30%] h-[30%] lg:h-[90%]  flex lg:flex-col items-center">
              <div className="media-image h-full lg:h-[75%] w-[50%] lg:w-full  flex justify-center items-center">
                <MediaImage>
                  <Image
                    className=" w-[93%] h-[93%] rounded-full"
                    src={health}
                    alt="Location"
                  />
                </MediaImage>
              </div>
              <div className="media-img-text h-[50%] lg:h-[25%] w-[50%] lg:w-[90%] lg:pt-4  flex flex-col items-center justify-evenly">
                <p className="text-[10px] md:text-[13px] font-bold text-center">
                Health Education: Group Conducts Impact Assessment of Hygiene Facilities
                </p>
                <span className="block text-[#058A51] text-[10px] md:text-[12px] font-semibold">
                  <p>MARCH 24, 2022</p>
                </span>
              </div>
            </a>
            <a target="_blank" href="https://sunnewsonline.com/world-oral-health-day-ngo-partners-with-dental-association-unilever-to-enlighten-pupils/" className="media-card w-[100%] md:w-[85%] lg:w-[30%] h-[30%] lg:h-[90%]  flex lg:flex-col items-center">
              <div className="media-image h-full lg:h-[75%] w-[50%] lg:w-full  flex justify-center items-center">
                <MediaImage>
                  <Image
                    className=" w-[93%] h-[93%] rounded-full"
                    src={dental}
                    alt="Location"
                  />
                </MediaImage>
              </div>
              <div className="media-img-text h-[50%] lg:h-[25%] w-[50%] lg:w-[100%] lg:pt-4  flex flex-col items-center justify-evenly">
                <p className="text-[10px] md:text-[13px] font-bold text-center">
                World Oral Health Day: NGO partners with dental association, Unilever to enlighten pupils
                </p>
                <span className="block text-[#058A51] text-[10px] md:text-[12px] font-semibold">
                  <p>MARCH 24, 2022</p>
                </span>
              </div>
            </a>
            <a target="_blank" href="https://globalhandwashing.org/global-handwashing-day/take-action/submit-events/view-events/csheeh-celebrates-global-handwashing-day-2017-in-nigeria/" className="media-card w-[100%] md:w-[85%] lg:w-[30%] h-[30%] lg:h-[90%]  flex lg:flex-col items-center">
              <div className="media-image h-full lg:h-[75%] w-[50%] lg:w-full  flex justify-center items-center">
                <MediaImage>
                  <Image
                    className=" w-[93%] h-[93%] rounded-full"
                    src={handwash}
                    alt="Location"
                  />
                </MediaImage>
              </div>
              <div className="media-img-text h-[50%] lg:h-[25%] w-[50%] lg:w-[90%] lg:pt-4  flex flex-col items-center justify-evenly">
                <p className="text-[10px] md:text-[13px] font-bold text-center">
                CSHEEH celebrates Global Handwashing Day 2017 in Nigeria
                </p>
                <span className="block text-[#058A51] text-[10px] md:text-[12px] font-semibold">
                  <p>OCTOBER 17, 2017</p>
                </span>
              </div>
            </a>
          </MediaCard>
        </div>
      </MediaSection>
    </Root>
  );
};

export default index;

const Root = styled.div(() => [tw`w-full h-[100vh] bg-slate-600`, css``]);

const MediaSection = styled.div(() => [tw` h-[250vh]`, css``]);

const MediaText1 = styled.div(() => [
  tw`text-[22px] md:text-[27px] w-full h-[32%] tracking-wide text-center flex items-center md:justify-normal justify-center`,
  css``,
]);

const MediaCard = styled.div(() => [
  tw` w-[80%] lg:w-[90%] h-[30%] flex lg:flex-row flex-col justify-between items-center`,
  css``,
]);

//   NOTE I need to find how to make that CSS work so i can reduce the size of the image and font in 375px and less screens.

const MediaImage = styled.div(() => [
  tw`border border-solid border-[#C4C4C4] w-[145px] h-[145px] md:w-[210px] md:h-[210px] lg:w-[260px] lg:h-[260px] rounded-full flex justify-center items-center `,
  css``,
]);
