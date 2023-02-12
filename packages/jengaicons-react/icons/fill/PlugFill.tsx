import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PlugFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M23.907 3.576a1 1 0 0 1 0 1.414l-4.093 4.093 4.346 4.346 4.093-4.093a1 1 0 0 1 1.414 1.414l-4.093 4.093 3.133 3.133a1 1 0 0 1-1.414 1.414l-1.303-1.303-7.451 7.45a2 2 0 0 1-2.829 0l-3.296-3.295c-.008.01-.018.019-.027.028l-6.72 6.72a1 1 0 0 1-1.414-1.414l6.72-6.72a.914.914 0 0 1 .028-.028L7.9 17.727a2 2 0 0 1 0-2.829l7.45-7.45-1.497-1.498a1 1 0 1 1 1.414-1.414L18.4 7.669l4.093-4.093a1 1 0 0 1 1.414 0Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

PlugFill.displayName = "PlugFill";

export default PlugFill;
