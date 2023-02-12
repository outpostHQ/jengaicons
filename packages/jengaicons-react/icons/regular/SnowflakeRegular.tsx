import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SnowflakeRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 7.792v17.415M12.735 4.527 16 7.793l3.265-3.266M12.735 28.473 16 25.208l3.265 3.265M8.463 12.146l15.074 8.708M4 13.344l4.463-1.198-1.198-4.462M24.735 25.316l-1.198-4.462L28 19.657M8.463 20.854l15.074-8.708M7.265 25.316l1.198-4.462L4 19.657M28 13.344l-4.463-1.198 1.198-4.462"
        />
      </svg>
    );
  }
);

SnowflakeRegular.displayName = "SnowflakeRegular";

export default SnowflakeRegular;
