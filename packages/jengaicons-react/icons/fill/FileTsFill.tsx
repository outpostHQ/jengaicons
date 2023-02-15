import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FileTsFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M19.474 4.283H7.868a1 1 0 0 0-1 1v9.982a1 1 0 0 0 1 1h12.998a1 1 0 0 1 1 1v10.018a1 1 0 0 0 1 1h3.002a1 1 0 0 0 1-1V11.704a1 1 0 0 0-.292-.705l-6.394-6.422a1 1 0 0 0-.708-.294Zm.483 7.136v-5.72l5.725 5.72h-5.725Zm-3.713 9.33a2.634 2.634 0 0 0-.303 5.25c.06.011.123.017.187.017h1.548a.633.633 0 1 1 0 1.267H14.61a1 1 0 0 0 0 2h3.065a2.633 2.633 0 0 0 .074-5.267h-1.506a.633.633 0 1 1 0-1.267h3.065a1 1 0 1 0 0-2h-3.065ZM5.96 22.283a1 1 0 0 1 1-1h4.5a1 1 0 0 1 0 2h-1.25v5a1 1 0 0 1-2 0v-5H6.96a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

FileTsFill.displayName = "FileTsFill";

export default FileTsFill;
