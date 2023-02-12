import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CircleWavyCheckRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m15.93 4.047-3.396 2.64H7.112v4.999L4 15.836l3.112 3.63v5.092h5.422l3.395 3.395 3.207-3.395h5.893v-5.092L28 15.836l-2.97-4.15V6.688h-5.895l-3.206-2.64Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m12.37 16.12 2.34 2.34 4.92-4.92"
        />
      </svg>
    );
  }
);

CircleWavyCheckRegular.displayName = "CircleWavyCheckRegular";

export default CircleWavyCheckRegular;
