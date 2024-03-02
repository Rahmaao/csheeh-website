import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import tw, { styled } from "twin.macro";
import { recoletaLocalFont } from "@/app/fonts";
import Curve from "../Curve";
import { CSSProperties } from "styled-components";

interface IPageHeroProps {
  header: string;
  subHeader: string;
  image: StaticImageData;
  mobileImage: StaticImageData;
}

const index = ({ image, mobileImage, header, subHeader }: IPageHeroProps) => {
  return (
    <Root
      style={
        {
          "--image-url": `url(${image.src})`,
          "--mobile-image": `url(${mobileImage.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
        } as CSSProperties
      }
    >
      <HeroHeader className={recoletaLocalFont.className}>{header}</HeroHeader>
      <HeroContent>{subHeader}</HeroContent>
      <Curve fillColor="#ffffff" />
    </Root>
  );
};

const Root = styled.div(() => [
  tw`w-full h-[90vh] flex flex-col justify-center bg-[image:var(--mobile-image)] md:bg-[image:var(--image-url)] gap-[10px] text-white px-[30px] sm:px-[70px] lg:px-[80px]`,
]);

const HeroHeader = styled.h1(() => [
  tw`text-[30px] lg:text-[50px] font-[600] leading-[68px]`,
]);

const HeroContent = styled.div(() => [
  tw`text-[18px] lg:text-[24px] font-[400]  leading-[30px] lg:leading-[35px] border-l-lightgreen border-l-[3px] pl-[20px] lg:pl-[27px] w-[300px] lg:w-[421px] `,
]);

export default index;
