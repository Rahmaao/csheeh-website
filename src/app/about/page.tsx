"use client";
import AboutUsImg from "@/assets/images/about-us.png";
import PageHero from "@/components/PageHero";
import tw, { styled } from "twin.macro";

export default function Home() {
  return (
    <Root>
      <PageHero
        header="About Us"
        subHeader="Learn more about our mission and values, and meet the people that drive us forward."
        image={AboutUsImg}
      />
    </Root>
  );
}

const Root = styled.div(() => [tw``]);
