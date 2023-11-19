"use client";
import HeartIcon from "@/assets/icons/Heart.svg";
import AdvocacyIcon from "@/assets/icons/advocacy.svg";
import BlackArrowRight from "@/assets/icons/black-arrow-right.svg";
import CapacityIcon from "@/assets/icons/building.svg";
import HornIcon from "@/assets/icons/horn.svg";
import MedicalIcon from "@/assets/icons/medical-outrages.svg";
import PromotingIcon from "@/assets/icons/promoting.svg";
import ReserachIcon from "@/assets/icons/research.svg";
import DonateImg from "@/assets/images/donate.png";
import GetInvolvedImg from "@/assets/images/get-involved.png";
import HeroBg from "@/assets/images/hero-bg.png";
import WhatWeDoImage from "@/assets/images/what-we-do.png";
import Button from "@/components/Button";
import TransparentButton from "@/components/Button/Transparent";
import GridItem from "@/components/GridItem";
import Header from "@/components/Typography/Header";
import { recoletasemiboldLocalFont } from "@/app/fonts";
import handwashing from "@/assets/images/handwashing.png";
import pads from "@/assets/images/pads.png";
import taps from "@/assets/images/taps.png";
import ButtonImage from "@/components/Button/ButtonImage";
import Image from "next/image";
import Link from "next/link";
import tw, { styled } from "twin.macro";
import { nunitoFont, recoletaLocalFont } from "./fonts";
import SectionTag from "@/components/SectionTag";
import Text from "@/components/Typography/Text";
import MediaCard from "@/components/MediaCard";

