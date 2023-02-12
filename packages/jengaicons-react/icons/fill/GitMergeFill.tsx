import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const GitMergeFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M9.936 11.74a3.82 3.82 0 0 0-1.158-7.457 3.818 3.818 0 0 0-.999 7.504 1.003 1.003 0 0 0-.01.148v8.72c0 .042.002.084.007.124a3.82 3.82 0 0 0 1.002 7.504 3.818 3.818 0 0 0 .983-7.509 1.01 1.01 0 0 0 .007-.119V14.55l.93 1.036a11 11 0 0 0 8.19 3.66h2.417a1 1 0 0 0 .244-.03 3.82 3.82 0 0 0 7.411-1.297 3.818 3.818 0 0 0-7.577-.671 1.038 1.038 0 0 0-.078-.003H18.89a9 9 0 0 1-6.702-2.993l-2.25-2.511Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

GitMergeFill.displayName = "GitMergeFill";

export default GitMergeFill;
