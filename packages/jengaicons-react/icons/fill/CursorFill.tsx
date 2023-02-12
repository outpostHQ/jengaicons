import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CursorFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M9.326 7.727a.5.5 0 0 0-.619.618l3.72 13.017a.5.5 0 0 0 .912.117l2.723-4.605 7.691 7.692a1 1 0 1 0 1.414-1.415l-7.726-7.726 5.042-3.064a.5.5 0 0 0-.122-.908L9.326 7.727Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

CursorFill.displayName = "CursorFill";

export default CursorFill;
