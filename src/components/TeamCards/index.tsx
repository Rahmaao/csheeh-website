import React from "react";
import tw, { styled } from "twin.macro";
import Image from "next/image";
import { recoletaLocalFont } from "@/app/fonts";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface MediaCardProps2 {
  image: StaticImport;
  mediaHeader: string;
  subheader: string;
  rowVariant?: boolean;  
  color: string;
}

const MediaCard1 = ({
  color,  
  image,
  mediaHeader,
  subheader,
}: MediaCardProps2) => {
  return (
    <Root
    color={color}       
    className={`${recoletaLocalFont.className}`}>
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
        <MediaHeader1>{mediaHeader}</MediaHeader1>
        <MediaSubheader>{subheader}</MediaSubheader>
      </MediaTextContainer>
    </Root>
  );
};


const Root = styled.a(() => [
  tw`h-[397px] w-[full] flex flex-col items-center`,
]);

const ImgContainer1 = styled.div(() => [
  tw`w-[190px] h-[190px] rounded-full p-2 flex justify-center items-center mb-[25px] border border-[#058A51]`,
]);

const MediaTextContainer = styled.div(() => [
  tw`w-full flex flex-col gap-[8px]`,
]);

const MediaHeader1 = styled.h3(() => [
  tw`text-[14px] lg:text-[16px] leading-[24px] text-center font-bold`,
]);

const MediaSubheader = styled.p(() => [
  tw`text-[#058A51] leading-[19.07px] text-[12px] lg:text-[14px] text-center font-light`,
]);

export default MediaCard1;
