import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const HeadlightsFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M4.96 16.283a7.714 7.714 0 0 0 7.714 7.714h5.016c.07 0 .127-.057.127-.127V8.696a.127.127 0 0 0-.127-.127h-5.016a7.714 7.714 0 0 0-7.714 7.714Zm16.286-6.143a1 1 0 1 0 0 2h7.714a1 1 0 1 0 0-2h-7.714Zm0 10.286a1 1 0 1 0 0 2h7.714a1 1 0 1 0 0-2h-7.714Zm-1-4.143a1 1 0 0 1 1-1h7.714a1 1 0 0 1 0 2h-7.714a1 1 0 0 1-1-1Z"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

HeadlightsFill.displayName = "HeadlightsFill";

export default HeadlightsFill;
