"use client";

import tw, { styled } from "twin.macro";
import LogoImage from "@/assets/images/logo.png";
import Image from "next/image";
import { openSansFont } from "@/app/fonts";

const Index = () => {
  return (
    <Nav>
      <Logo>
        <Image src={LogoImage} alt="logo" width={71} height={78.65} />
        <LogoText className={openSansFont.className}>
          CENTRE FOR SCHOOL HEALTH EDUCATION AND ENVIRONMENTAL HYGIENE
        </LogoText>
      </Logo>
    </Nav>
  );
};

export default Index;

const Nav = styled.nav(() => [tw`h-[120px] w-full bg-black px-[80px] py-[]`]);
const Logo = styled.div(() => [
  tw`h-full w-[287px] flex items-center gap-[12px]`,
]);
const LogoText = styled.p(() => [
  tw`text-[14px] h-[54px] w-[204px] text-white leading-[18px] font-bold`,
]);
