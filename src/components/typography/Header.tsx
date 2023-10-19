import React from "react";
import tw, { css, styled } from "twin.macro";
import { recoletaLocalFont } from "@/app/fonts";

interface HeaderProps {
  text: string;
}

const Header = ({ children }: { children: React.ReactNode }) => {
  return <Root className={recoletaLocalFont.className}>{children}</Root>;
};

export default Header;

const Root = styled.div(() => [tw`w-full border-none text-[65px]`]);
