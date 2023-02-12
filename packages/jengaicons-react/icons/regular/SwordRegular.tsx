import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SwordRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m13.939 17.814 7.368-7.368"
      />
      <path
        stroke={color || "#000000"}
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.177 4.541 28 4.086l-.455 7.824-10.593 9.213-5.989-5.989 9.214-10.593ZM8.708 12.91l10.774 10.773-3.357 3.357-3.956-3.956-4.83 4.83L4 24.574l4.83-4.83-3.479-3.478 3.357-3.356Z"
      />
    </svg>
  );
});

SwordRegular.displayName = "SwordRegular";

export default SwordRegular;
