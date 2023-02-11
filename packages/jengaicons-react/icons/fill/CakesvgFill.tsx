import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CakesvgFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16.96 13.514v-2.77"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.96 10.745c5.333-1.847 0-6.462 0-6.462s-5.538 4.615 0 6.462Z"
        fill="#1C1B1F"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M20.883 17.898a3.923 3.923 0 1 1-7.846 0" fill="#2B2962" />
      <path
        d="M13.037 17.898a3.923 3.923 0 0 1-3.847 3.923c-2.2.042-4-1.8-4-4v-1.538a2.77 2.77 0 0 1 2.77-2.77h18a2.769 2.769 0 0 1 2.769 2.77v1.538c0 2.2-1.8 4.042-4 4a3.923 3.923 0 0 1-3.846-3.923"
        fill="#2B2962"
      />
      <path
        d="M20.883 17.898a3.923 3.923 0 1 1-7.846 0 3.923 3.923 0 0 1-3.847 3.923c-2.2.042-4-1.8-4-4v-1.538a2.77 2.77 0 0 1 2.77-2.77h18a2.769 2.769 0 0 1 2.769 2.77v1.538c0 2.2-1.8 4.042-4 4a3.923 3.923 0 0 1-3.846-3.923Z"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.114 21.045v6.315a.923.923 0 0 1-.923.923H7.729a.923.923 0 0 1-.923-.923v-6.315"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CakesvgFill.displayName = "CakesvgFill";

export default CakesvgFill;
