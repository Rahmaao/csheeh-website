"use client";

import React from "react";
import tw, { styled } from "twin.macro";
import Link from "next/link";
import Image from "next/image";
import LogoImage from "@/assets/images/logo.png";
import HeartIcon from "@/assets/icons/Heart.svg";
import { openSansFont } from "@/app/fonts";
import Button from "@/components/Button";
import ButtonImage from "@/components/Button/ButtonImage";

const LayoutHeader = () => {
  return (
    <>
      <Header>
        <Link href="/">
          <Logo>
            <Image src={LogoImage} alt="logo" width={71} height={78.65} />
            <LogoText className={openSansFont.className}>
              CENTRE FOR SCHOOL HEALTH EDUCATION AND ENVIRONMENTAL HYGIENE
            </LogoText>
          </Logo>
        </Link>
        <Navigation>
          <NavigationItems>
            {NavItems.map((navItem) => (
              <Link href={navItem.to} className="hover:text-[#058A51]">
                {navItem.text}
              </Link>
            ))}
          </NavigationItems>
          <Button>
            <ButtonImage src={HeartIcon} alt="heart" />
            Donate Now
          </Button>
        </Navigation>
      </Header>
      {/* Todo Sidebar */}
    </>
  );
};

const Header = tw.header`fixed z-50 flex w-full h-[120px] transition-all duration-200 xl:px-[80px] lg:px-[40px] bg-opacity-20 justify-between hidden lg:flex`;

const Logo = styled.div(() => [
  tw`h-full w-[287px] flex items-center gap-[12px]`,
]);

const LogoText = styled.p(() => [
  tw`text-[14px] h-[54px] w-[204px] text-white leading-[18px] font-bold`,
]);

const Navigation = styled.div(() => [
  tw`flex justify-between items-center gap-[15px] w-[600px]`,
]);

const NavItems = [
  {
    text: "About Us",
    to: "/about",
  },
  {
    text: "Get Involved",
    to: "/get-involved",
  },
  {
    text: "Media",
    to: "/media",
  },
  {
    text: "Contact Us",
    to: "/contact",
  },
];

const NavigationItems = styled.div(() => [
  tw`flex justify-between items-center text-white font-[600] leading-[19.07px] w-[400px] h-[50px]`,
]);

export default LayoutHeader;
