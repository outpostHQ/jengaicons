import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CatFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M15.96 7.122a9.998 9.998 0 0 0-1.904.38v4.686a1 1 0 0 1-2 0V8.357c-.31.175-.614.367-.908.578l-1.021.729L6.003 7.19a.5.5 0 0 0-.757.428v11.165c0 5.523 4.477 10 10 10h.714v-3.49l-1.66-1.66a1 1 0 0 1 1.415-1.414l1.245 1.245 1.245-1.245a1 1 0 0 1 1.415 1.414l-1.66 1.66v3.49h.714c5.523 0 10-4.477 10-10V7.618a.5.5 0 0 0-.757-.428l-4.124 2.474-1.02-.73c-.295-.21-.598-.402-.908-.577v3.831a1 1 0 1 1-2 0V7.503a9.997 9.997 0 0 0-1.905-.381v5.066a1 1 0 0 1-2 0V7.122Zm-2.905 11.411a1.464 1.464 0 1 1-2.928 0 1.464 1.464 0 0 1 2.928 0Zm9.274 1.464a1.464 1.464 0 1 0 0-2.928 1.464 1.464 0 0 0 0 2.928Z"
        fill={color || colorCtx || "#000000"}
      />

      {children || childrenCtx}
    </svg>
  );
});

CatFill.displayName = "CatFill";

export default CatFill;
