import React from "react";
import tw, { css, styled } from "twin.macro";
import { recoletaLocalFont } from "@/app/fonts";

const SubHeader = ({ children }: { children: React.ReactNode }) => {
  return <Root className={recoletaLocalFont.className}>{children}</Root>;
};

export default SubHeader;

const Root = styled.div(() => [
  tw`w-full border-none text-[35px] leading-[48px] [letter-spacing: 0.02em] font-extrabold lg:text-left`,
]);
