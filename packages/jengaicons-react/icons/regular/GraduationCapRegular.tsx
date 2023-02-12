import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const GraduationCapRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M25.2 14.15v5.179a.731.731 0 0 1-.159.455c-.674.851-3.516 3.967-9.04 3.967-5.526 0-8.368-3.116-9.042-3.967a.731.731 0 0 1-.159-.455v-5.18"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="m16 19.35 12-7.14-12-6.715L4 12.21l12 7.14Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m15.985 12.145 5.972 3.146v11.215"
        />
      </svg>
    );
  }
);

GraduationCapRegular.displayName = "GraduationCapRegular";

export default GraduationCapRegular;
