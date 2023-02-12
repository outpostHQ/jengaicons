import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArticleFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M28.96 7.783a1 1 0 0 0-1-1h-22a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-18Zm-18.5 4a1 1 0 1 0 0 2h13a1 1 0 0 0 0-2h-13Zm-1 5a1 1 0 0 1 1-1h13a1 1 0 0 1 0 2h-13a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h13a1 1 0 0 0 0-2h-13Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

ArticleFill.displayName = "ArticleFill";

export default ArticleFill;
