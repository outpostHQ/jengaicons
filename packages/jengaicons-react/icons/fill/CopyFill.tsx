import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CopyFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M11.005 3.783a1 1 0 0 0-1 1v6.492c0 .018 0 .036.002.053H5.46a1 1 0 0 0-1 1v15.455a1 1 0 0 0 1 1h15.454a1 1 0 0 0 1-1v-4.546H28.46a1 1 0 0 0 1-1V4.783a1 1 0 0 0-1-1H11.005Zm10.91 17.455h5.545V5.782H12.005v5.492l-.001.053h8.91a1 1 0 0 1 1 1v8.91Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

CopyFill.displayName = "CopyFill";

export default CopyFill;
