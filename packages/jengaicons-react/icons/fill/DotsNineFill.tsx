import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DotsNineFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M10.19 25.514a2.77 2.77 0 1 0-5.538 0 2.77 2.77 0 0 0 5.538 0Zm0-9.231a2.77 2.77 0 1 0-5.538 0 2.77 2.77 0 0 0 5.538 0Zm-2.769-12a2.77 2.77 0 1 1 0 5.538 2.77 2.77 0 0 1 0-5.538Zm12.308 21.23a2.77 2.77 0 1 0-5.538 0 2.77 2.77 0 0 0 5.538 0Zm0-9.23a2.77 2.77 0 1 0-5.538 0 2.77 2.77 0 0 0 5.538 0Zm-2.77-12a2.77 2.77 0 1 1 0 5.538 2.77 2.77 0 0 1 0-5.538Zm9.54 18.461a2.77 2.77 0 1 1 0 5.539 2.77 2.77 0 0 1 0-5.539Zm0-9.23a2.77 2.77 0 1 1 0 5.538 2.77 2.77 0 0 1 0-5.539Zm2.768-6.462a2.77 2.77 0 1 0-5.538 0 2.77 2.77 0 0 0 5.538 0Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

DotsNineFill.displayName = "DotsNineFill";

export default DotsNineFill;
