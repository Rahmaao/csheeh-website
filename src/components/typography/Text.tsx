import { nunitoFont } from "@/app/fonts";
import React from "react";
import tw, { styled } from "twin.macro";

const Text = ({ children }: { children: React.ReactNode }) => {
  return <Root className={nunitoFont.className}>{children}</Root>;
};

export default Text;

const Root = styled.div(() => [
  tw`w-full border-none text-[15px] lg:text-[18px] lg:leading-[30px] leading-[25px] font-[400] text-[#333333]`,
]);
