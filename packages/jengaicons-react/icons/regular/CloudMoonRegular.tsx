import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CloudMoonRegular = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
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
          d="M7.862 18.735c-1.04-.441-1.638-.95-2.366-1.815A7.175 7.175 0 0 1 4 13.927c.53.117 1.07.177 1.612.18a7.175 7.175 0 0 0 6.985-8.777 7.165 7.165 0 0 1 5.552 6.985c0 .112 0 .224-.01.336"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.213 17.088a5.374 5.374 0 1 0-1.336 10.582h8.291c1.937 0 3.878-.523 5.247-1.891.363-.363.723-.76 1.05-1.18a7.678 7.678 0 1 0-13.82-4.607"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

CloudMoonRegular.displayName = "CloudMoonRegular";

export default CloudMoonRegular;
