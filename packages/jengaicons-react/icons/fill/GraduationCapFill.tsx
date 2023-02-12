import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const GraduationCapFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M26.16 14.432v5.18a.731.731 0 0 1-.16.454c-.673.852-3.515 3.968-9.04 3.968-5.526 0-8.368-3.116-9.041-3.968a.731.731 0 0 1-.16-.454v-5.18"
        />
        <path
          fill={color || "#000000"}
          fillRule="evenodd"
          d="m28.693 11.27-11-6.156a1.5 1.5 0 0 0-1.466 0l-11 6.156a1.5 1.5 0 0 0-.034 2.598l11 6.546a1.5 1.5 0 0 0 1.533 0l4.192-2.792-.002-.927-.005-.008.006-.003v-.507l-.506-.266-.005-.008-.005.002-4.923-2.593a1 1 0 0 1 .933-1.77l5.972 3.147a1 1 0 0 1 .53.806l-.005 1.459 4.821-3.087a1.5 1.5 0 0 0-.036-2.597Z"
          clip-rule="evenodd"
        />
        <path
          fill={color || "#000000"}
          fillRule="evenodd"
          d="M21.916 26.786v-9.153l2-.692v9.845a1 1 0 1 1-2 0Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

GraduationCapFill.displayName = "GraduationCapFill";

export default GraduationCapFill;
