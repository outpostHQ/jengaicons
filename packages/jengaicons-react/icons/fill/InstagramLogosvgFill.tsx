import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const InstagramLogosvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.96 9.424a5 5 0 0 1 5-5h14a5 5 0 0 1 5 5v14a5 5 0 0 1-5 5h-14a5 5 0 0 1-5-5v-14Zm12 2.783a4.217 4.217 0 1 0 0 8.435 4.217 4.217 0 0 0 0-8.435Zm-6.217 4.217a6.217 6.217 0 1 1 12.435 0 6.217 6.217 0 0 1-12.435 0Zm14.565-6.782a1.565 1.565 0 1 1-3.13 0 1.565 1.565 0 0 1 3.13 0Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

InstagramLogosvgFill.displayName = "InstagramLogosvgFill";

export default InstagramLogosvgFill;
