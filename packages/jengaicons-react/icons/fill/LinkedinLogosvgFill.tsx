import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const LinkedinLogosvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M5.96 4.424a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-22a1 1 0 0 0-1-1h-22Zm6.783 9.914a1 1 0 0 0-2 0v8.348a1 1 0 1 0 2 0v-8.348Zm4.16-.161a1 1 0 0 0-1.986.16v8.349a1 1 0 1 0 2 0V17.99a2.652 2.652 0 1 1 5.304 0v4.696a1 1 0 1 0 2 0V17.99a4.653 4.653 0 0 0-7.317-3.813Zm-3.595-4.013a1.565 1.565 0 1 1-3.13 0 1.565 1.565 0 0 1 3.13 0Z"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

LinkedinLogosvgFill.displayName = "LinkedinLogosvgFill";

export default LinkedinLogosvgFill;
