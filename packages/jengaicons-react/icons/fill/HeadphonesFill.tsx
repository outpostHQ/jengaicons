import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const HeadphonesFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.96 18.208V27.267h-6.117v-9.059h6.117a11.91 11.91 0 0 0-12-11.91 11.91 11.91 0 0 0-12 11.91h5.935v9.06H4.96v-9.06a11.91 11.91 0 0 1 12-11.91 11.91 11.91 0 0 1 12 11.91Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M28.96 18.208V27.267h-6.117v-9.059h6.117Zm0 0a11.91 11.91 0 0 0-12-11.91 11.91 11.91 0 0 0-12 11.91m0 0V27.267h5.935v-9.059H4.96Z"
        />
      </svg>
    );
  }
);

HeadphonesFill.displayName = "HeadphonesFill";

export default HeadphonesFill;
