"use client";
import AdvocacyIcon from "@/assets/icons/advocacy.svg";
import BlackArrowRight from "@/assets/icons/black-arrow-right.svg";
import CapacityIcon from "@/assets/icons/building.svg";
import HornIcon from "@/assets/icons/horn.svg";
import MedicalIcon from "@/assets/icons/medical-outrages.svg";
import PromotingIcon from "@/assets/icons/promoting.svg";
import ReserachIcon from "@/assets/icons/research.svg";
import HeroBg from "@/assets/images/hero-bg.png";
import WhatWeDoImage from "@/assets/images/what-we-do.png";
import Button from "@/components/Button";
import TransparentButton from "@/components/Button/Transparent";
import GridItem from "@/components/GridItem";
import Header from "@/components/typography/Header";
import Image from "next/image";
import tw, { styled } from "twin.macro";
import { recoletaLocalFont } from "./fonts";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Hero
        style={{
          backgroundImage: `url(${HeroBg.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <HeroContent>
          <Header>
            <h1 className="text-[45px] lg:text-[65px] leading-[60px] lg:leading-[68px] text-white">
              Building <span className="text-[#A9CF46]">Healthy Schools, </span>
              <span className="text-[#058A51]">Safe Environments</span> and
              <span className="text-[#FFD14F]"> Stronger Communities</span>
            </h1>
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
              At CSHEEH, our passion is geared towards promoting health in
              schools and ensuring a safe environment. We firmly believe that
              education goes beyond textbooks; it begins with healthy bodies and
              minds. With this vision in mind, we work tirelessly to promote
              healthy schools and cultivate safe, hygienic spaces that foster
              holistic development for students.
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
                  // stroke="#058A51"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.2751 4.77599L14.8126 9.29399L10.2751 13.8127"
                  // stroke="#058A51"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </TransparentButton>
          </WhatWeDoContent>
          <WhatWeDoImageContainer
            style={{
              backgroundImage: `url(${WhatWeDoImage.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          />
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
      </MainContent>
    </main>
  );
}

const Hero = styled.div(() => [
  tw`text-center flex items-center justify-center min-h-[100vh] w-full `,
]);

const HeroContent = styled.div(() => [
  tw`w-[782px] flex flex-col justify-center items-center lg:gap-[43px] gap-[35px]`,
]);

const MainContent = styled.div(() => [
  tw`w-full px-[40px] lg:px-[80px] pt-[10px] lg:pt-[80px] flex flex-col items-center content-center gap-[180px] lg:gap-[100px]`,
]);

const WhatWeDo = styled.div(() => [
  tw`w-full lg:h-[395px] flex flex-col lg:flex-row gap-[29px] lg:gap-[99px] lg:items-center pt-[80px] lg:pt-[10px]`,
]);

const WhatWeDoContent = styled.div(() => [
  tw`h-auto flex flex-col gap-[10px] text-center items-center lg:items-start content-center lg:w-[631px]`,
]);

const WhatWeDoHeader = styled.div(() => [
  tw`w-full border-none text-[35px] lg:leading-[48px] [letter-spacing: 0.02em] font-extrabold lg:text-left`,
]);

const WhatWeDoText = styled.div(() => [
  tw`w-full border-none text-[15px] lg:text-[18px] lg:leading-[30px] leading-[25px] font-[400] text-[#333333] lg:text-left text-center`,
]);

const WhatWeDoImageContainer = styled.div(() => [
  tw`h-[395px] w-full lg:w-[559px]`,
]);

const Grid = styled.div(() => [
  tw`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-y-[70px] bg-red-300`,
]);
