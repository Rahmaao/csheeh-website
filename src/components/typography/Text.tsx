import { nunitoFont } from "@/app/fonts";
import React from "react";
import tw, { styled } from "twin.macro";

const Text = ({ children }: { children: React.ReactNode }) => {
  return <Root>{children}</Root>;
};

export default Text;

const Root = styled.p(() => [
  tw`w-full border-none text-[15px] lg:text-[17px] lg:leading-[28px] leading-[25px] font-[400] text-[#333333]`,
]);
