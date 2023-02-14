import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FilePlusFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M7.96 28.283h18a1 1 0 0 0 1-1V11.704a1 1 0 0 0-.291-.705l-6.395-6.422a1 1 0 0 0-.708-.294H7.96a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1Zm5-9a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2h-6a1 1 0 0 1-1-1ZM20.05 5.5v5.223a.5.5 0 0 0 .5.5h5.227L20.049 5.5Z"
        clipRule="evenodd"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16.96 22.283v-6"
      />

      {children || childrenCtx}
    </svg>
  );
});

FilePlusFill.displayName = "FilePlusFill";

export default FilePlusFill;
