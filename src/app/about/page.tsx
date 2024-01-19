"use client";

import AdvocacyIcon from "@/assets/icons/advocacy.svg";
import CapacityIcon from "@/assets/icons/building.svg";
import HornIcon from "@/assets/icons/horn.svg";
import MedicalIcon from "@/assets/icons/medical-outrages.svg";
import MediaCard1 from "@/components/TeamCards";
import PromotingIcon from "@/assets/icons/promoting.svg";
import ReserachIcon from "@/assets/icons/research.svg";
import AboutUsImg from "@/assets/images/about-us.png";
import MissionImg from "@/assets/images/get-involved.png";
import tapsImg from "@/assets/images/taps.png";
import avatar from "@/assets/images/Avatar.png";
import team1 from "@/assets/images/Team1.png";
import team2 from "@/assets/images/Team2.png";
import team3 from "@/assets/images/Team3.png";
import team4 from "@/assets/images/Team4.png";
import team5 from "@/assets/images/Team5.png";
import team6 from "@/assets/images/Team6.png";
import team7 from "@/assets/images/Team7.png";
import team8 from "@/assets/images/Team8.png";
import OlubunmiAdeyemiImg from "@/assets/images/olubuunmi-adeyemi.png";
import BenEnweremImg from "@/assets/images/ben-enwerem.png";
import AdebayoAdeyemiImg from "@/assets/images/adebayo-adeyemi.png";
import KuluLabaranImg from "@/assets/images/kulu-labaran.png";
import GridItem from "@/components/GridItem";
import PageHero from "@/components/PageHero";
import SectionTag from "@/components/SectionTag";
import SubHeader from "@/components/typography/SubHeader";
import Text from "@/components/typography/Text";
import Image from "next/image";
import tw, { styled } from "twin.macro";
import {
  nunitoFont,
  recoletaLocalFont,
  recoletasemiboldLocalFont,
} from "../fonts";
import Curve from "@/components/Curve";

export default function Home() {
  return (
    <Root>
      <PageHero
        header="About Us"
        subHeader="Learn more about our mission and values, and meet the people that drive us forward."
        image={AboutUsImg}
      />
      <AboutContentContainer className="mt-[67px]">
        <AboutContentContainerLeft>
          <SubHeader>
            Healthy Schools, <br /> Safe Environment! 🌍
          </SubHeader>
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
      <AboutContentContainer className="my-[50px] lg:mt-[103px]">
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
      <Grid className="relative">
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

        <Curve fillColor="#3D3F94" />
      </Grid>
      <Team className="relative">
        <SectionTag tag="Meet our mangement team" color="#fff" />
        <GetInvolvedContentHeader className={recoletaLocalFont.className}>
          Board of Directors
        </GetInvolvedContentHeader>
        <GetInvolvedContentBody className={nunitoFont.className}>
          Meet our distinguished Board of Directors, a group of accomplished
          individuals dedicated to guiding our organization towards success and
          innovation.
        </GetInvolvedContentBody>
        <MediaGrid>
          <MediaCard1
            mediaHeader="Dr. (Mrs.) Folasade O. Momoh"
            image={team1}
            subheader="Executive Director & Founder"
          />
          <MediaCard1
            mediaHeader="Mrs. Grace B. Emoefe"
            image={team2}
            subheader="Board Chairman"
          />
          <MediaCard1
            mediaHeader="Mr. Jirai Istifanus Crown"
            image={team3}
            subheader="Board Member"
          />
          <MediaCard1
            mediaHeader="Mrs. Ruth Fatigun"
            image={team4}
            subheader="Board Member"
          />
          <MediaCard1
            mediaHeader="Dr. Olubunmi Adeyemi"
            image={OlubunmiAdeyemiImg}
            subheader="Board Member"
          />
          <MediaCard1
            mediaHeader="Mr. Ben Enwerem"
            image={BenEnweremImg}
            subheader="Board Member"
          />
          <MediaCard1
            mediaHeader="Dr. Dele Babade, mni"
            image={team5}
            subheader="Board Member"
          />
          <MediaCard1
            mediaHeader="Dr. Anne Ebri"
            image={team6}
            subheader="Board Member"
          />
          <MediaCard1
            mediaHeader="Barr. (Mrs.) Mary-Anne  Momoh-Ige"
            image={team7}
            subheader="Legal Adviser"
          />
          <MediaCard1
            mediaHeader="Dr. Adedayo Adeyemi"
            image={AdebayoAdeyemiImg}
            subheader="Technical Adviser"
          />
          <MediaCard1
            mediaHeader="Dr. Uzoamaka C. Chimah"
            image={team8}
            subheader="Technical Adviser"
          />
          <MediaCard1
            mediaHeader="Mrs. Kulu Labaran"
            image={KuluLabaranImg}
            subheader="Technical Adviser"
          />
        </MediaGrid>
        <Curve fillColor="#030426" />
      </Team>
    </Root>
  );
}

const Root = styled.div(() => [tw``]);

const WhatWeDoContainer = styled.div(() => [
  tw`w-full pt-[50px] pb-[20px] lg:pb-0 lg:py-[90px] px-[50px] lg:px-[80px] flex flex-col items-center lg:items-start`,
]);

const AboutContentContainer = styled.div(() => [
  tw`w-full px-[50px] lg:px-[80px] flex flex-col lg:flex-row lg:gap-[52px] gap-[30px]`,
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
  tw`w-full lg:w-1/2 flex flex-col min-h-[86px] lg:h-[200px]`,
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

const MediaGrid = styled.div(() => [
  tw`w-full grid gap-y-[80px] grid-cols-1 md:grid-cols-2 py-[78px] lg:grid-cols-4`,
]);

const mediaHeader = styled.div(() => [
  tw`w-full mt-[120px] mb-[80px] px-[40px] lg:px-[80px] lg:w-[700px]`,
]);

const GetInvolvedContentHeader = styled.h2(() => [
  tw`text-[#ffff] text-[30px] lg:text-[35px] pt-[11px] leading-[42.03px] text-left`,
]);

const GetInvolvedContentBody = styled.p(() => [
  tw`text-[#ffff] md:w-[70%] text-[15px] lg:text-[18px] font-[400] leading-[25px] lg:leading-[30px] pt-[12px]`,
]);
