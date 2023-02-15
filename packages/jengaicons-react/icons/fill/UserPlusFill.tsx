import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const UserPlusFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M12.494 18.657a5.642 5.642 0 1 0 0-11.283 5.642 5.642 0 0 0 0 11.284Zm14.643-2.815a1 1 0 1 0-2 0v1.823h-1.823a1 1 0 1 0 0 2h1.823v1.823a1 1 0 1 0 2 0v-1.823h1.823a1 1 0 1 0 0-2h-1.823v-1.823ZM5.025 25.194a7.536 7.536 0 0 1 14.938 0c.072.548-.382.998-.935.998H5.96c-.553 0-1.007-.45-.935-.998Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

UserPlusFill.displayName = "UserPlusFill";

export default UserPlusFill;
