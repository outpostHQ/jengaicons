import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BrowsersFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        fillRule="evenodd"
        d="M8.888 5.283a1 1 0 0 0-1 1v3H4.96a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20.073a1 1 0 0 0 1-1v-3h2.927a1 1 0 0 0 1-1v-16a1 1 0 0 0-1-1H8.888Zm17.145 16h1.927v-14H9.888v2h15.145a1 1 0 0 1 1 1v11Zm-20.073-10v3h18.073v-3H5.96Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

BrowsersFill.displayName = "BrowsersFill";

export default BrowsersFill;
