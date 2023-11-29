"use client";

import MediaImg from "@/assets/images/media-page.png";
import MediaCard from "@/components/MediaCard";
import MediaCards from "@/components/MediaCards";
import tapsImg from "@/assets/images/taps.png";
import handwashing from "@/assets/images/handwashing.png";
import pads from "@/assets/images/pads.png";
import brush from "@/assets/images/brush.png";
import dental2 from "@/assets/images/dental2.png";
import hepatitis from "@/assets/images/hepatitis.png";
import health from "@/assets/images/health.png";
import dental from "@/assets/images/dental.png";
import handwash from "@/assets/images/handwash.png";
import PageHero from "@/components/PageHero";
import tw, { styled } from "twin.macro";
import SubHeader from "@/components/typography/SubHeader";
import Text from "@/components/typography/Text";
import Curve from "@/components/Curve";

const Media = () => {
  return (
    <Root>
      <PageHero
        header="Media"
        subHeader="View and read more of our work in some of our featured news articles."
        image={MediaImg}
      />
      <MediaHeader id="news">
        <SubHeader>News, Press + Featured Articles</SubHeader>
        <Text>
          Stay informed and inspired with our latest news and featured articles,
          offering insights, updates, and success stories.
        </Text>
      </MediaHeader>
      <MediaGrid className="relative">
        <MediaCard
          mediaHeader="NGO Donates Handwashing Facilities to FCT School"
          image={tapsImg}
          linkAddress={
            "https://www.abujadigest.info/stories/education/ngo-donates-handwashing-facilities-to-fct-school/"
          }
          date="OCTOBER 21, 2023"
        />
        <MediaCard
          mediaHeader="Organisation calls for coordinated efforts in pursuit of universal hand hygiene"
          image={handwashing}
          linkAddress={
            "https://nannews.ng/2023/10/19/organisation-calls-for-coordinated-efforts-in-pursuit-of-universal-hand-hygiene/"
          }
          date="OCTOBER 19, 2023"
        />
        <MediaCard
          mediaHeader="World Menstrual Hygiene Day: Stakeholders Call for Early Pre-menstrual Counseling"
          image={pads}
          linkAddress={
            "https://www.abujadigest.info/stories/health/world-menstrual-hygiene-day-stakeholders-call-for-early-pre-menstrual-counseling/"
          }
          date="MAY 30, 2023"
        />
        <MediaCard
          mediaHeader="CSHEEH, Unilever partner to integrate oral hygiene into school curricula"
          image={brush}
          linkAddress={
            "https://www.ethiopianewsobserver.com/csheeh-unilever-partner-to-integrate-oral-hygiene-into-school-curricula-founder/"
          }
          date="MARCH 23, 2023"
        />
        <MediaCard
          mediaHeader="Stakeholders Call for Improved Dental Health infrastructure in Primary Health Centers"
          image={dental2}
          linkAddress={
            "https://www.abujadigest.info/stories/health/stakeholders-call-for-improved-dental-health-infrastructure-in-primary-health-centers/"
          }
          date="MARCH 2O, 2023"
        />
        <MediaCard
          mediaHeader="World Hepatitis Day: FCT Residents Get
          Free Vaccination"
          image={hepatitis}
          linkAddress={
            "https://www.abujadigest.info/stories/health/world-hepatitis-day-fct-residents-get-free-vaccination/"
          }
          date="JULY 28, 2022"
        />
        <MediaCard
          mediaHeader="Health Education: Group Conducts Impact Assessment of Hygiene Facilities"
          image={health}
          linkAddress={
            "https://www.abujadigest.info/stories/health/health-education-group-conducts-impact-assessment-of-hygiene-facilities/"
          }
          date="MARCH 24, 2022"
        />
        <MediaCard
          mediaHeader="World Oral Health Day: NGO partners with dental association, Unilever to enlighten pupils"
          image={dental}
          linkAddress={
            "https://sunnewsonline.com/world-oral-health-day-ngo-partners-with-dental-association-unilever-to-enlighten-pupils/"
          }
          date="MARCH 24, 2022"
        />
        <MediaCard
          mediaHeader="CSHEEH celebrates Global Handwashing Day 2017 in Nigeria"
          image={handwash}
          linkAddress={
            "https://globalhandwashing.org/global-handwashing-day/take-action/submit-events/view-events/csheeh-celebrates-global-handwashing-day-2017-in-nigeria/"
          }
          date="OCTOBER 17, 2017"
        />
        <Curve fillColor="#030426" />
      </MediaGrid>
    </Root>
  );
};

const Root = styled.div(() => [tw``]);
const MediaGrid = styled.div(() => [
  // tw`w-full grid gap-y-[67px] grid-cols-1 md:grid-cols-2 md:px-8 lg:grid-cols-3 lg:gap-x-12`,
  tw`w-full grid gap-y-[67px] grid-cols-1 md:grid-cols-2 md:px-8 lg:grid-cols-3 lg:gap-12 pb-[150px]`,
]);

const MediaHeader = styled.div(() => [
  tw`w-full mt-[67px] mb-[80px] px-[40px] lg:px-[80px] lg:w-[700px]`,
]);

export default Media;
