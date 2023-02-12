import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SlidersFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M27.351 5.305a1 1 0 1 0-2 0v14.087c0 .065.006.129.018.19a2.61 2.61 0 0 0 0 4.836 1.006 1.006 0 0 0-.018.191v3.652a1 1 0 1 0 2 0V24.61c0-.065-.006-.13-.018-.19a2.61 2.61 0 0 0 0-4.837c.012-.061.018-.125.018-.19V5.305Zm-10.391-1a1 1 0 0 1 1 1v3.652c0 .065-.006.13-.018.19a2.61 2.61 0 0 1 0 4.836c.012.062.018.126.018.191v14.087a1 1 0 1 1-2 0V14.174c0-.065.006-.129.018-.19a2.61 2.61 0 0 1 0-4.836 1 1 0 0 1-.018-.191V5.305a1 1 0 0 1 1-1ZM6.587 20.244a2.61 2.61 0 0 1 0-4.835 1.005 1.005 0 0 1-.019-.191V5.305a1 1 0 1 1 2 0v9.913c0 .065-.006.129-.018.19a2.61 2.61 0 0 1 0 4.836c.012.062.018.126.018.191v7.826a1 1 0 1 1-2 0v-7.826c0-.065.007-.13.019-.191Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

SlidersFill.displayName = "SlidersFill";

export default SlidersFill;
