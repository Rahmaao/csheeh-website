"use client";

import PageHero from "@/components/PageHero";
import React from "react";
import tw, { styled } from "twin.macro";
import ContactUsImg from "@/assets/images/contact-us.png";

const Events = () => {
  return (
    <Root>
      <PageHero
        header="Events"
        subHeader="Want to partner with us or make inquiries, feel free to reach out to us with any questions or inquiries."
        image={ContactUsImg}
      />
    </Root>
  );
};

const Root = styled.div(() => [tw``]);

export default Events;
