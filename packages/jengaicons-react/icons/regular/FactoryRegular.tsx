import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FactoryRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10.857 22h3M18.143 22h3M25.429 26.286v-8.572h-8.007l-3.775-5.142-1.933 5.142-5.142-5.142v13.714M4 26.284h24"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M25.428 17.714 23.82 6.45a.857.857 0 0 0-.848-.736h-1.942a.857.857 0 0 0-.849.736l-2.44 11.265"
        />
      </svg>
    );
  }
);

FactoryRegular.displayName = "FactoryRegular";

export default FactoryRegular;
