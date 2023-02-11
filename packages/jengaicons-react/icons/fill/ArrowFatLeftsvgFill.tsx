import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowFatLeftsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.96 5.49a.5.5 0 0 0-.853-.354L5.314 15.93a.5.5 0 0 0 0 .708l10.793 10.792a.5.5 0 0 0 .853-.353v-4.293a.5.5 0 0 1 .5-.5h10.5a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1h-10.5a.5.5 0 0 1-.5-.5V5.49Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

ArrowFatLeftsvgFill.displayName = "ArrowFatLeftsvgFill";

export default ArrowFatLeftsvgFill;
