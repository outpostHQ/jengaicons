import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const AngularLogoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M12.961 16.876h6.124"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16.047 4 4.422 9.063l1.781 14.062L16.047 28l9.562-4.875 1.97-14.062L16.046 4Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="m11.64 19.469 4.284-8.544a.1.1 0 0 1 .178-.001l4.445 8.545"
        />
      </svg>
    );
  }
);

AngularLogoRegular.displayName = "AngularLogoRegular";

export default AngularLogoRegular;
