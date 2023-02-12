import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DeviceMobileFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11.575 4.283a2 2 0 0 0-2 2v.692h14.77v-.692a2 2 0 0 0-2-2h-10.77Zm-2 17.384V8.975h14.77v12.693H9.574Zm0 2v2.616a2 2 0 0 0 2 2h10.77a2 2 0 0 0 2-2v-2.616H9.574Zm5.936.812a1 1 0 1 0 0 2h2.897a1 1 0 1 0 0-2h-2.897Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

DeviceMobileFill.displayName = "DeviceMobileFill";

export default DeviceMobileFill;
