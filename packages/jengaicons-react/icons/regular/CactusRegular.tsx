import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CactusRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M5.846 27.577h20.308M12.308 27.577v-9.692h-1.385A6.923 6.923 0 0 1 4 10.962v0a2.32 2.32 0 0 1 2.308-2.308 2.32 2.32 0 0 1 2.307 2.308 2.32 2.32 0 0 0 2.308 2.307h1.385V9.115A3.692 3.692 0 0 1 16 5.423v0a3.692 3.692 0 0 1 3.692 3.692v8.77h1.385a2.32 2.32 0 0 0 2.308-2.308v0a2.32 2.32 0 0 1 2.307-2.308A2.32 2.32 0 0 1 28 15.577v0a6.923 6.923 0 0 1-6.923 6.923h-1.385v5.077"
        />
      </svg>
    );
  }
);

CactusRegular.displayName = "CactusRegular";

export default CactusRegular;
