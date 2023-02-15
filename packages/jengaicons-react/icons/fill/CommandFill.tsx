import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CommandFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M11.109 6.281a4.15 4.15 0 0 1 4.15 4.15v2.152h3.401v-2.151a4.15 4.15 0 1 1 4.15 4.15h-2.15v3.401h2.15a4.15 4.15 0 1 1-4.15 4.151v-2.15h-3.4v2.15a4.15 4.15 0 1 1-4.151-4.15h2.15v-3.402h-2.15a4.15 4.15 0 0 1 0-8.3Zm4.15 8.302v3.4h3.401v-3.4h-3.401Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

CommandFill.displayName = "CommandFill";

export default CommandFill;
