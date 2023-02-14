import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const UserFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16.987 19.174a7.195 7.195 0 1 0-.054 0c-4.958.014-9.033 3.782-9.531 8.61-.057.55.396.999.949.999h17.218c.552 0 1.006-.45.949-.998-.499-4.83-4.573-8.597-9.53-8.611Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

UserFill.displayName = "UserFill";

export default UserFill;
