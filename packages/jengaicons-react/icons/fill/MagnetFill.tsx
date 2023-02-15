import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const MagnetFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
  const { size, color, alt, children, mirrored, style } = props;

  const {
    alt: altCtx,
    children: childrenCtx,
    color: colorCtx,
    mirrored: mirroredCtx,
    size: sizeCtx,
    style: styleCtx,
  } = useContext(JengaIconContext);

  return (
    <svg
      width={size || sizeCtx || 32}
      height={size || sizeCtx || 32}
      transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
      ref={ref}
      style={{
        ...styleCtx,
        ...style,
      }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
    >
      {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

      <path
        fill={color || colorCtx || "#000000"}
        fillRule="evenodd"
        d="M20.866 16.314 13.57 23.61l4.674 4.673 7.965-7.965A9.393 9.393 0 0 0 12.925 7.034L4.96 15l4.648 4.648 7.295-7.296a2.802 2.802 0 1 1 3.963 3.963Zm-3.394 3.394 4.674 4.674-3.902 3.901-4.674-4.674 3.902-3.9Zm-3.965-3.965-2.338-2.338-2.314-2.303-3.895 3.897 4.648 4.648 3.9-3.904Z"
        clipRule="evenodd"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeWidth="2"
        d="m13.57 23.61 7.296-7.296a2.802 2.802 0 0 0-3.963-3.963l-7.295 7.296m3.962 3.963 4.674 4.673m-4.674-4.674 3.902-3.9 4.674 4.673-3.902 3.901m0 0 7.965-7.965A9.393 9.393 0 0 0 12.925 7.034L4.96 15m0 0 4.648 4.648M4.96 14.999l3.895-3.897 2.314 2.303 2.338 2.338-3.9 3.904"
      />

      {children || childrenCtx}
    </svg>
  );
});

MagnetFill.displayName = "MagnetFill";

export default MagnetFill;
