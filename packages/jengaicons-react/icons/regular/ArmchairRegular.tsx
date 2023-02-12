import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArmchairRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10.857 18.143h10.286M7.428 13v-2.571A3.429 3.429 0 0 1 10.857 7h10.286a3.428 3.428 0 0 1 3.428 3.429V13"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10.857 24.857V16.43a3.428 3.428 0 1 0-3.428 3.428v4.286a.857.857 0 0 0 .857.857h15.428a.857.857 0 0 0 .857-.857v-4.286a3.428 3.428 0 1 0-3.428-3.428v8.428"
        />
      </svg>
    );
  }
);

ArmchairRegular.displayName = "ArmchairRegular";

export default ArmchairRegular;
