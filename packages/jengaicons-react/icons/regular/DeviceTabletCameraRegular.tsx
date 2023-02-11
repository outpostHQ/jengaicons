import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DeviceTabletCameraRegular = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size = 32 } = props;

    return (
      <svg
        style={{ width: size, height: size }}
        ref={ref}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        {...props}
      >
        <path d="M16 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="#1C1B1F" />
        <path
          d="M6 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

DeviceTabletCameraRegular.displayName = "DeviceTabletCameraRegular";

export default DeviceTabletCameraRegular;
