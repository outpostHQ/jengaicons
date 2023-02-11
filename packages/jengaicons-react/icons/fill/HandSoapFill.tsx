import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const HandSoapFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M15.96 5.283h-1.777a1 1 0 1 1 0-2h9.447a1 1 0 0 1 1 1v2.37a1 1 0 0 1-2 0v-1.37h-4.67v3.764h3.77a1 1 0 0 1 1 1v3.809h2.848a1 1 0 0 1 1 1v12.427a1 1 0 0 1-1 1H8.342a1 1 0 0 1-1-1V14.856a1 1 0 0 1 1-1h2.847v-3.81a1 1 0 0 1 1-1h3.771V5.284Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

HandSoapFill.displayName = "HandSoapFill";

export default HandSoapFill;
