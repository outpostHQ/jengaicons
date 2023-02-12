import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TrafficConeFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fill={color || "#000000"}
          fillRule="evenodd"
          d="M14.865 5.668a1 1 0 0 0-.945.671l-1.987 5.713h8.134L18.079 6.34a1 1 0 0 0-.944-.671h-2.27Zm5.897 8.384h-9.525l-1.873 5.385h13.271l-1.873-5.385ZM7.232 25.57l1.437-4.133H23.33l1.438 4.133c.038.11.056.22.056.328H28a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h3.175c0-.108.018-.218.056-.328Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

TrafficConeFill.displayName = "TrafficConeFill";

export default TrafficConeFill;
