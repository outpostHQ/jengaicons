import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const KeyFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M12.577 15.242 5.012 22.75a.478.478 0 0 0-.14.337v4.717c0 .264.214.478.478.478h4.261a.478.478 0 0 0 .478-.478V25.44c0-.264.214-.478.478-.478h2.014a.478.478 0 0 0 .478-.478v-2.147c0-.264.214-.477.478-.477h2.735c.126 0 .248-.05.338-.14l1.03-1.12a8.428 8.428 0 1 0-5.063-5.356Zm11.707-4.762a1.433 1.433 0 1 1-2.866 0 1.433 1.433 0 0 1 2.866 0Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

KeyFill.displayName = "KeyFill";

export default KeyFill;
