import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TagsvgFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M17.437 28.139 5.106 15.808a.498.498 0 0 1-.138-.44l1.634-9.2a.498.498 0 0 1 .41-.405l9.036-1.475a.498.498 0 0 1 .432.14L28.814 16.76a.498.498 0 0 1 0 .704L18.141 28.14a.498.498 0 0 1-.704 0ZM12.835 9.233a1.36 1.36 0 1 1-2.72 0 1.36 1.36 0 0 1 2.72 0Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

TagsvgFill.displayName = "TagsvgFill";

export default TagsvgFill;
