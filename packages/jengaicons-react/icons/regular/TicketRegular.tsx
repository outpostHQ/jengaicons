import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TicketRegular = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size, color } = props;

    return (
      <svg
        style={{ width: size || 32, height: size || 32 }}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
        {...props}
      >
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12.308 7.692v16.616"
        />
        <path
          fill={color || "#000000"}
          d="M28 12.935v1a1 1 0 0 0 1-1h-1Zm0 6.13h1a1 1 0 0 0-1-1v1Zm-24 0v-1a1 1 0 0 0-1 1h1Zm0-6.13H3a1 1 0 0 0 1 1v-1Zm.5-6.243a1.5 1.5 0 0 0-1.5 1.5h2a.5.5 0 0 1-.5.5v-2Zm23 0h-23v2h23v-2Zm1.5 1.5a1.5 1.5 0 0 0-1.5-1.5v2a.5.5 0 0 1-.5-.5h2Zm0 4.743V8.192h-2v4.743h2ZM25.934 16c0-1.14.925-2.065 2.066-2.065v-2A4.066 4.066 0 0 0 23.934 16h2ZM28 18.066A2.066 2.066 0 0 1 25.934 16h-2A4.066 4.066 0 0 0 28 20.066v-2Zm1 5.742v-4.742h-2v4.742h2Zm-1.5 1.5a1.5 1.5 0 0 0 1.5-1.5h-2a.5.5 0 0 1 .5-.5v2Zm-23 0h23v-2h-23v2Zm-1.5-1.5a1.5 1.5 0 0 0 1.5 1.5v-2a.5.5 0 0 1 .5.5H3Zm0-4.742v4.742h2v-4.742H3ZM6.066 16c0 1.141-.925 2.066-2.066 2.066v2A4.066 4.066 0 0 0 8.066 16h-2ZM4 13.935c1.14 0 2.066.924 2.066 2.065h2A4.066 4.066 0 0 0 4 11.935v2ZM3 8.192v4.743h2V8.192H3Z"
        />
      </svg>
    );
  }
);

TicketRegular.displayName = "TicketRegular";

export default TicketRegular;
