import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TextHFiveRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M6 8.6v12M16.4 14.6H6M16.4 8.6v12M20.944 22.398c.518.61 1.324 1.002 2.229 1.002 1.561 0 2.827-1.167 2.827-2.606 0-1.44-1.266-2.606-2.827-2.606-.69 0-1.32.227-1.811.605-.105.08-.203.168-.293.26l.91-5.253H26"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

TextHFiveRegular.displayName = "TextHFiveRegular";

export default TextHFiveRegular;
