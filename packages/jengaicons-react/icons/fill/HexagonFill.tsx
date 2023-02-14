import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const HexagonFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M6.237 10.87a1 1 0 0 1 .512-.872l9.722-5.44a1 1 0 0 1 .977 0l9.723 5.44a1 1 0 0 1 .511.873v10.824a1 1 0 0 1-.511.873l-9.723 5.44a1 1 0 0 1-.977 0l-9.722-5.44a1 1 0 0 1-.512-.873V10.871Z"
      />

      {children || childrenCtx}
    </svg>
  );
});

HexagonFill.displayName = "HexagonFill";

export default HexagonFill;
