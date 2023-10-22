"use client";
import React from "react";
import tw, { styled, css } from "twin.macro";
import Button from "../Button";
import Chris from "@/assets/images/Chris.jpg";
import Image from "next/image";
import { recoletaLocalFont } from "@/app/fonts";


const index = () => {
  return (
    <Root>
      <div className="get-involved-hero bg-green-400 h-[100vh]"></div>
      <GetInvolvedSection>  
      <Card>
        <div className="get-involved-text flex flex-col md:justify-start md:items-start items-center w-[100%] h-[60%] md:w-[60%] md:h-[75%] bg-red-300">
          <div className="get-involved-text1 w-[70%] md:w-[50%] h-[12%] md:h-[20%] bg-purple-400 flex items-center md:justify-start justify-center">
            <GetInvolvedText1 className={recoletaLocalFont.className}>Make a donation</GetInvolvedText1>
          </div>
          <div className="get-involved-text2 pt-3 md:pt-0 text-[11px] lg:text-[15px] w-full md:w-[80%] h-[76%] md:h-[70%] bg-blue-500 md:text-left text-center">
            <p>Every donation, no matter the size, plays a crucial role in helping us achieve these goals. With your support, we can provide children with healthier and more inspiring places to learn, ensure the safety of our communities, and empower individuals to thrive. By contributing to our cause, you're not just donating; you're investing in a brighter future. Join us in this meaningful journey of transformation, and together, we can build a healthier, safer, and more vibrant world for all.</p>
          </div>
          <div className="get-involved-btn w-[45%] md:w-[30%] md:h-[20%] h-[12%] bg-yellow-300">
            
          </div>

        </div>
        <div className="get-involved-img h-[40%] w-[80%] md:w-[40%] md:h-full bg-indigo-50 flex justify-center items-end md:items-center ">
          <GetInvolvedImage>
            <Image className=" w-[93%] h-[93%] rounded-full" src={Chris} alt="Location" />
          </GetInvolvedImage>
        </div>

      </Card>
      
      </GetInvolvedSection>
      <div className=" bg-orange-300 h-[100vh]"></div>
      <GetInvolvedSection>  
      <Card>
        <div className="get-involved-text flex flex-col md:justify-start md:items-start items-center w-[100%] h-[60%] md:w-[60%] md:h-[75%] bg-red-300">
          <div className="get-involved-text1 w-[70%] md:w-[50%] h-[12%] md:h-[20%] bg-purple-400 flex items-center md:justify-start justify-center">
            <GetInvolvedText1 className={recoletaLocalFont.className}>Make a donation</GetInvolvedText1>
          </div>
          <div className="get-involved-text2 pt-3 md:pt-0 text-[11px] lg:text-[15px] w-full md:w-[80%] h-[76%] md:h-[70%] bg-blue-500 md:text-left text-center">
            <p>Every donation, no matter the size, plays a crucial role in helping us achieve these goals. With your support, we can provide children with healthier and more inspiring places to learn, ensure the safety of our communities, and empower individuals to thrive. By contributing to our cause, you're not just donating; you're investing in a brighter future. Join us in this meaningful journey of transformation, and together, we can build a healthier, safer, and more vibrant world for all.</p>
          </div>
          <div className="get-involved-btn w-[45%] md:w-[30%] md:h-[20%] h-[12%] bg-yellow-300">
            
          </div>

        </div>
        <div className="get-involved-img h-[40%] w-[80%] md:w-[40%] md:h-full bg-indigo-50 flex justify-center items-end md:items-center ">
          <GetInvolvedImage>
            <Image className=" w-[93%] h-[93%] rounded-full" src={Chris} alt="Location" />
          </GetInvolvedImage>
        </div>

      </Card>
      
      </GetInvolvedSection>

    </Root>
  )
}

export default index

const Root = styled.div(() => [
  tw`w-full h-[100vh] bg-slate-600`,
  css``,
]); 

const Card = styled.div(() => [
  tw`w-[85%] h-[90%] md:h-[50%] lg:h-[70%] bg-[magenta] flex md:flex-row flex-col justify-center items-center`,
  css``,
]);

const GetInvolvedSection = styled.div(() => [
  tw`bg-[brown] h-[85vh] md:h-[50vh] lg:h-[100vh] flex justify-center items-center`,
  css``,
]);

const GetInvolvedText1 = styled.div(() => [
  tw`text-[18px] md:text-[18px] lg:text-[27px] font-extrabold`,
  css``,
]);

const GetInvolvedImage = styled.div(() => [
  tw`border border-solid border-[grey] w-[200px] h-[200px] md:w-[230px] md:h-[230px] lg:w-[300px] lg:h-[300px] xl:w-[380px] xl:h-[380px] rounded-full flex justify-center items-center `,
  css``,
]);

