import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const NextjsFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M21.099 27.692c-1.29.474-2.684.732-4.139.732-6.627 0-12-5.372-12-12 0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12 0 4.457-2.429 8.345-6.035 10.415L12.285 9.914a1.002 1.002 0 0 0-1.726.02.994.994 0 0 0-.131.513v12.311a1 1 0 1 0 2 0V13.9l8.67 13.792ZM21.86 9.43a1 1 0 0 1 1 1v8.835a1 1 0 1 1-2 0V10.43a1 1 0 0 1 1-1Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

NextjsFill.displayName = "NextjsFill";

export default NextjsFill;
