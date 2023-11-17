import React from "react";
import tw, { styled } from "twin.macro";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface MediaCardProps {
  image: StaticImport;
  linkAddress: string;
  mediaHeader: string;
  date: string;
}

const MediaCard = ({
  image,
  linkAddress,
  mediaHeader,
  date,
}: MediaCardProps) => {
  return (
    <Root href={linkAddress} target="_blank">
      <ImgContainer>
        <Image
          src={image}
          alt="media-image"
          style={{
            objectFit: "contain",
          }}
        />
      </ImgContainer>
      <MediaTextContainer>
        <MediaHeader>{mediaHeader}</MediaHeader>
        <MediaDate>{date}</MediaDate>
      </MediaTextContainer>
    </Root>
  );
};

const Root = styled.a(() => [
  tw`h-[397px] w-[full] flex flex-col items-center`,
]);

const ImgContainer = styled.div(() => [
  tw`w-[250px] h-[250px] rounded-full p-2 flex justify-center items-center mb-[25px] border border-[#058A51]`,
]);

const MediaTextContainer = styled.div(() => [
  tw`w-full flex flex-col gap-[8px]`,
]);

const MediaHeader = styled.h3(() => [
  tw`text-[15px] lg:text-[17px] leading-[24px] text-center`,
]);

const MediaDate = styled.p(() => [
  tw`text-[#058A51] leading-[19.07px] text-[12px] lg:text-[14px] text-center font-bold`,
]);

export default MediaCard;
