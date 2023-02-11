import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DogRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
  const { size = 32 } = props;

  return (
    <svg
      style={{ width: size, height: size }}
      ref={ref}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        d="M16 24.762v2.934"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.598 19.871a1.467 1.467 0 1 0 0-2.934 1.467 1.467 0 0 0 0 2.934ZM20.402 19.871a1.467 1.467 0 1 0 0-2.934 1.467 1.467 0 0 0 0 2.934Z"
        fill="#1C1B1F"
      />
      <path
        d="M17.956 22.806 16 24.762l-1.956-1.956M13.066 7.156h5.868"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.219 15.873v6.824a5 5 0 0 0 5 5h9.563a5 5 0 0 0 5-5v-6.824M6.444 5.303l7.6 1.935L4 17.858 6.444 5.304ZM25.556 5.303l-7.6 1.935L28 17.858 25.556 5.304Z"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

DogRegular.displayName = "DogRegular";

export default DogRegular;
