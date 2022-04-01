import * as React from "react";
import { SVGProps } from "react";

const SvgHomeFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={192}
    height={192}
    viewBox="0 0 256 256"
    {...props}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path d="m218.8 103.7-80-72.7a16 16 0 0 0-21.6 0l-80 72.7a16 16 0 0 0-5.2 11.8v92.1a16.4 16.4 0 0 0 4 11 15.9 15.9 0 0 0 12 5.4h48a8 8 0 0 0 8-8v-48a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8v48a8 8 0 0 0 8 8h48a15.6 15.6 0 0 0 7.6-1.9A16.1 16.1 0 0 0 224 208v-92.5a16 16 0 0 0-5.2-11.8Z" />
  </svg>
);

export default SvgHomeFill;
