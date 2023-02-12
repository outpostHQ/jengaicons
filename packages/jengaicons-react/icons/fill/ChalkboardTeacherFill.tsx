import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ChalkboardTeacherFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M7.952 27.558v-1.275c.152-1.302 1.56-3.925 5.977-3.999 4.416-.073 5.853 2.635 6.019 3.999v1.275"
        />
        <path
          fill={color || "#000000"}
          fillRule="evenodd"
          d="M5.96 6.283h22a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-7.126c-.506 0-.926-.384-1.113-.853-.407-1.019-1.371-2.248-3.251-2.822a5 5 0 1 0-4.965.031c-1.924.588-2.906 1.793-3.32 2.788-.194.469-.615.856-1.123.856H5.96a1 1 0 0 1-1-1v-18a1 1 0 0 1 1-1Zm2 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1V22.29a1 1 0 0 1-1 1h-2.349a1 1 0 1 1 0-2h1.349V11.283h-14v1.245a1 1 0 0 1-2 0v-2.245Zm6 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

ChalkboardTeacherFill.displayName = "ChalkboardTeacherFill";

export default ChalkboardTeacherFill;
