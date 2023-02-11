import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MicrophoneStageFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M22.023 18.657a6.905 6.905 0 0 0 3.97-1.247l-9.66-9.66a6.905 6.905 0 0 0-1.247 3.97c0 .45.043.89.125 1.316L6.23 24.491l2.386 2.386 12.059-8.35c.436.085.886.13 1.347.13Zm-4.32-12.365 9.748 9.748a6.937 6.937 0 0 0-9.748-9.748Zm-2.497 12.245a1 1 0 0 1 0 1.414l-1.3 1.3a1 1 0 0 1-1.414-1.414l1.3-1.3a1 1 0 0 1 1.414 0Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

MicrophoneStageFill.displayName = "MicrophoneStageFill";

export default MicrophoneStageFill;
