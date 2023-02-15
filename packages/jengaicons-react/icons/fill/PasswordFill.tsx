import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PasswordFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M4.96 6.207a1 1 0 0 1 1 1v18.151a1 1 0 1 1-2 0V7.209a1 1 0 0 1 1-1Zm8.067 5.042a1 1 0 0 1 1 1v2.656l2.523-.82a1 1 0 1 1 .619 1.9l-2.525.823 1.562 2.152a1 1 0 0 1-1.618 1.175l-1.56-2.15-1.562 2.15a1 1 0 1 1-1.618-1.175l1.562-2.152-2.524-.822a1 1 0 0 1 .619-1.902l2.522.822v-2.657a1 1 0 0 1 1-1Zm13.1 1a1 1 0 1 0-2 0v2.656l-2.521-.82a1 1 0 1 0-.62 1.9l2.525.823-1.562 2.152a1 1 0 0 0 1.619 1.175l1.56-2.15 1.56 2.15a1 1 0 0 0 1.619-1.175l-1.562-2.152 2.524-.822a1 1 0 0 0-.619-1.902l-2.522.822v-2.657Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

PasswordFill.displayName = "PasswordFill";

export default PasswordFill;
