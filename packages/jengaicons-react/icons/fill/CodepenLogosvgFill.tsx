import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CodepenLogosvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M17.488 4.931a1 1 0 0 0-.976 0l-12 6.715a1 1 0 0 0-.506.98c-.004.034-.006.07-.006.106v6.928a1 1 0 0 0 2 0v-5.382l3.989 2.373.859.512 1.023-1.719-.86-.511-4.01-2.387 8.96-5.014v6.556a1 1 0 1 0 2 0v-6.6L27 12.545l-4.012 2.387-.859.511 1.023 1.719.86-.512L28 14.278v5.578a1 1 0 1 0 2 0v-7.124a1.02 1.02 0 0 0-.006-.107 1 1 0 0 0-.506-.979l-12-6.715Z"
          fill="#1C1B1F"
        />
        <path
          d="m12.381 15.751 4.58-2.562 4.612 2.581-4.61 2.726-4.582-2.745ZM15.972 25.011l.006.003v1.624c0 .293-.252.542-.506.395L4.498 20.67a1 1 0 0 1 1.004-1.73l.578.336 4.289-2.4 5.613 3.363-.01 4.771ZM17.96 20.23v6.212h.002v.316c0 .278.242.512.484.372L29.42 20.77a1 1 0 0 0-1.004-1.73l-.492.285-4.332-2.424-5.631 3.33Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

CodepenLogosvgFill.displayName = "CodepenLogosvgFill";

export default CodepenLogosvgFill;
