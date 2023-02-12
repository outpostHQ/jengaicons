import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PushPinSimpleSlashRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M12.07 4h12.09M16.48 20.32V28M6.88 4l19.2 21.12M22.24 4l2.45 13.882M21.716 20.32H5.92M7.84 20.32l2.256-12.783"
        />
      </svg>
    );
  }
);

PushPinSimpleSlashRegular.displayName = "PushPinSimpleSlashRegular";

export default PushPinSimpleSlashRegular;
