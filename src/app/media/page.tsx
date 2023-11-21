"use client";

import MediaImg from "@/assets/images/media-page.png";
import MediaCard from "@/components/MediaCard";
import MediaCards from "@/components/MediaCards";
import tapsImg from "@/assets/images/taps.png";
import PageHero from "@/components/PageHero";
import tw, { styled } from "twin.macro";
import SubHeader from "@/components/Typography/SubHeader";
import Text from "@/components/Typography/Text";
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
          linkAddress={""}
          date="OCTOBER 21, 2023"
        />
        <MediaCard
          mediaHeader="NGO Donates Handwashing Facilities to FCT School"
          image={tapsImg}
          linkAddress={""}
          date="OCTOBER 21, 2023"
        />
        <MediaCard
          mediaHeader="NGO Donates Handwashing Facilities to FCT School"
          image={tapsImg}
          linkAddress={""}
          date="OCTOBER 21, 2023"
        />
        <MediaCard
          mediaHeader="NGO Donates Handwashing Facilities to FCT School"
          image={tapsImg}
          linkAddress={""}
          date="OCTOBER 21, 2023"
        />
        <MediaCard
          mediaHeader="NGO Donates Handwashing Facilities to FCT School"
          image={tapsImg}
          linkAddress={""}
          date="OCTOBER 21, 2023"
        />
        <MediaCard
          mediaHeader="NGO Donates Handwashing Facilities to FCT School"
          image={tapsImg}
          linkAddress={""}
          date="OCTOBER 21, 2023"
        />
        <MediaCard
          mediaHeader="NGO Donates Handwashing Facilities to FCT School"
          image={tapsImg}
          linkAddress={""}
          date="OCTOBER 21, 2023"
        />
        <MediaCard
          mediaHeader="NGO Donates Handwashing Facilities to FCT School"
          image={tapsImg}
          linkAddress={""}
          date="OCTOBER 21, 2023"
        />
        <MediaCard
          mediaHeader="NGO Donates Handwashing Facilities to FCT School"
          image={tapsImg}
          linkAddress={""}
          date="OCTOBER 21, 2023"
        />
        <Curve fillColor="#030426" />
      </MediaGrid>
    </Root>
  );
};

const Root = styled.div(() => [tw``]);
const MediaGrid = styled.div(() => [
  tw`w-full grid grid-cols-1 md:grid-cols-2 md:px-8 lg:grid-cols-3 lg:gap-12 pb-[150px]`,
]);

const MediaHeader = styled.div(() => [
  tw`w-full mt-[120px] mb-[80px] px-[40px] lg:px-[80px] lg:w-[700px]`,
]);

export default Media;
