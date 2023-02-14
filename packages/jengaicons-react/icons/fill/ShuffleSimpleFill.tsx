import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ShuffleSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fillRule="evenodd"
          d="M21.96 28.69a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 1 0-2 0v3.587L5.667 3.984a1 1 0 0 0-1.414 1.414l22.293 22.293H22.96a1 1 0 0 0-1 1Zm1-24.907a1 1 0 1 0 0 2h3.586l-6.305 6.305a1 1 0 0 0 1.414 1.414l6.305-6.305v3.586a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1h-6ZM4.253 29.49a1 1 0 0 0 1.414 0l8.196-8.196a1 1 0 1 0-1.415-1.414l-8.195 8.196a1 1 0 0 0 0 1.414Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ShuffleSimpleFill.displayName = "ShuffleSimpleFill";

export default ShuffleSimpleFill;
