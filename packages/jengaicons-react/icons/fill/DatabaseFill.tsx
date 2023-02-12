import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const DatabaseFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
    >
      {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

      <path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M16.96 16.81c4.18 0 7.86-1.17 10-2.942v2.415c0 1.12-.846 2.353-2.7 3.365-1.818.99-4.397 1.635-7.3 1.635-2.903 0-5.482-.644-7.3-1.635-1.854-1.012-2.7-2.246-2.7-3.365v-2.416c2.14 1.772 5.82 2.942 10 2.942Zm-12-.527v-6a1 1 0 0 1 .049-.31c.296-3.46 5.534-6.216 11.951-6.216 6.419 0 11.657 2.757 11.952 6.218.031.097.048.2.048.308v12c0 2.194-1.617 3.96-3.743 5.12-2.164 1.18-5.085 1.88-8.257 1.88-3.172 0-6.093-.7-8.257-1.88-2.126-1.16-3.743-2.926-3.743-5.12v-6Zm22 3.92v2.08c0 1.12-.846 2.353-2.7 3.365-1.818.99-4.397 1.635-7.3 1.635-2.903 0-5.482-.644-7.3-1.635-1.854-1.012-2.7-2.246-2.7-3.365v-2.08a9.701 9.701 0 0 0 1.743 1.2c2.164 1.18 5.085 1.88 8.257 1.88 3.172 0 6.093-.7 8.257-1.88a9.706 9.706 0 0 0 1.743-1.2Z"
        fill={color || colorCtx || "#000000"}
      />

      {children || childrenCtx}
    </svg>
  );
});

DatabaseFill.displayName = "DatabaseFill";

export default DatabaseFill;
