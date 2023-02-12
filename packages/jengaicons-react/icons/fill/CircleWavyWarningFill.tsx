import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CircleWavyWarningFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.258 4.821 13.764 6.76a1 1 0 0 1-.614.21h-4.08a1 1 0 0 0-1 1v3.665a1 1 0 0 1-.2.6l-2.43 3.241a1 1 0 0 0 .041 1.25l2.35 2.742a1 1 0 0 1 .24.65v3.723a1 1 0 0 0 1 1h4.008a1 1 0 0 1 .707.293l2.375 2.374a1 1 0 0 0 1.434-.02l2.203-2.334a1 1 0 0 1 .728-.313h4.462a1 1 0 0 0 1-1v-3.736a1 1 0 0 1 .226-.633l2.26-2.762a1 1 0 0 0 .04-1.215l-2.339-3.265a1 1 0 0 1-.187-.583V7.97a1 1 0 0 0-1-1h-4.535a1 1 0 0 1-.635-.228L17.507 4.84a1 1 0 0 0-1.25-.018Zm.702 5.092a1 1 0 0 1 1 1v6.321a1 1 0 0 1-2 0v-6.32a1 1 0 0 1 1-1Zm1.354 11.385a1.355 1.355 0 1 1-2.709 0 1.355 1.355 0 0 1 2.71 0Z"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

CircleWavyWarningFill.displayName = "CircleWavyWarningFill";

export default CircleWavyWarningFill;
