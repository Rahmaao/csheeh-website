import React from "react";
import { openSansFont } from "@/app/fonts";
import tw, { TwStyle, css, styled } from "twin.macro";

interface ISectionTagProps {
  tag: string;
  color: string;
}

const index = ({ tag, color }: ISectionTagProps) => {
  return (
    <Root
      $color={color}
      className={`${openSansFont.className} text-[${color}] tag__header`}
    >
      <TagLine $color={color} />
      {tag}
    </Root>
  );
};

const Root = styled.div<{ $color: string }>(({ $color }) => [
  tw`flex gap-[20px] items-center uppercase text-center`,

  css`
    color: ${$color};
  `,
]);

const TagLine = styled.div<{ $color: string }>(({ $color }) => [
  tw`h-[1px] w-[40px]`,
  css`
    background-color: ${$color};
  `,
]);

export default index;
