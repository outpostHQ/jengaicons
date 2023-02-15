import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CrosshairSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
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
          d="M5.001 15.283c.48-5.83 5.13-10.478 10.959-10.959v4.625a1 1 0 1 0 2 0V4.324c5.83.48 10.478 5.13 10.959 10.959h-4.626a1 1 0 1 0 0 2h4.626c-.481 5.83-5.13 10.478-10.96 10.959v-4.626a1 1 0 0 0-2 0v4.626c-5.829-.481-10.477-5.13-10.958-10.96h4.625a1 1 0 1 0 0-2H5.001Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

CrosshairSimpleFill.displayName = "CrosshairSimpleFill";

export default CrosshairSimpleFill;
