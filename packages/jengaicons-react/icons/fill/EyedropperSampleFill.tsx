import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const EyedropperSampleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m24.089 14.76.66.66a2.169 2.169 0 0 1 0 3.044l-.943.943a1.079 1.079 0 0 1-1.536 0l-.33-.33-7.54 7.54-.002.002a5.27 5.27 0 0 1-4.776 1.462l-2.846 1.24v.001a2.077 2.077 0 0 1-2.285-.416l.577-.591-.58.588a1.768 1.768 0 0 1-.375-1.978l1.32-3.033a5.27 5.27 0 0 1 1.462-4.776l7.542-7.542-.33-.33a1.076 1.076 0 0 1 0-1.536l.943-.943a2.169 2.169 0 0 1 3.044 0l.66.66 3.718-3.718c1.455-1.455 3.826-1.536 5.308-.121a3.772 3.772 0 0 1 .08 5.402L24.09 14.76Zm-6.614 5.954H8.136a3.27 3.27 0 0 1 .167-.178l.005-.004 7.543-7.544 4.675 4.675-3.051 3.051Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

EyedropperSampleFill.displayName = "EyedropperSampleFill";

export default EyedropperSampleFill;
