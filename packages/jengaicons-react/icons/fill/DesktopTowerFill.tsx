import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DesktopTowerFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.103 6.854H19.53a.857.857 0 0 0-.857.858v17.142c0 .474.384.858.858.858h8.57a.857.857 0 0 0 .858-.858V7.712a.857.857 0 0 0-.857-.858Zm-7 3.429a1 1 0 0 1 1-1h3.429a1 1 0 1 1 0 2h-3.429a1 1 0 0 1-1-1Zm1 2.428a1 1 0 1 0 0 2h3.429a1 1 0 1 0 0-2h-3.429Zm1.714 10.43a1.286 1.286 0 1 0 0-2.572 1.286 1.286 0 0 0 0 2.571Zm-7.121-12.964H5.96a1 1 0 0 0-1 1v9.143a1 1 0 0 0 1 1h4.368v2.428H8.756a1 1 0 1 0 0 2H13.9a1 1 0 1 0 0-2h-1.571V21.32h4.368a1 1 0 0 0 1-1v-9.143a1 1 0 0 0-1-1Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

DesktopTowerFill.displayName = "DesktopTowerFill";

export default DesktopTowerFill;
