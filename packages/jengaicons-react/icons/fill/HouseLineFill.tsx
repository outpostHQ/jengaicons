import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const HouseLineFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.192 6.999 7.44 14.687a1 1 0 0 0-.34.752v9.701H4.96a1 1 0 1 0 0 2h24a1 1 0 0 0 0-2h-2.14v-9.695a1 1 0 0 0-.348-.758l-8.97-7.696a1 1 0 0 0-1.31.008Zm3.552 18.141v-4.67a1 1 0 0 0-1-1h-3.723a1 1 0 0 0-1 1v4.67h5.723Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

HouseLineFill.displayName = "HouseLineFill";

export default HouseLineFill;
