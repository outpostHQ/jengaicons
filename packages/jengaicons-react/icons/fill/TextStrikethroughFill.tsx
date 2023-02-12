import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const TextStrikethroughFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.96 8.891c-2.946 0-4.548 1.655-4.548 3.196v.008c-.001.178.026.356.08.525a1 1 0 1 1-1.903.613 3.675 3.675 0 0 1-.177-1.15c.003-3.09 3.007-5.192 6.548-5.192 2.76 0 5.118 1.235 6.095 3.24a1 1 0 1 1-1.799.875c-.549-1.128-2.067-2.115-4.296-2.115ZM6.73 16.283a1 1 0 0 1 1-1H26.19a1 1 0 1 1 0 2h-3.764c.846.77 1.407 1.809 1.407 3.196 0 1.565-.89 2.888-2.139 3.78-1.25.894-2.928 1.415-4.735 1.415-1.806 0-3.483-.521-4.735-1.415-1.249-.892-2.139-2.215-2.139-3.78a1 1 0 0 1 2 0c0 .752.425 1.527 1.302 2.153.875.625 2.135 1.042 3.572 1.042 1.438 0 2.698-.417 3.573-1.042.877-.626 1.301-1.401 1.301-2.153 0-.873-.366-1.458-1.039-1.95-.701-.513-1.697-.891-2.888-1.246H7.73a1 1 0 0 1-1-1Z"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

TextStrikethroughFill.displayName = "TextStrikethroughFill";

export default TextStrikethroughFill;
