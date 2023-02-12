import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DesktopTowerRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M14.286 25.428H9.143M24.571 10h-3.428M24.571 13.428h-3.428M27.143 6.571H18.57a.857.857 0 0 0-.857.858V24.57c0 .474.384.858.857.858h8.572A.857.857 0 0 0 28 24.57V7.43a.857.857 0 0 0-.857-.858ZM11.714 22v3.429"
        />
        <path
          fill={color || "#000000"}
          d="M22.857 22.857a1.286 1.286 0 1 0 0-2.571 1.286 1.286 0 0 0 0 2.571Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15.143 10.857H4V22h11.143"
        />
      </svg>
    );
  }
);

DesktopTowerRegular.displayName = "DesktopTowerRegular";

export default DesktopTowerRegular;
