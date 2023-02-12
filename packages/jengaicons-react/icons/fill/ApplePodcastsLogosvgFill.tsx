import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ApplePodcastsLogosvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.96 18.427a3 3 0 1 0 .001-5.999 3 3 0 0 0 0 6Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.498 19.327a7.996 7.996 0 0 1 7.462-10.88 8.002 8.002 0 0 1 7.946 7.07 7.997 7.997 0 0 1-.483 3.81"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10.51 26.537a11.997 11.997 0 0 1-.75-19.713 12.002 12.002 0 0 1 18.72 6.239 11.993 11.993 0 0 1-5.07 13.474"
        />
        <path
          fill={color || "#000000"}
          d="M13.876 20.82a2 2 0 0 1 1.961-2.393h2.246a2 2 0 0 1 1.961 2.393l-1.214 6.072a1.907 1.907 0 0 1-3.74 0l-1.214-6.072Z"
        />
      </svg>
    );
  }
);

ApplePodcastsLogosvgFill.displayName = "ApplePodcastsLogosvgFill";

export default ApplePodcastsLogosvgFill;
