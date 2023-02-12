import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DeviceTabletSpeakerFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M8.96 4.283a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-20a2 2 0 0 0-2-2h-16Zm4 3a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

DeviceTabletSpeakerFill.displayName = "DeviceTabletSpeakerFill";

export default DeviceTabletSpeakerFill;
