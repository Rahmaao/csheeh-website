import React from "react";
import tw, { css, styled } from "twin.macro";
import { recoletaLocalFont } from "@/app/fonts";

const SubHeader = ({ children }: { children: React.ReactNode }) => {
  return <Root className={recoletaLocalFont.className}>{children}</Root>;
};

export default SubHeader;

const Root = styled.div(() => [
  tw`w-full border-none text-[35px] leading-[48px] [letter-spacing: 0.02em] font-extrabold`,
]);

// font-family: Recoleta Alt;
// font-size: 35px;
// font-weight: 600;
// line-height: 48px;
// letter-spacing: 0.02em;
// text-align: left;