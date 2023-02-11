import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FolderMinusFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M5.46 5.783a1 1 0 0 0-1 1v4.906c0 .032.001.063.004.095v13.999a1 1 0 0 0 1 1H28.46a1 1 0 0 0 1-1v-14a1 1 0 0 0-1-1H18.01L14.235 6.15a1 1 0 0 0-.775-.368h-8Zm1 4.906V7.783h6.525l2.37 2.906H6.46Zm6.378 8.094a1 1 0 0 1 1-1h6.25a1 1 0 1 1 0 2h-6.25a1 1 0 0 1-1-1Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

FolderMinusFill.displayName = "FolderMinusFill";

export default FolderMinusFill;
