import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArticleFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M28.96 7.783a1 1 0 0 0-1-1h-22a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-18Zm-18.5 4a1 1 0 1 0 0 2h13a1 1 0 0 0 0-2h-13Zm-1 5a1 1 0 0 1 1-1h13a1 1 0 0 1 0 2h-13a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h13a1 1 0 0 0 0-2h-13Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

ArticleFill.displayName = "ArticleFill";

export default ArticleFill;
