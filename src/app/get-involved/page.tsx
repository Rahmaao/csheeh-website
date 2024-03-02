"use client";

import React from "react";
import GetInvolvedCards from "@/components/GetInvolvedCards";
import tw, { styled } from "twin.macro";
import PageHero from "@/components/PageHero";
import GetInvolvedImg from "@/assets/images/get-involed-page.png";
import GetInvolvedMobileImg from "@/assets/images/get-involved-mobile.png";

const GetInvolved = () => {
  return (
    <Root>
      <PageHero
        header="Get Involved"
        subHeader="Be a part of our journey towards a better future by donating, volunteering or partnering with us."
        image={GetInvolvedImg}
        mobileImage={GetInvolvedMobileImg}
      />
      <GetInvolvedCards />
    </Root>
  );
};

const Root = styled.div(() => [tw``]);

export default GetInvolved;
