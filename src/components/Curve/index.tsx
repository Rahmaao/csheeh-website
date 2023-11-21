import React from "react";
import tw, { styled, css } from "twin.macro";

interface ICurveProps {
  top?: boolean;
  fillColor: string;
}

const index: React.FC<ICurveProps> = ({ fillColor, top }: ICurveProps) => {
  return (
    <Curve $topVariant={top}>
      <Svg
        className="rotate-y-180"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        data-name="curve"
      >
        <Path
          $fillColor={fillColor}
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        />
      </Svg>
    </Curve>
  );
};

const Curve = styled.div<{ $topVariant?: boolean }>(({ $topVariant }) => [
  tw`absolute left-0 w-full overflow-hidden leading-[0px] `,
  $topVariant ? tw`top-0` : tw`transform rotate-180 bottom-0 `,
]);

const Svg = styled.svg(() => [
  tw`relative block w-[calc(137% + 1.3px)] h-[40px] md:h-[120px] transform`,
]);

const Path = styled.path<{ $fillColor: string }>(({ $fillColor }) => [
  css`
    fill: ${$fillColor};
  `,
]);

export default index;
