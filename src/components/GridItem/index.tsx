import { nunitoFont } from "@/app/fonts";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import tw, { styled } from "twin.macro";
import { recoletaLocalFont } from "@/app/fonts";

const CardItem = ({
  headerImage,
  headerText,
  content,
}: {
  headerImage: StaticImport;
  headerText: string;
  content: string;
}) => {
  return (
    <Root>
      <ImageContainer>
        <Image src={headerImage} height={60} width={60} alt="card-item-image" />
      </ImageContainer>

      <Header className={recoletaLocalFont.className}>{headerText}</Header>
      <Text className={nunitoFont.className}>{content} </Text>
    </Root>
  );
};

const Root = styled.div(() => [
  tw`
    flex flex-col items-start w-full gap-[16px] h-full place-items-center
`,
]);

const ImageContainer = styled.div(() => tw`h-[71px]`);

const Header = styled.h3(() => [
  tw`font-[18px] text-black leading-[24.48px] font-semibold`,
]);

const Text = styled.p(() => [
  tw`text-[16px] font-normal text-[#333333] leading-[27px]`,
]);

export default CardItem;
