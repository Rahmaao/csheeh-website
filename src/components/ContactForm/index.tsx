"use client";
import Location from "@/assets/icons/Location.svg";
import Message from "@/assets/icons/Message.svg";
import facebook from "@/assets/icons/facebook.svg";
import instagram from "@/assets/icons/instagram.svg";
import phone from "@/assets/icons/phone.svg";
import SectionTag from "@/components/SectionTag/index";
import Image from "next/image";
import tw, { css, styled } from "twin.macro";
import SmallButton from "../SmallButton";

const index = () => {
  return (
    <Root>
      <ContactSection>
        <Card>
          <div className="py-8 lg:py-16 px-10 mx-auto max-w-screen-md">
            <form action="#" className="space-y-8">
              <div>
                <label className="block mb-2 text-sm font-medium text-[#333333]">
                  Name <span className="required-fields text-[red]">*</span>
                </label>
                <input
                  type="text"
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
                <textarea className="block p-2.5 w-full h-40 text-sm text-gray-900 rounded-lg shadow-sm border-[0.3px] focus:ring-1 ring-lightgreen outline-none border-[#C4C4C4] bg-[#ffff]"></textarea>
              </div>
              <div className="flex justify-center md:justify-end">
                <SmallButton>Submit</SmallButton>
              </div>
            </form>
          </div>
        </Card>
      </ContactSection>
      <section className="h-[500px] w-full flex justify-center items-center">
        <div className=" h-[70%] md:h-[60%] w-[80%] drop-shadow-[0px_2px_35px_0px_#3437CE80] bg-[#3D3F94] rounded-[13px] mt-20 flex flex-col md:flex-row justify-center items-center">
          <div className="h-[100%] w-[90%] md:w-[60%] flex flex-col justify-center items-center">
            <div className="h-[20%] w-[90%] flex justify-between">
              <SectionTag color="#ffffff" tag="VISIT OUR OFFICE" />
            </div>
            <div className="flex h-[50%] w-[90%]">
              <div className="w-[30px]">
                <div className="w-[50%]">
                  <Image src={Location} alt="Location" className="icon-1" />
                </div>
              </div>
              <div className="text-content ">
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
            <div className="flex h-[50%] flex-col justify-between">
              <div className="h-[30%] w-[90%] flex">
                <div className="w-[30px] h-[20px] flex justify-center items-center">
                  <div className="w-[60%]">
                    <Image src={Message} alt="Message" className="icon-1" />
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
                    <Image src={phone} alt="phone" className="icon-1" />
                  </div>
                </div>
                <div className="text-content">
                  <p className="text3 text-[10px] text-[#ffff] md:text-[10px] lg:text-[15px] pl-1">
                    +234 803 787 1487; +234 805 356 3370
                  </p>
                </div>
              </div>
              <div className="h-[22%] w-full md:w-[25%] flex justify-center md:justify-start items-center">
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
      </section>
    </Root>
  );
};

export default index;

const Root = styled.div(() => [tw`w-full h-[100vh]`, css``]);

const Card = styled.div(() => [
  tw`w-[80%] mt-12 md:mt-0 md:w-[75%] lg:w-[50%] h-[720px] md:h-[680px] bg-[#ffff] drop-shadow-md rounded-lg`,
  css``,
]);

const ContactSection = styled.div(() => [
  tw`bg-[#ffff] md:h-[50vh] lg:h-[80vh] flex flex-col justify-center items-center`,
  css`get-involved-section`,
]);
