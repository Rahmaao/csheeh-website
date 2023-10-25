import React from "react";
import { openSansFont } from "@/app/fonts";
import tw, { styled } from "twin.macro";

interface ISectionTagProps {
  tag: string;
  color: string;
}

const index = ({ tag, color }: ISectionTagProps) => {
  const bgColor = `bg-[${color}]`;
  return (
    <Root className={`${openSansFont.className} text-[${color}]`}>
      <TagLine className={bgColor} />
      {tag}
    </Root>
  );
};

const Root = styled.div(() => [
  tw`flex gap-[20px] items-center uppercase text-center`,
]);
const TagLine = styled.div(() => [tw`h-[2px] w-[40px]`]);

export default index;