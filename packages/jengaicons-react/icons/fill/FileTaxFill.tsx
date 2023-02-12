import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FileTaxFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M19.474 4.283H7.868a1 1 0 0 0-1 1v9.982a1 1 0 0 0 1 1h12.998a1 1 0 0 1 1 1v10.018a1 1 0 0 0 1 1h3.002a1 1 0 0 0 1-1V11.704a1 1 0 0 0-.292-.705l-6.394-6.422a1 1 0 0 0-.708-.294Zm.483 7.136v-5.72l5.725 5.72h-5.725ZM5.96 22.283a1 1 0 0 1 1-1h4.5a1 1 0 0 1 0 2h-1.25v5a1 1 0 0 1-2 0v-5H6.96a1 1 0 0 1-1-1Zm14.305.64a1 1 0 0 0-1.537-1.28l-1.768 2.123-1.768-2.123a1 1 0 0 0-1.537 1.28l2.003 2.405-2.003 2.405a1 1 0 1 0 1.537 1.28l1.768-2.123 1.768 2.123a1 1 0 0 0 1.537-1.28l-2.003-2.405 2.003-2.404Z"
        fill={color || colorCtx || "#000000"}
      />

      {children || childrenCtx}
    </svg>
  );
});

FileTaxFill.displayName = "FileTaxFill";

export default FileTaxFill;
