import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArchiveFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M4.96 6.975a1 1 0 0 0-1 1v5.31a1 1 0 0 0 1 1h1.562v9.306a1 1 0 0 0 1 1h18.592a1 1 0 0 0 1-1v-9.306h1.846a1 1 0 0 0 1-1v-5.31a1 1 0 0 0-1-1h-24Zm1 5.31v-3.31h22v3.31h-22Zm7.23 4.921a1 1 0 0 1 1-1h5.54a1 1 0 1 1 0 2h-5.54a1 1 0 0 1-1-1Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

ArchiveFill.displayName = "ArchiveFill";

export default ArchiveFill;
