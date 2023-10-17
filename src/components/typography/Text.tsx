import { Nunito } from 'next/font/google';
import React from 'react';
import tw, { styled } from "twin.macro";

const nunitoFont = Nunito()

const Text = ({children}: {children: React.ReactNode}) => {
  return (
    <Root className={nunitoFont.className}>
      {children}
    </Root>
  )
}

export default Text


const Root = styled.div(() => [tw`w-full border-none text-[18px] leading-[30px] text-[#33333]`])

