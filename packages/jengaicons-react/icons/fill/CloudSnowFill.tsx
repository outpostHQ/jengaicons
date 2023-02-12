import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CloudSnowFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10.706 9.435a5.335 5.335 0 0 1 2.243.086c.55-1.075 1.622-2.594 2.601-3.3a7.621 7.621 0 0 1 10.553 10.755c-.39.501-.828.97-1.262 1.386-1.24 1.192-2.96 1.662-4.68 1.662h-8.538a5.334 5.334 0 0 1-.917-10.589Zm1.834 13.601a1.326 1.326 0 1 1-2.653 0 1.326 1.326 0 0 1 2.652 0Zm4.42 1.768a1.326 1.326 0 1 1-2.652 0 1.326 1.326 0 0 1 2.652 0Zm3.979-.441a1.326 1.326 0 1 0 0-2.653 1.326 1.326 0 0 0 0 2.652Zm-9.284 3.094a1.326 1.326 0 1 1-2.652 0 1.326 1.326 0 0 1 2.652 0Zm8.4 1.326a1.326 1.326 0 1 0 0-2.652 1.326 1.326 0 0 0 0 2.652Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

CloudSnowFill.displayName = "CloudSnowFill";

export default CloudSnowFill;
