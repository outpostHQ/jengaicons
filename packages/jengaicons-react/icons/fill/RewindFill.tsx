import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const RewindFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M5.644 16.358a.5.5 0 0 0 0 .85l10.177 6.321a.5.5 0 0 0 .764-.425V10.462a.5.5 0 0 0-.764-.425L5.644 16.358Zm12.375 0a.5.5 0 0 0 0 .85l10.177 6.321a.5.5 0 0 0 .764-.425V10.462a.5.5 0 0 0-.764-.425L18.02 16.358Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

RewindFill.displayName = "RewindFill";

export default RewindFill;
