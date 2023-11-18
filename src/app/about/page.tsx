"use client";

import AdvocacyIcon from "@/assets/icons/advocacy.svg";
import CapacityIcon from "@/assets/icons/building.svg";
import HornIcon from "@/assets/icons/horn.svg";
import MedicalIcon from "@/assets/icons/medical-outrages.svg";
import PromotingIcon from "@/assets/icons/promoting.svg";
import ReserachIcon from "@/assets/icons/research.svg";
import AboutUsImg from "@/assets/images/about-us.png";
import MissionImg from "@/assets/images/get-involved.png";
import GridItem from "@/components/GridItem";
import PageHero from "@/components/PageHero";
import Text from "@/components/Typography/Text";
import Image from "next/image";
import tw, { styled } from "twin.macro";
import {
  nunitoFont,
  recoletasemiboldLocalFont,
  recoletaLocalFont,
} from "../fonts";
import SectionTag from "@/components/SectionTag";
import SubHeader from "@/components/Typography/SubHeader";

export default function Home() {
  return (
    <Root>
      <PageHero
        header="About Us"
        subHeader="Learn more about our mission and values, and meet the people that drive us forward."
        image={AboutUsImg}
      />
      <AboutContentContainer className="mt-[150px]">
        <AboutContentContainerLeft>
          <SubHeader>Healthy Schools, Safe Environment! 🌍</SubHeader>
        </AboutContentContainerLeft>
        <AboutContentContainerRight>
          <Text>
            Centre for School Health Education and Environmental Hygiene
            (CSHEEH) is an Abuja-based non-governmental, non-profit and
            non-political organization duly registered with the Corporate
            Affairs Commission on 1st June, 2015. At CSHEEH, our passion is
            geared towards promoting health in schools and ensuring a safe
            environment.
          </Text>
          <Text>
            We firmly believe that education goes beyond textbooks; it begins
            with healthy bodies and minds. With this vision in mind, we work
            tirelessly to promote healthy schools and cultivate safe, hygienic
            spaces that foster holistic development for students.
          </Text>
        </AboutContentContainerRight>
      </AboutContentContainer>
      <AboutContentContainer className="my-[50px] lg:mt-0">
        <AboutContentContainerLeft>
          <AboutImageContainer>
            <Image
              src={MissionImg}
              alt="misson-image"
              style={{
                objectFit: "contain",
                height: "100%",
                width: "100%",
              }}
            />
          </AboutImageContainer>
        </AboutContentContainerLeft>
        <AboutContentContainerRight>
          <div className="w-full h-full flex flex-col mt-[20px] lg:mt-0 lg:flex-row gap-[30px] justify-between items-center">
            <AboutContentBanner>
              <AboutContentBannerHeader
                className={recoletasemiboldLocalFont.className}
              >
                Our Mission
              </AboutContentBannerHeader>
              To engage and empower all stakeholders within schools and
              communities to pay special attention to health issues affecting
              young people; through awareness creation and collaboration with
              relevant partners for increased health impact.
            </AboutContentBanner>
            <AboutContentBanner>
              <AboutContentBannerHeader
                className={recoletasemiboldLocalFont.className}
              >
                Our Vision
              </AboutContentBannerHeader>
              To promote sustainable healthy schools and a safe environment.
            </AboutContentBanner>
          </div>
        </AboutContentContainerRight>
      </AboutContentContainer>
      <WhatWeDoContainer>
        <WhatWeDoTextContainer>
          <WhatWeDoTextContainerHeader className={recoletaLocalFont.className}>
            What We Do
          </WhatWeDoTextContainerHeader>
          <Text>
            Learn more on how we’re transforming communities through our mission
            of building healthy schools, creating safe environments, and
            empowering stronger, thriving communities.
          </Text>
        </WhatWeDoTextContainer>
      </WhatWeDoContainer>
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
      <Team>
        <SectionTag tag="Meet our mangement team" color="#fff" />d
      </Team>
    </Root>
  );
}

const Root = styled.div(() => [tw``]);

const WhatWeDoContainer = styled.div(() => [
  tw`w-full pt-[50px] pb-[20px] lg:pb-0 lg:py-[90px] px-[50px] lg:px-[80px] flex flex-col items-center lg:items-start`,
]);

const AboutContentContainer = styled.div(() => [
  tw`w-full px-[50px] lg:px-[80px] lg:mt-[150px] flex flex-col lg:flex-row lg:gap-[52px] gap-[30px]`,
]);

const AboutContentContainerLeft = styled.div(() => [
  tw`w-full lg:w-[444px] lg:flex-none`,
]);

const AboutImageContainer = styled.div(() => [
  tw`w-full lg:w-[444px] lg:h-[400px] h-auto`,
]);

const AboutContentContainerRight = styled.div(() => [
  tw`flex flex-col gap-[20px] lg:grow`,
]);

const AboutContentBanner = styled.div(() => [
  tw`w-full lg:w-1/2 flex flex-col min-h-[86px]`,
]);

const AboutContentBannerHeader = styled.h3(() => [
  tw`h-[30px] w-full font-[600]`,
]);

const WhatWeDoTextContainer = styled.div(() => [
  tw`lg:w-[631px] w-full h-full flex flex-col gap-[10px]`,
]);

const WhatWeDoTextContainerHeader = styled.h2(() => [
  tw`w-[200px] sm:w-[300px] lg:w-[400px] lg:text-left lg:self-start text-[22px] lg:text-[35px] leading-[30px] lg:leading-[47.6px] font-[600] text-left`,
]);

const Grid = styled.div(() => [
  tw`w-full sm:w-3/4 lg:w-full px-[50px] lg:px-[80px] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-center justify-center gap-[40px] lg:gap-x-[60.5px] lg:gap-y-[70px] pt-[40px] py-[97px] lg:pb-[171px]`,
]);

const Team = styled.div(() => [
  tw`w-full bg-dark-blue py-[50px] lg:py-[90px] px-[50px] lg:px-[80px]`,
]);
