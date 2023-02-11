import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const StorefrontRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M5.822 18.204v9.16h20.356v-9.16"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 14.204a4 4 0 1 1-8 0"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 14.204a4 4 0 0 1-3.922 4C5.836 18.247 4 16.368 4 14.125v-1.568c0-.748 1.317-6.565 1.847-7.094a2.824 2.824 0 0 1 1.996-.827h16.314c.749 0 1.467.297 1.996.827.53.53 1.847 6.346 1.847 7.094v1.568c0 2.243-1.835 4.122-4.078 4.079a4 4 0 0 1-3.922-4"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

StorefrontRegular.displayName = "StorefrontRegular";

export default StorefrontRegular;
