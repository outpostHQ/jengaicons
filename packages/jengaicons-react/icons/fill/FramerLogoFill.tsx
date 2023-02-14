import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FramerLogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
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
          d="M9.914 4.423h14.823a.5.5 0 0 1 .5.5v7.051a.5.5 0 0 1-.5.5H16.96l7.394 7.193a.5.5 0 0 1-.348.858h-6.922a.5.5 0 0 0-.5.5v6.194a.5.5 0 0 1-.854.354l-6.9-6.901a.5.5 0 0 1-.147-.354v-7.344a.5.5 0 0 1 .5-.5h7.777L9.565 5.281a.5.5 0 0 1 .349-.858Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

FramerLogoFill.displayName = "FramerLogoFill";

export default FramerLogoFill;
