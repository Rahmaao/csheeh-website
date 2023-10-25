"use client";

import AboutUsImg from "@/assets/images/about-us.png";
import PageHero from "@/components/PageHero";
import tw, { styled } from "twin.macro";
import { recoletaLocalFont, nunitoFont } from "../fonts";

export default function Home() {
  return (
    <Root>
      <PageHero
        header="About Us"
        subHeader="Learn more about our mission and values, and meet the people that drive us forward."
        image={AboutUsImg}
      />
      <HealthySchools>
        <HealthySchoolsHeader className={recoletaLocalFont.className}>
          Healthy Schools,
          <br /> Safe Environment! 🌍
        </HealthySchoolsHeader>
        <HealthySchoolsContent className={nunitoFont.className}>
          <HealthySchoolsContentParagraph>
            Centre for School Health Education and Environmental Hygiene
            (CSHEEH) is an Abuja-based non-governmental, non-profit and
            non-political organization duly registered with the Corporate
            Affairs Commission on 1st June, 2015.
          </HealthySchoolsContentParagraph>
          <HealthySchoolsContentParagraph>
            At CSHEEH, our passion is geared towards promoting health in schools
            and ensuring a safe environment. We firmly believe that education
            goes beyond textbooks; it begins with healthy bodies and minds. With
            this vision in mind, we work tirelessly to promote healthy schools
            and cultivate safe, hygienic spaces that foster holistic development
            for students.
          </HealthySchoolsContentParagraph>
        </HealthySchoolsContent>
      </HealthySchools>
    </Root>
  );
}

const Root = styled.div(() => [tw``]);

const HealthySchools = styled.div(() => [
  tw`w-full flex flex-col px-[80px] items-center gap-[20px] `,
]);

const HealthySchoolsHeader = styled.h2(() => [
  tw`w-[346px] text-[35px] leading-[47.6px] font-[600]`,
]);

const HealthySchoolsContent = styled.div(() => [
  tw`text-[18px] font-[400] leading-[30px] text-gray flex flex-col gap-8`,
]);

const HealthySchoolsContentParagraph = styled.p(() => [
  tw`text-[18px] font-[400] leading-[30px]`,
]);
