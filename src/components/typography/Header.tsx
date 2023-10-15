import React from 'react'
import tw, { css, styled } from "twin.macro";
import LocalFont from 'next/font/local'

const RecoletaLocalFont = LocalFont({
  src: [{
    path: "./fonts/Recoleta-RegularDEMO.otf",
    weight: "400",
    style: "normal"
  }]
})

interface HeaderProps {
text: string
}

const Header= ({children}: {children: React.ReactNode}) => {
  return (
    <Root className={RecoletaLocalFont.className}>
      {children}
    </Root>
  )
}


export default Header


const Root = styled.div(() => [tw`w-full border-none bg-yellow-200 text-red-400 text-sm text-[65px]`])