import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FileXxFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M25.96 28.283h-18a1 1 0 0 1-1-1v-22a1 1 0 0 1 1-1h11.606a1 1 0 0 1 .709.294L26.669 11a1 1 0 0 1 .291.705v15.579a1 1 0 0 1-1 1Zm-11.829-7.586a1 1 0 0 0 1.415 1.414l1.414-1.414 1.414 1.414a1 1 0 0 0 1.415-1.414l-1.415-1.414 1.414-1.414a1 1 0 0 0-1.414-1.415L16.96 17.87l-1.414-1.415a1 1 0 1 0-1.414 1.415l1.414 1.414-1.414 1.414ZM20.05 5.501v5.223a.5.5 0 0 0 .5.5h5.228L20.049 5.5Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

FileXxFill.displayName = "FileXxFill";

export default FileXxFill;
