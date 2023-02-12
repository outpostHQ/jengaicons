import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TwitchLogoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M20.835 9.715v5.802M15.033 9.715v5.802"
        />
        <path
          stroke={color || "#000000"}
          strokeWidth="2"
          d="M26.204 4H5.796a.5.5 0 0 0-.5.5v17.912a.5.5 0 0 0 .5.5H9.02a.5.5 0 0 1 .5.5v3.491a.5.5 0 0 0 .828.378l4.887-4.246a.5.5 0 0 1 .328-.123h5.19a.5.5 0 0 0 .334-.128l5.451-4.907a.5.5 0 0 0 .166-.372V4.5a.5.5 0 0 0-.5-.5Z"
        />
      </svg>
    );
  }
);

TwitchLogoRegular.displayName = "TwitchLogoRegular";

export default TwitchLogoRegular;
