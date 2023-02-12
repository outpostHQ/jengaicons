import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const UserListFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M10.038 18.295a4.55 4.55 0 1 0 0-9.102 4.55 4.55 0 0 0 0 9.102Zm7.538-7.204a1 1 0 0 1 1-1H29.96a1 1 0 1 1 0 2H18.576a1 1 0 0 1-1-1Zm0 5.692a1 1 0 0 1 1-1H29.96a1 1 0 1 1 0 2H18.576a1 1 0 0 1-1-1Zm3.846 4.692a1 1 0 0 0 0 2h8.538a1 1 0 1 0 0-2h-8.538Zm-17.38 1.902a6.08 6.08 0 0 1 11.992 0c.09.545-.367.995-.92.995H4.96c-.552 0-1.009-.45-.919-.995Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

UserListFill.displayName = "UserListFill";

export default UserListFill;
