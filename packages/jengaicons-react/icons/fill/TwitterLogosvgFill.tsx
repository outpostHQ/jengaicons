import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TwitterLogosvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15.69 10.738a4.74 4.74 0 0 1 9.085-1.896h4.185l-3.822 3.822a15.166 15.166 0 0 1-15.134 14.187c-3.792 0-4.74-1.422-4.74-1.422s3.792-1.422 5.687-4.265c0 0-7.582-3.792-5.687-14.218 0 0 4.74 4.74 10.425 5.687l.002-1.895Z"
        />
      </svg>
    );
  }
);

TwitterLogosvgFill.displayName = "TwitterLogosvgFill";

export default TwitterLogosvgFill;
