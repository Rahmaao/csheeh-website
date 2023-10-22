import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const image = ({ src, alt }: { src: string | StaticImport; alt: string }) => {
  return <Image src={src} alt={alt} height={16} width={16}></Image>;
};

export default image;
