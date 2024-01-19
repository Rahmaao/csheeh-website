"use client";

import tw, { styled } from "twin.macro";
import LogoImage from "@/assets/images/logo.png";
import Image from "next/image";
import HeartIcon from "@/assets/icons/Heart.svg";
import { openSansFont } from "@/app/fonts";
import Button from "@/components/Button";
import ButtonImage from "@/components/Button/ButtonImage";
import Link from "next/link";

const Index = () => {
  return (
    <Nav>
      <Link href="/">
        <Logo>
          <Image src={LogoImage} alt="logo" width={71} height={78.65} />
          <LogoText className={openSansFont.className}>
            CENTRE FOR SCHOOL HEALTH EDUCATION AND ENVIRONMENTAL HYGIENE
          </LogoText>
        </Logo>
      </Link>

      <Navigation>
        <NavItems>
          {/* <NavItem /> */}
          <Link href="/about" className="color-white">
            About
          </Link>
        </NavItems>
        <Button href="/donate">
          <ButtonImage src={HeartIcon} alt="heart" />
          Donate Now
        </Button>
      </Navigation>
    </Nav>
  );
};

export default Index;

const Nav = styled.nav(() => [
  tw`h-[120px] w-full bg-black px-[80px] flex justify-between`,
]);
const Logo = styled.div(() => [
  tw`h-full w-[287px] flex items-center gap-[12px]`,
]);
const LogoText = styled.p(() => [
  tw`text-[14px] h-[54px] w-[204px] text-white leading-[18px] font-bold`,
]);

const Navigation = styled.div(() => [
  tw`flex justify-between items-center gap-[15px]`,
]);

const NavItems = styled.div(() => [
  tw`flex justify-between items-center text-white font-[600] leading-[19.07px] w-[550px] h-[50px]`,
]);

const NavItem = styled.div(() => [tw`bg-yellow-200 h-12 w-12`]);
