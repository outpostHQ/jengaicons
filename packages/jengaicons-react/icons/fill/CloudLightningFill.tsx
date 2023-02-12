import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CloudLightningFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10.706 9.435a5.335 5.335 0 0 1 2.243.086c.55-1.075 1.622-2.594 2.601-3.3a7.621 7.621 0 0 1 10.553 10.755c-.39.501-.828.97-1.262 1.386-1.24 1.192-2.96 1.662-4.68 1.662h-1.945a.995.995 0 0 1-.169.555l-1.884 2.825h3.72a1 1 0 0 1 .831 1.555l-2.922 4.379a1 1 0 1 1-1.664-1.11l1.885-2.825h-3.72a1 1 0 0 1-.831-1.554l2.552-3.825h-4.391a5.334 5.334 0 0 1-.917-10.589Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

CloudLightningFill.displayName = "CloudLightningFill";

export default CloudLightningFill;
