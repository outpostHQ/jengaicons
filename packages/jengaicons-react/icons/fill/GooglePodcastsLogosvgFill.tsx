import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const GooglePodcastsLogosvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.96 4.424v2.77M22.499 9.501v2.77M16.96 25.655v2.77M16.96 10.886v11.077M11.422 9.501v7.385M22.499 15.963v7.385M5.883 15.04v2.769M11.422 20.578v2.77M28.037 15.04v2.769"
        />
      </svg>
    );
  }
);

GooglePodcastsLogosvgFill.displayName = "GooglePodcastsLogosvgFill";

export default GooglePodcastsLogosvgFill;
