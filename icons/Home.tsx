import * as React from "react";
import { SVGProps } from "react";

const SvgHome = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={192}
    height={192}
    viewBox="0 0 256 256"
    {...props}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      d="M152 208v-48a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8v48a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8v-92.5a8.3 8.3 0 0 1 2.6-5.9l80-72.7a8 8 0 0 1 10.8 0l80 72.7a8.3 8.3 0 0 1 2.6 5.9V208a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8Z"
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
    />
  </svg>
);

export default SvgHome;
