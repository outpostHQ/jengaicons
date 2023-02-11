import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TwitchLogosvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M27.164 4.424H6.756a.5.5 0 0 0-.5.5v17.912a.5.5 0 0 0 .5.5H9.98a.5.5 0 0 1 .5.5v3.492a.5.5 0 0 0 .828.377l4.887-4.246a.5.5 0 0 1 .328-.123h5.19a.5.5 0 0 0 .334-.128l5.452-4.907a.5.5 0 0 0 .165-.371V4.924a.5.5 0 0 0-.5-.5Zm-5.37 4.715a1 1 0 0 1 1 1v5.802a1 1 0 1 1-2 0v-5.802a1 1 0 0 1 1-1Zm-4.8 1a1 1 0 1 0-2 0v5.802a1 1 0 1 0 2 0v-5.802Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

TwitchLogosvgFill.displayName = "TwitchLogosvgFill";

export default TwitchLogosvgFill;
