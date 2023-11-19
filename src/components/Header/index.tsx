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
import useWindowDimensions from "@/app/hooks/useWindowDimensions";

const LayoutHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { width, height } = useWindowDimensions();

  if (typeof window !== "undefined") {
    const body = document.body;
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
      const currScroll = window.scrollY;

      if (currScroll <= 0) {
        body.classList.remove("scroll-up");
      }

      if (currScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
      }

      if (
        (currScroll < lastScroll && body.classList.contains("scroll-down")) ||
        window.scrollY < height / 2
      ) {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
      }

      lastScroll = currScroll;
    });

    if (isMenuOpen && width <= 1024) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }

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
              <Link
                href={navItem.to}
                key={navItem.id}
                className="hover:text-lightgreen"
              >
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
      <MobileHeader>
        <Link href="/">
          <Logo>
            <Image src={LogoImage} alt="logo" height={38.65} />
            <MobileLogoText className={`${openSansFont.className}`}>
              CENTRE FOR SCHOOL HEALTH EDUCATION AND ENVIRONMENTAL HYGIENE
            </MobileLogoText>
          </Logo>
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 stroke-lightgreen cursor-pointer"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </MobileHeader>
      <Sidebar className={isMenuOpen ? "sidebar-open" : "sidebar-close"}>
        <SidebarButton
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 stroke-lightgreen"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </SidebarButton>
        <SiebarNavItems>
          {NavItems.map((navItem) => (
            <Link
              href={navItem.to}
              key={navItem.id}
              className="hover:text-lightgreen w-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {navItem.text}
            </Link>
          ))}
        </SiebarNavItems>

        <Button>
          <ButtonImage src={HeartIcon} alt="heart" />
          Donate Now
        </Button>
      </Sidebar>
    </>
  );
};

const Header = tw.header`fixed z-40 w-full h-[120px] transition-all duration-200 xl:px-[80px] lg:px-[40px] bg-black bg-opacity-30 justify-between hidden lg:flex`;

const Logo = styled.div(() => [
  tw`h-full w-[287px] flex items-center gap-[12px]`,
]);

const LogoText = styled.p(() => [
  tw`text-[14px] h-[54px] w-[204px] text-white leading-[18px] font-bold`,
]);

const MobileLogoText = styled.p(() => [
  tw`text-[9px] h-full w-[190px] text-white leading-[18px] font-bold`,
]);

const Navigation = styled.div(() => [
  tw`flex justify-between items-center gap-[15px] w-[600px]`,
]);

const NavItems = [
  { id: 1, text: "About Us", to: "/about" },
  { id: 2, text: "Get Involved", to: "/get-involved" },
  {
    id: 3,
    text: "Media",
    to: "/media",
  },
  {
    id: 4,
    text: "Contact Us",
    to: "/contact",
  },
];

const NavigationItems = styled.div(() => [
  tw`flex justify-between items-center text-white font-[600] leading-[19.07px] w-[400px] h-[50px]`,
]);

const Sidebar = styled.div(() => [
  tw`w-full z-50 h-full fixed flex flex-col px-4 py-8 bg-black bg-opacity-90 ease-in-out transition-all duration-200 lg:hidden`,
]);

const MobileHeader = styled.header(() => [
  tw`fixed z-40 w-full flex justify-between ease-in-out transition-all bg-black  bg-opacity-30  duration-200 h-20 lg:hidden items-center px-[20px]`,
]);

const SidebarButton = styled.div(() => [
  tw`h-12 w-12 flex items-center justify-center cursor-pointer stroke-white`,
]);

const SiebarNavItems = styled.div(() => [
  tw`w-full my-12 text-white px-4 flex flex-col gap-8 text-lg`,
]);

export default LayoutHeader;
