import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ApplePodcastsLogoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 18.003a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8.537 18.903A7.996 7.996 0 0 1 16 8.023a8.002 8.002 0 0 1 7.946 7.07 7.996 7.996 0 0 1-.484 3.81"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.55 26.113a11.997 11.997 0 0 1-5.07-13.475A11.996 11.996 0 0 1 16 4a12.002 12.002 0 0 1 11.52 8.638 11.994 11.994 0 0 1-5.07 13.475"
        />
        <path
          stroke={color || "#000000"}
          strokeWidth="2"
          d="M12.916 20.395a2 2 0 0 1 1.96-2.392h2.247a2 2 0 0 1 1.961 2.392l-1.215 6.073a1.907 1.907 0 0 1-3.739 0l-1.214-6.073Z"
        />
      </svg>
    );
  }
);

ApplePodcastsLogoRegular.displayName = "ApplePodcastsLogoRegular";

export default ApplePodcastsLogoRegular;
