import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PresentationFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.96 3.283a1 1 0 0 1 1 1v2.88h9.52a1 1 0 0 1 1 1v14.32a1 1 0 0 1-1 1h-5.4l3.34 4.175a1 1 0 1 1-1.561 1.25l-3.84-4.8a.996.996 0 0 1-.22-.625h-5.68c.001.22-.07.44-.218.625l-3.84 4.8a1 1 0 1 1-1.562-1.25l3.34-4.175h-5.4a1 1 0 0 1-1-1V8.163a1 1 0 0 1 1-1h9.521v-2.88a1 1 0 0 1 1-1Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

PresentationFill.displayName = "PresentationFill";

export default PresentationFill;
