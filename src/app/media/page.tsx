"use client";

import PageHero from "@/components/PageHero";
import React from "react";
import tw, { styled } from "twin.macro";
import MediaImg from "@/assets/images/media-page.png";
import MediaCards from "@/components/MediaCards";

const Media = () => {
  return (
    <Root>
      <PageHero
        header="Media"
        subHeader="View and read more of our work in some of our featured news articles."
        image={MediaImg}
      />
      <MediaCards />
    </Root>
  );
};

const Root = styled.div(() => [tw``]);

export default Media;
