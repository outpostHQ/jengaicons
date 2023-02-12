import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SunDimFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16.96 3.783a1 1 0 0 1 1 1v.96a1 1 0 0 1-2 0v-.96a1 1 0 0 1 1-1Zm0 20.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4ZM9.183 7.592A1 1 0 1 0 7.77 9.006l.672.672a1 1 0 0 0 1.414-1.414l-.672-.672ZM3.96 16.783a1 1 0 0 1 1-1h.96a1 1 0 1 1 0 2h-.96a1 1 0 0 1-1-1Zm5.895 8.52a1 1 0 1 0-1.414-1.415l-.672.672a1 1 0 1 0 1.414 1.414l.672-.672Zm7.105 1.52a1 1 0 0 1 1 1v.96a1 1 0 0 1-2 0v-.96a1 1 0 0 1 1-1Zm8.52-2.935a1 1 0 1 0-1.415 1.414l.672.672a1 1 0 0 0 1.414-1.414l-.672-.672ZM27 16.783a1 1 0 0 1 1-1h.96a1 1 0 1 1 0 2H28a1 1 0 0 1-1-1Zm-.849-7.777a1 1 0 0 0-1.414-1.414l-.672.672a1 1 0 1 0 1.414 1.414l.672-.672Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

SunDimFill.displayName = "SunDimFill";

export default SunDimFill;
