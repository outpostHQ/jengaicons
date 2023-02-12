import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const NumberCircleZeroFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.96 16.283c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12s5.372-12 12-12c6.627 0 12 5.373 12 12Zm-15 0c0-1.487.404-2.788 1.004-3.688.604-.907 1.33-1.312 1.996-1.312.666 0 1.392.405 1.996 1.312.6.9 1.004 2.201 1.004 3.688s-.404 2.788-1.004 3.688c-.604.907-1.33 1.312-1.996 1.312-.666 0-1.392-.405-1.996-1.312-.6-.9-1.004-2.201-1.004-3.688Zm3-7c-1.543 0-2.818.938-3.66 2.203-.848 1.271-1.34 2.97-1.34 4.797 0 1.827.492 3.526 1.34 4.797.842 1.265 2.117 2.203 3.66 2.203 1.543 0 2.817-.938 3.66-2.203.848-1.271 1.34-2.97 1.34-4.797 0-1.827-.492-3.526-1.34-4.797-.843-1.265-2.117-2.203-3.66-2.203Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

NumberCircleZeroFill.displayName = "NumberCircleZeroFill";

export default NumberCircleZeroFill;
