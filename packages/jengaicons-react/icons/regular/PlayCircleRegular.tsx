import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PlayCircleRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 28.5c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinejoin="round"
        />
        <path
          d="m21.699 16.5-9.66-6v12l9.66-6Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

PlayCircleRegular.displayName = "PlayCircleRegular";

export default PlayCircleRegular;
