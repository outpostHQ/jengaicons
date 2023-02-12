import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const AtFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
  const { size, color, alt, children, mirrored } = props;

  const {
    alt: altCtx,
    children: childrenCtx,
    color: colorCtx,
    mirrored: mirroredCtx,
    size: sizeCtx,
  } = useContext(JengaIconContext);

  return (
    <svg
      width={size || sizeCtx || 32}
      height={size || sizeCtx || 32}
      transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
    >
      {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

      <path
        fill={color || colorCtx || "#000000"}
        fillRule="evenodd"
        d="M27.142 22.638a11.993 11.993 0 0 1-10.182 5.646c-6.628 0-12.002-5.373-12.002-12.001 0-6.628 5.374-12.001 12.002-12.001 6.628 0 12.001 5.373 12.001 12 0 .734-.066 1.451-.191 2.148-.12.453-.284.847-.485 1.17-.437.704-1.075 1.122-2.075 1.122-1 0-1.638-.418-2.075-1.121-.475-.763-.733-1.912-.733-3.32v-5.44a1 1 0 0 0-2 0v.776a6.44 6.44 0 1 0 .738 8.495c.09.188.188.37.296.545.787 1.266 2.054 2.065 3.774 2.065.327 0 .638-.029.932-.084ZM16.961 11.84a4.44 4.44 0 1 0 0 8.881 4.44 4.44 0 0 0 0-8.88Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

AtFill.displayName = "AtFill";

export default AtFill;
