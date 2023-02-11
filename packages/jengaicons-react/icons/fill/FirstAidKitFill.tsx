import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FirstAidKitFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11.96 4.283a1 1 0 0 0-1 1v4h-5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-16a1 1 0 0 0-1-1h-5v-4a1 1 0 0 0-1-1h-10Zm9 5v-3h-8v3h8Zm-3 5.5a1 1 0 0 0-2 0v2.5h-2.5a1 1 0 1 0 0 2h2.5v2.5a1 1 0 1 0 2 0v-2.5h2.5a1 1 0 0 0 0-2h-2.5v-2.5Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

FirstAidKitFill.displayName = "FirstAidKitFill";

export default FirstAidKitFill;
