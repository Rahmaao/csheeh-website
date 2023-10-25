"use client";
import React from "react";
import logo from "@/assets/icons/logo.svg";
import tw, { styled, css } from "twin.macro";
import { openSansFont } from "@/app/fonts";
import Image from "next/image";

const index = () => {
  return (
    <Root>
      <LogoImage>
        <Image
          src={logo}
          alt="logo"
          className="flex justify-center items-center"
        />
      </LogoImage>
      <LogoText>
        <p className={openSansFont.className}>
          CENTRE FOR SCHOOL <br /> HEALTH EDUCATION AND ENVIRONMENTAL HYGIENE
        </p>
      </LogoText>
    </Root>
  );
};

export default index;

const Root = styled.div(() => [tw`flex items-center w-full h-full gap-3`]);

const LogoImage = styled.div(() => [
  tw`w-[40%] h-[85%] flex justify-center items-center`,
]);

const LogoText = styled.div(() => [
  tw`flex items-center text-[10px] md:text-[10px] xl:text-xs font-bold`,
]);
