import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TrafficSignFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M5.667 15.576a1 1 0 0 0 0 1.414l10.586 10.586a1 1 0 0 0 1.414 0L28.253 16.99a1 1 0 0 0 0-1.414L17.667 4.99a1 1 0 0 0-1.414 0L5.667 15.576Zm12.182-3a1 1 0 0 1 1.414 0l2.952 2.952c.21.183.341.452.341.752v.005c0 .255-.098.51-.293.705l-3 3a1 1 0 0 1-1.414-1.414l1.296-1.296h-5.781v2.003a1 1 0 1 1-2 0V16.28a1 1 0 0 1 1-1h6.775l-1.29-1.29a1 1 0 0 1 0-1.414Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

TrafficSignFill.displayName = "TrafficSignFill";

export default TrafficSignFill;
