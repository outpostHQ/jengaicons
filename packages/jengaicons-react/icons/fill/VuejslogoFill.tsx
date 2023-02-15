import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const VuejslogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m16.96 11.266-2.771-4.8H10.22l6.74 11.672 6.738-11.672h-3.967l-2.772 4.8Z"
        />
        <path
          fill={color || colorCtx || "#000000"}
          d="m24.622 6.466-7.662 13.27L9.3 6.466H4.96l12 20.785 12-20.785h-4.338Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

VuejslogoFill.displayName = "VuejslogoFill";

export default VuejslogoFill;
