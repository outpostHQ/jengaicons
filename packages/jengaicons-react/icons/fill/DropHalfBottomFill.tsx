import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DropHalfBottomFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m16.96 4.283.574-.82a1 1 0 0 0-1.147 0l.573.82Zm-.794 1.901c.308-.262.578-.48.794-.65a29.017 29.017 0 0 1 3.86 3.674c2.252 2.588 4.371 6.05 4.371 9.844H8.729c0-3.794 2.12-7.256 4.37-9.844a29.026 29.026 0 0 1 3.067-3.024Zm.794-1.901c-.573-.82-.573-.82-.574-.819l-.003.002-.007.005-.024.017a11.306 11.306 0 0 0-.396.294c-.264.203-.638.498-1.086.878a31.029 31.029 0 0 0-3.28 3.236c-2.365 2.72-4.86 6.642-4.86 11.156a10.23 10.23 0 1 0 20.461 0c0-4.514-2.496-8.436-4.86-11.156a31.02 31.02 0 0 0-3.28-3.236 27.094 27.094 0 0 0-1.397-1.11 9.56 9.56 0 0 0-.086-.062l-.024-.017-.007-.005-.002-.001c-.001-.001-.001-.001-.575.818Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

DropHalfBottomFill.displayName = "DropHalfBottomFill";

export default DropHalfBottomFill;
