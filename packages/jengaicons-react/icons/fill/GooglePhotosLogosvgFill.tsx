import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const GooglePhotosLogosvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M17.422 16.886V4.424a6.923 6.923 0 0 1 4.154 12.462"
          fill="#1C1B1F"
        />
        <path
          d="M17.422 16.886V4.424a6.923 6.923 0 0 1 4.154 12.462M17.422 15.963H4.96a6.923 6.923 0 0 1 12.462-4.154"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.499 15.963v12.461a6.923 6.923 0 0 1-4.154-12.461"
          fill="#1C1B1F"
        />
        <path
          d="M16.499 15.963v12.461a6.923 6.923 0 0 1-4.154-12.461M16.499 16.886H28.96A6.923 6.923 0 0 1 16.5 21.04"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

GooglePhotosLogosvgFill.displayName = "GooglePhotosLogosvgFill";

export default GooglePhotosLogosvgFill;