export default function Home() {
  return (
    <Root>
      <Hero
        style={{
          backgroundImage: `url(${HeroBg.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <HeroContent>
          <Header>
            <HeroHeader>
              Building <span className="text-[#A9CF46]">Healthy Schools, </span>
              <span className="text-[#058A51]">Safe Environments</span> and
              <span className="text-[#FFD14F]"> Stronger Communities</span>
            </HeroHeader>
          </Header>

          <Button>
            Get Involved
            <Image
              src={BlackArrowRight}
              alt="Right Arrow"
              width={18}
              height={18}
            />
          </Button>
        </HeroContent>
      </Hero>
      <MainContent>
        <WhatWeDo>
          <WhatWeDoContent>
            <WhatWeDoHeader className={recoletaLocalFont.className}>
              What We Do
            </WhatWeDoHeader>
            <WhatWeDoText>
              <Text>
                At CSHEEH, our passion is geared towards promoting health in
                schools and ensuring a safe environment. We firmly believe that
                education goes beyond textbooks; it begins with healthy bodies
                and minds. With this vision in mind, we work tirelessly to
                promote healthy schools and cultivate safe, hygienic spaces that
                foster holistic development for students.
              </Text>
            </WhatWeDoText>
            <TransparentButton>
              Learn More
              <svg
                width="18"
                height="18"
                className="stroke-current"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8125 9.29431H3.5625"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.2751 4.77599L14.8126 9.29399L10.2751 13.8127"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </TransparentButton>
          </WhatWeDoContent>
          <WhatWeDoImageContainer>
            <Image
              src={WhatWeDoImage}
              alt="what-we-do-image"
              style={{
                objectFit: "contain",
              }}
            />
          </WhatWeDoImageContainer>
        </WhatWeDo>
        <Grid>
          <GridItem
            headerImage={HornIcon}
            headerText="Health Education and Awareness Creation"
            content="In schools and communities, knowledge serves as the foundation for creating a healthier, safer environment. We equip students, teachers, and community members with the knowledge required to make informed decisions about their health."
          />
          <GridItem
            headerImage={CapacityIcon}
            headerText="Capacity Building"
            content="We recognize that sustainable change requires both knowledge and effective implementation, and so we offer training to school administrators, teachers, and support staff to equip them with the tools needed to establish and sustain a health and safety-oriented environment."
          />

          <GridItem
            headerImage={AdvocacyIcon}
            headerText="Advocacy"
            content="Through our advocacy efforts, we engage with a wide range of government bodies, non-govermental organizations, educational institutions, and local communities to drive awareness and action on critical issues related to health and safety in schools."
          />

          <GridItem
            headerImage={PromotingIcon}
            headerText="Promoting Healthy Environments"
            content="We understand that a healthy environment is fundamental to a child's overall well-being and learning experience. Thus, we strive to enhance the school and community environments to promote children's well-being and learning experiences, transforming schools into nurturing spaces where children thrive through cleanliness, safety, and sustainability."
          />

          <GridItem
            headerImage={MedicalIcon}
            headerText="Medical Outreaches"
            content="Access to healthcare is a fundamental right, and we are dedicated to ensuring that everyone has the opportunity to receive essential medical care. Through our medical outreaches, we are able to bring qualified healthcare professionals to schools and underserved communities, offering vital services like check-ups, vaccinations, and health education sessions."
          />

          <GridItem
            headerImage={ReserachIcon}
            headerText="Research"
            content="We conduct research to identify health and safety issues in schools, gathering valuable data. This information not only informs our actions but also serves as a resource for educators, policymakers, and the community. It empowers stakeholders to make evidence-based decisions, ultimately improving the health and safety of schools and their surroundings."
          />
        </Grid>
        <GetInvolved className="relative">
          <div className="top-curve">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="fill-white stroke-none"
              ></path>
            </svg>
          </div>
          <GetInvolvedContent>
            <SectionTag tag="Get Involved" color="white" />
            <GetInvolvedContentHeader className={recoletaLocalFont.className}>
              Be a part of our journey towards a better future.
            </GetInvolvedContentHeader>
            <GetInvolvedContentBody className={nunitoFont.className}>
              By joining hands with us, you become an essential part of the
              effort to create healthier, safer, and more hygienic environments
              for students and communities. Together, we can make a lasting
              impact and transform the lives of countless individuals.
            </GetInvolvedContentBody>
            <GetInvolvedLinks>
              {getInvolvedLinkData.map((link) => (
                <GetInvolvedLink key={link.id}>
                  <Link href={link.to}>{link.text}</Link>
                </GetInvolvedLink>
              ))}
            </GetInvolvedLinks>
          </GetInvolvedContent>
          <GetInvolvedImageContainer>
            <Image
              src={GetInvolvedImg}
              style={{
                objectFit: "contain",
              }}
              alt="get-involved-image"
            />
          </GetInvolvedImageContainer>{" "}
          <div className="curve">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </GetInvolved>
        <LatestArticles>
          <SectionTag tag="Latest Articles" color="#058A51" />
          <MediaText1 className={recoletasemiboldLocalFont.className}>
            <Link href="/media#news"> News, Press + Featured Articles</Link>
          </MediaText1>
          <div className="w-full grid grid-cols-1 h-auto lg:grid-cols-3 justify-between">
            <MediaCard
              image={handwashing}
              mediaHeader="NGO Donates Handwashing Facilities To FCT School"
              date="OCTOBER 21, 2023"
              linkAddress="https://www.google.com"
            />
            <MediaCard
              image={handwashing}
              mediaHeader="NGO Donates Handwashing Facilities To FCT School"
              date="OCTOBER 21, 2023"
              linkAddress="https://www.google.com"
            />
            <MediaCard
              image={handwashing}
              mediaHeader="NGO Donates Handwashing Facilities To FCT School"
              date="OCTOBER 21, 2023"
              linkAddress="https://www.google.com"
            />
          </div>
        </LatestArticles>
        <Donation
          style={{
            backgroundImage: `url(${DonateImg.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <DonationContent>
            <DonationContentHeader className={recoletaLocalFont.className}>
              Every contribution counts and helps us sustain our initiatives.
            </DonationContentHeader>
            <DonationContentBody className={nunitoFont.className}>
              Become a vital part of a movement dedicated to the well-being of
              students and communities. Together, we can build a world where
              every child thrives in a safe and nurturing environment, promoting
              health, safety, and education for all.
            </DonationContentBody>
            <Button>
              <ButtonImage src={HeartIcon} alt="heart-icon" />
              Donate Now
            </Button>
          </DonationContent>
        </Donation>
      </MainContent>
    </Root>
  );
}

const Root = styled.main(() => [
  tw`flex flex-col justify-center items-center gap-[80px] lg:gap-[10px]`,
]);
const Hero = styled.div(() => [
  tw`text-center flex items-center justify-center min-h-[100vh] w-full `,
]);

const HeroContent = styled.div(() => [
  tw`w-[782px] flex flex-col justify-center items-center lg:gap-[43px] gap-[35px]`,
]);

const HeroHeader = styled.h1(() => [
  tw`w-full border-none text-[40px] lg:text-[65px] leading-[50px] lg:leading-[68px] text-white`,
]);

const MainContent = styled.div(() => [
  tw`w-full  pt-[10px] lg:pt-[80px] flex flex-col items-center content-center`,
]);

const WhatWeDo = styled.div(() => [
  tw`w-full px-[40px] lg:px-[80px] flex flex-col lg:flex-row lg:items-center items-center lg:justify-between sm:justify-center gap-[40px] lg:gap-[0px]`,
]);

const WhatWeDoContent = styled.div(() => [
  tw`h-auto flex flex-col gap-[10px] text-center items-center lg:items-start content-center w-[300px] sm:w-[500px] md:w-[600px] lg:w-[631px]`,
]);

const WhatWeDoHeader = styled.div(() => [
  tw`w-full border-none text-[30px] lg:text-[35px] lg:leading-[48px] [letter-spacing: 0.02em] font-extrabold lg:text-left`,
]);

const WhatWeDoText = styled.div(() => [
  tw`w-full border-none text-[15px] lg:text-[18px] lg:leading-[30px] leading-[25px] font-[400] text-[#333333] lg:text-left text-center`,
]);

const WhatWeDoImageContainer = styled.div(() => [
  tw`h-[250px] w-[300px] sm:h-[450px] sm:w-[500px]  md:h-[650px] md:w-[700px] flex justify-center items-center`,
]);

const Grid = styled.div(() => [
  tw`w-full sm:w-3/4 lg:w-full px-[50px] lg:px-[80px] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-center justify-center gap-[40px] lg:gap-x-[60.5px] lg:gap-y-[70px] pt-[40px] py-[97px] lg:pb-[171px]`,
]);

const GetInvolved = styled.div(() => [
  tw`w-full bg-dark-blue flex flex-col lg:flex-row gap-[80px] text-white px-[40px] lg:px-[80px] justify-center items-center lg:justify-between py-[100px] border-none`,
]);

const GetInvolvedContent = styled.div(() => [
  tw` lg:w-[650px] flex-col w-full sm:w-[400px]`,
]);

const GetInvolvedContentHeader = styled.h2(() => [
  tw` text-[30px] lg:text-[35px] pt-[11px] leading-[42.03px] text-left`,
]);

const GetInvolvedContentBody = styled.p(() => [
  tw`text-[15px] lg:text-[18px] font-[400] leading-[25px] lg:leading-[30px] pt-[12px]`,
]);

const GetInvolvedLinks = styled.ul(() => [
  tw`list-disc mt-[20px] lg:mt-[30px] pl-[18px] lg:pl-3 flex flex-col gap-[11px] lg:gap-[21px] `,
]);

const getInvolvedLinkData = [
  {
    id: 0,
    text: "Donate to support our projects",
    to: "/contact",
  },
  {
    id: 1,
    text: "Volunteer with us",
    to: "/volunteer",
  },
  {
    id: 2,
    text: "Join us as a corporate partner",
    to: "/join",
  },
];

const GetInvolvedLink = styled.li(() => [tw`hover:text-dark-blue`]);

const GetInvolvedImageContainer = styled.div(() => [
  tw`w-fit h-[300px] sm:w-[300px] self-center lg:w-[500px] lg:h-auto`,
]);

const LatestArticles = styled.div(() => [
  tw`w-full bg-lime px-[40px] lg:pt-[250px] lg:pb-[80px] h-auto py-[50px]`,
]);

const Donation = styled.div(() => [
  tw`w-full px-[40px] lg:px-[80px] py-[175px] `,
]);

const DonationContent = styled.div(() => [tw`w-full flex flex-col text-white`]);

const DonationContentHeader = styled.h2(() => [
  tw` text-[25px] md:text-[30px] lg:text-[45px] leading-[30px] font-[600] w-full sm:w-[300px] md:w-[350px] lg:w-[650px] lg:leading-[50px] mb-[19px] `,
]);

const MediaText1 = styled.div(() => [
  tw`text-[22px] md:text-[27px] w-full h-[17%] tracking-wide text-center flex items-center md:justify-start justify-center mb-[56px] mt-[11px]`,
]);

// const MediaCard = styled.div(() => [
//   tw` w-[100%] lg:w-[90%] h-[90%] flex lg:flex-row flex-col justify-between items-center`,
// ]);

const MediaImage = styled.div(() => [
  tw`border border-solid border-[#C4C4C4] w-[125px] h-[125px] md:w-[210px] md:h-[210px] lg:w-[260px] lg:h-[260px] rounded-full flex justify-center items-center `,
]);

const DonationContentBody = styled.p(() => [
  tw`w-full sm:w-[300px] md:w-[350px] lg:w-[650px] mb-[35px]`,
]);
