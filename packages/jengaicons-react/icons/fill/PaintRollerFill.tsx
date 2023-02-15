import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PaintRollerFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M7.997 6.607a.5.5 0 0 0-.5.5v2.796a1.01 1.01 0 0 0-.07-.002H4.96a1 1 0 0 0 0 2h2.466c.024 0 .047-.001.07-.003v2.756a.5.5 0 0 0 .5.5h16.948a.5.5 0 0 0 .5-.5V11.9h2.516v4.013a1 1 0 0 1-.69.951l-10.275 3.348a1.5 1.5 0 0 0-1.035 1.426v4.32a1 1 0 1 0 2 0v-3.957l9.93-3.235a3 3 0 0 0 2.07-2.853v-4.512a1.5 1.5 0 0 0-1.5-1.5h-3.016V7.107a.5.5 0 0 0-.5-.5H7.997Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

PaintRollerFill.displayName = "PaintRollerFill";

export default PaintRollerFill;
