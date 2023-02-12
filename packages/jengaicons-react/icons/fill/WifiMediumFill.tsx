import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const WifiMediumFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fillRule="evenodd"
          d="M16.96 11.487a10.514 10.514 0 0 0-7.347 2.994 1 1 0 1 1-1.398-1.43 12.513 12.513 0 0 1 17.49 0 1 1 0 1 1-1.398 1.43 10.513 10.513 0 0 0-7.347-2.994Zm0 5.597a4.92 4.92 0 0 0-3.398 1.362A1 1 0 1 1 12.18 17a6.92 6.92 0 0 1 9.56 0 1 1 0 1 1-1.382 1.446 4.92 4.92 0 0 0-3.398-1.362Zm1.4 4.595a1.4 1.4 0 1 1-2.798 0 1.4 1.4 0 0 1 2.798 0Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

WifiMediumFill.displayName = "WifiMediumFill";

export default WifiMediumFill;
