"use client";
import Location1 from "@/assets/icons/Location1.svg";
import Messaging from "@/assets/icons/Messaging.svg";
import FB from "@/assets/icons/FB.svg";
import IG from "@/assets/icons/IG.svg";
import phone1 from "@/assets/icons/Phone1.svg";
import SectionTag from "@/components/SectionTag/index";
import Image from "next/image";
import tw, { css, styled } from "twin.macro";
import SmallButton from "../SmallButton";
import Curve from "@/components/Curve";

const index = () => {
  return (
    <Root>
      <ContactSection>
        <Card>
          <div className="h-[100%] flex flex-col justify-center px-10 mx-auto max-w-screen-md">
            <form action="#" className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-[#333333]">
                  Name <span className="required-fields text-[red]">*</span>
                </label>
                <input
                  type="text"
                  id="senderName"
                  className="shadow-sm bg-gray-50 border-[0.3px] border-[#C4C4C4] text-gray-900 text-sm focus:ring-1 ring-lightgreen outline-none rounded-lg w-full p-2.5 bg-[#ffff]"
                  required
                />
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <div>
                  <label className="block mb-2 text-sm font-medium text-[#333333]">
                    Email address{" "}
                    <span className="required-fields text-[red]">*</span>
                  </label>
                  <input
                    type="email"
                    id="emailAddress"
                    className="shadow-sm bg-gray-50 border-[0.3px] border-[#C4C4C4] text-gray-900 text-sm focus:ring-1 ring-lightgreen outline-none rounded-lg w-full p-2.5 bg-[#ffff]"
                    required
                  ></input>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-[#333333]">
                    Phone number{" "}
                    <span className="required-fields text-[red]">*</span>
                  </label>
                  <input
                    type="tel"
                    className="shadow-sm bg-gray-50 border-[0.3px] border-[#C4C4C4] text-gray-900 text-sm focus:ring-1 ring-lightgreen outline-none rounded-lg w-full p-2.5 bg-[#ffff]"
                    required
                  ></input>
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-[#333333]">
                  Name of organization{" "}
                  <span className="required-fields text-[red]">*</span>
                </label>
                <input
                  type="text"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-[0.3px] border-[#C4C4C4] focus:ring-1 ring-lightgreen outline-none shadow-sm bg-[#ffff]"
                  required
                ></input>
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-[#333333]">
                  Message <span className="required-fields text-[red]">*</span>
                </label>
                <textarea
                  id="message"
                  className="block p-2.5 w-full h-40 text-sm text-gray-900 rounded-lg shadow-sm border-[0.3px] focus:ring-1 ring-lightgreen outline-none border-[#C4C4C4] bg-[#ffff]"
                ></textarea>
              </div>
              <div className="flex justify-center md:justify-end">
                <SmallButton>Submit</SmallButton>
              </div>
            </form>
          </div>
        </Card>
      </ContactSection>
      <section className="relative h-[500px] md:h-[400px] w-full flex justify-center items-start">
        <div className="h-[70%] md:h-[234px] lg:h-[234px] xl:h-[234px] w-[90%] xl:w-[80%] drop-shadow-[0px_2px_35px_0px_#3437CE80] bg-[#3D3F94] rounded-[13px] flex flex-col md:flex-row justify-center items-center">
          <div className="h-[100%] w-[90%] md:w-[60%] flex flex-col justify-center items-center">
            <div className="h-[20%] w-[90%] flex justify-between">
              <SectionTag color="#ffffff" tag="VISIT OUR OFFICE" />
            </div>
            <div className="flex h-[94px] w-[100%] md:w-[90%]">
              <div className="md:w-[30px] w-[20%] md:pt-0 pt-1">
                <div className="w-[80%]">
                  <Image src={Location1} alt="Location" className="icon-1" />
                </div>
              </div>
              <div className="flex items-start pt-1">
                <p className="text2 text-[#ffff] text-[10px] md:text-[10px] lg:text-[15px] leading-6">
                  <span className=" md:block">
                    Centre for School Health Education and Environmental Hygiene{" "}
                  </span>
                  <span className=" md:block"> (CSHEEH) </span>
                  <span className=" md:block">
                    Sentosa Park, Near Fire Service, Zone A 1st Gate,
                    Legislative{" "}
                  </span>
                  <span className=" md:block"> Quarters, Apo, Abuja. </span>
                </p>
              </div>
            </div>
          </div>
          <div className="h-[100%] w-[90%] md:w-[40%]  flex flex-col justify-center">
            <div className="h-[20%] w-full flex items-center">
              <SectionTag color="#ffffff" tag="CONTACT US DIGITALLY" />
            </div>
            <div className="flex h-[94px] flex-col justify-between">
              <div className="h-[30%] w-[90%] flex">
                <div className="w-[30px] h-[20px] flex justify-center items-center">
                  <div className="w-[60%]">
                    <Image src={Messaging} alt="Message" className="icon-1" />
                  </div>
                </div>
                <div className="text-content">
                  <p className="text3 text-[10px] text-[#ffff] md:text-[10px] lg:text-[15px] pl-1">
                    info@csheehnigeria.org
                  </p>
                </div>
              </div>
              <div className="h-[30%] w-[90%] flex">
                <div className="w-[30px] h-[20px] flex justify-center items-center">
                  <div className="w-[60%]">
                    <Image src={phone1} alt="phone" className="icon-1" />
                  </div>
                </div>
                <div className="text-content">
                  <p className="text3 text-[10px] text-[#ffff] md:text-[10px] lg:text-[15px] pl-1">
                    +234 803 787 1487; +234 805 356 3370
                  </p>
                </div>
              </div>
              <div className="h-[22%] w-[25%] flex justify-start items-center">
                <div className="logo-img1 w-[35%]">
                  <Image src={FB} alt="facebook" className="icon-1" />
                </div>
                <div className="logo-img1 w-[35%]">
                  <Image src={IG} alt="instagram" className="icon-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Curve fillColor="#030426" />
      </section>
    </Root>
  );
};

export default index;

const Root = styled.div(() => [tw`w-full`]);

const Card = styled.div(() => [
  tw`w-[80%] relative top-[-150px] lg:top-[-120px] md:w-[75%] lg:w-[713px] bg-[#ffff] py-[20px] lg:py-[50px] drop-shadow-md rounded-lg`,
]);

const ContactSection = styled.div(() => [
  tw`flex flex-col justify-center items-center`,
]);
