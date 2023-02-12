import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const HourglassSimpleHighFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M7.71 4.783a1 1 0 0 1 1-1h16.5a1 1 0 0 1 1 1v2.54a11 11 0 0 1-4.81 9.095l-.537.365.537.365a11 11 0 0 1 4.81 9.094v2.541a1 1 0 0 1-1 1H8.71a1 1 0 0 1-1-1v-2.54a11 11 0 0 1 4.81-9.095l.537-.365-.537-.366a11 11 0 0 1-4.81-9.093V4.783Zm7.666 12.841-1.73 1.178a9 9 0 0 0-3.937 7.44v1.541h14.502v-1.54a9 9 0 0 0-3.937-7.441l-1.73-1.178a.994.994 0 0 1-.162-.13l-1.281.001h-.002l-1.563.002a.99.99 0 0 1-.16.127Zm8.835-10.3c0 .842-.118 1.668-.343 2.459H10.052a8.996 8.996 0 0 1-.343-2.46v-1.54h14.502v1.54Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

HourglassSimpleHighFill.displayName = "HourglassSimpleHighFill";

export default HourglassSimpleHighFill;
