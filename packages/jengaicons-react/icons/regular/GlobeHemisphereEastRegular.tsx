import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const GlobeHemisphereEastRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m6.148 22.872 1.903-1.043V16.55l3.191-4.787 3.56 2.025 4.543-.614 3.191-3.867v-3.13M26.894 20.54l-3.13-3.13-5.279 2.025-.307 3.253 3.744 1.044 1.32 1.32"
        />
      </svg>
    );
  }
);

GlobeHemisphereEastRegular.displayName = "GlobeHemisphereEastRegular";

export default GlobeHemisphereEastRegular;
