import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CameraSlashFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
        <path
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M7.501 4.321a1 1 0 0 0-1.48 1.346l3.287 3.615H5.96a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h19.711l2.169 2.385a1 1 0 1 0 1.48-1.346L7.5 4.322Zm12.527 16.753-6.054-6.66a4.5 4.5 0 1 0 6.054 6.659ZM23.54 9.282h4.419a1 1 0 0 1 1 1v13.477L12.98 6.284h7.469a1 1 0 0 1 .828.439l1.436 2.12a1 1 0 0 0 .828.439Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

CameraSlashFill.displayName = "CameraSlashFill";

export default CameraSlashFill;
