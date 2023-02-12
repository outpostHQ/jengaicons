import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DeviceTabletFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M8.96 4.283a2 2 0 0 0-2 2v.692h20v-.692a2 2 0 0 0-2-2h-16Zm-2 17.384V8.975h20v12.693h-20Zm0 2v2.616a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2.616h-20Zm8.039.812a1 1 0 0 0 0 2h3.923a1 1 0 1 0 0-2h-3.924Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

DeviceTabletFill.displayName = "DeviceTabletFill";

export default DeviceTabletFill;
