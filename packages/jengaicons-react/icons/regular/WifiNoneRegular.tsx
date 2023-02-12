import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const WifiNoneRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 17.399a1.4 1.4 0 1 0 0-2.798 1.4 1.4 0 0 0 0 2.798Z"
        />
      </svg>
    );
  }
);

WifiNoneRegular.displayName = "WifiNoneRegular";

export default WifiNoneRegular;
