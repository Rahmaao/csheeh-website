import React from "react";
import tw, { styled } from "twin.macro";
import Image from "next/image";
import { recoletaLocalFont } from "@/app/fonts";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface MediaCardProps2 {
  image: StaticImport;
  mediaHeader: string;
  subheader: string;
}

const MediaCard1 = ({ image, mediaHeader, subheader }: MediaCardProps2) => {
  return (
    <Root>
      <ImgContainer1>
        <Image
          src={image}
          alt="media-image"
          style={{
            objectFit: "contain",
          }}
        />
      </ImgContainer1>
      <MediaTextContainer>
        <MediaHeader1 className={`${recoletaLocalFont.className}`}>
          {mediaHeader}
        </MediaHeader1>
        <MediaSubheader>{subheader}</MediaSubheader>
      </MediaTextContainer>
    </Root>
  );
};

const Root = styled.a(() => [
  tw`w-[full] flex flex-col items-center text-white`,
]);

const ImgContainer1 = styled.div(() => [
  tw`w-[190px] h-[190px] rounded-full p-2 flex justify-center items-center mb-[25px] border border-[#ffffff]`,
]);

const MediaTextContainer = styled.div(() => [
  tw`w-full flex flex-col gap-[8px]`,
]);

const MediaHeader1 = styled.h3(() => [
  tw`text-[14px] lg:text-[16px] leading-[24px] text-center`,
]);

const MediaSubheader = styled.p(() => [
  tw`leading-[19.07px] text-[12px] lg:text-[14px] text-center font-extralight`,
]);

export default MediaCard1;
