import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const NeedleRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m22.712 9.269-2.043 2.043M4.166 28c8.121-7.656 11.716-15.433 12.508-18.392a.096.096 0 0 1 .026-.043l2.76-2.768a3.946 3.946 0 0 1 5.584-.003v0a3.946 3.946 0 0 1 0 5.58l-3.087 3.087a.099.099 0 0 1-.056.028C16.606 16.243 7.876 24.14 4.166 28Z"
        />
      </svg>
    );
  }
);

NeedleRegular.displayName = "NeedleRegular";

export default NeedleRegular;
