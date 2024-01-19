import React from "react";
import tw, { styled } from "twin.macro";
import { Nunito } from "next/font/google";
import Link from "next/link";

interface IButtonProps {
  children: React.ReactNode;
  href: string;
}
const nunitoFont = Nunito({ subsets: ["latin"] });

const Button = ({ children, href }: IButtonProps) => {
  return (
    <Link href={href}>
      <Root type="button"> {children}</Root>
    </Link>
  );
};

export default Button;

const Root = styled.button(() => [
  tw`bg-[#A9CF46] hover:bg-[#FFD14F] w-[150px] lg:w-[180px] px-[50x] h-[50px] rounded-[50px] gap-[9px] cursor-pointer flex flex-row items-center justify-center text-black text-[13px] lg:text-[15px] font-[700] leading-[20.48px] text-center`,
]);
