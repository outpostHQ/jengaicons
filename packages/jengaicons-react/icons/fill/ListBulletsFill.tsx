import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ListBulletsFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M9.364 9.605a1.252 1.252 0 1 1-2.504 0 1.252 1.252 0 0 1 2.504 0Zm3.34-1a1 1 0 1 0 0 2H26.06a1 1 0 1 0 0-2H12.703Zm0 6.678a1 1 0 1 0 0 2H26.06a1 1 0 0 0 0-2H12.704Zm-1 7.678a1 1 0 0 1 1-1H26.06a1 1 0 0 1 0 2H12.704a1 1 0 0 1-1-1Zm-3.592-5.426a1.252 1.252 0 1 0 0-2.504 1.252 1.252 0 0 0 0 2.504Zm1.252 5.426a1.252 1.252 0 1 1-2.504 0 1.252 1.252 0 0 1 2.504 0Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

ListBulletsFill.displayName = "ListBulletsFill";

export default ListBulletsFill;
