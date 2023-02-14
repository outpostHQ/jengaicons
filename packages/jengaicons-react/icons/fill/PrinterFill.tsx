import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PrinterFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M8.28 6.98a1 1 0 0 1 1-1h15.36a1 1 0 0 1 1 1v4.8h2.32a1 1 0 0 1 1 1v9.52a1 1 0 0 1-1 1h-2.216c-.035 0-.07-.003-.104-.006v2.292a1 1 0 0 1-1 1H9.28a1 1 0 0 1-1-1v-2.288l-.06.001H5.96a1 1 0 0 1-1-1v-9.52a1 1 0 0 1 1-1h2.32v-4.8Zm2 1v2.8h13.36v-2.8H10.28ZM25.6 16.1a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Zm-15.32 8.486V21.42h13.36v3.167H10.28Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

PrinterFill.displayName = "PrinterFill";

export default PrinterFill;
