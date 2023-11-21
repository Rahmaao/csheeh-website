import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import tw, { styled } from "twin.macro";
import { recoletaLocalFont } from "@/app/fonts";
import Curve from "../Curve";

interface IPageHeroProps {
  header: string;
  subHeader: string;
  image: StaticImageData;
}

const index = ({ image, header, subHeader }: IPageHeroProps) => {
  return (
    <Root
      style={{
        backgroundImage: `url(${image.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <HeroHeader className={recoletaLocalFont.className}>{header}</HeroHeader>
      <HeroContent>{subHeader}</HeroContent>
      <Curve fillColor="#ffffff" />
    </Root>
  );
};

const Root = styled.div(() => [
  tw`w-full h-[90vh] flex flex-col justify-center gap-[10px] text-white px-[30px] sm:px-[70px] lg:px-[80px]`,
]);

const HeroHeader = styled.h1(() => [
  tw`text-[30px] lg:text-[50px] font-[600] leading-[68px]`,
]);

const HeroContent = styled.div(() => [
  tw`text-[18px] lg:text-[24px] font-[400]  leading-[30px] lg:leading-[35px] border-l-lightgreen border-l-[3px] pl-[20px] lg:pl-[27px] w-[300px] lg:w-[421px] `,
]);

export default index;
