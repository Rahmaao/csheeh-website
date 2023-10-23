import { Inter, Open_Sans, Nunito } from "next/font/google";
import LocalFont from "next/font/local";

export const interFont = Inter({ subsets: ["latin"] });
export const openSansFont = Open_Sans({ subsets: ["latin"] });
export const nunitoFont = Nunito({ subsets: ["cyrillic"] });
export const recoletaLocalFont = LocalFont({
  src: [
    {
      path: "../assets/fonts/Recoleta-RegularDEMO.otf",
      weight: "400",
      style: "normal",
    },
  ],
});
