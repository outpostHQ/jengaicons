import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DeviceMobileRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M14.552 25.196h2.896M8.615 7.692h14.77M8.615 22.385h14.77"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8.615 6a2 2 0 0 1 2-2h10.77a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2h-10.77a2 2 0 0 1-2-2V6Z"
        />
      </svg>
    );
  }
);

DeviceMobileRegular.displayName = "DeviceMobileRegular";

export default DeviceMobileRegular;
