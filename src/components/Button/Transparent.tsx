import React from "react";
import tw, { styled } from "twin.macro";
import { Nunito } from "next/font/google";

const nunitoFont = Nunito({ subsets: ["cyrillic"] });

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <Root type="button" className={nunitoFont.className}>
      {children}
    </Root>
  );
};

export default Button;

const Root = styled.button(() => [
  tw`w-fit bg-none h-[50px] rounded-[50px] gap-[9px] cursor-pointer flex flex-row items-center justify-center text-[#058A51] stroke-[#058A51] hover:text-[#A9CF46] hover:hover:text-[#A9CF46] font-[16px] font-[700] leading-[20.48px] text-center`,
]);
