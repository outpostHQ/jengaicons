import * as React from "react";
import { SVGProps } from "react";

const SvgHomeLineFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={192}
    height={192}
    viewBox="0 0 256 256"
    {...props}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path d="M240 208h-16v-92.5a15.7 15.7 0 0 0-5.3-11.8l-80-72.7a15.9 15.9 0 0 0-21.5 0l-80 72.7a16 16 0 0 0-5.2 11.8V208H16a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16Zm-88 0h-48v-48a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8Z" />
  </svg>
);

export default SvgHomeLineFill;
