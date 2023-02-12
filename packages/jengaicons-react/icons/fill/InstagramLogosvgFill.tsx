import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const InstagramLogosvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.96 9.424a5 5 0 0 1 5-5h14a5 5 0 0 1 5 5v14a5 5 0 0 1-5 5h-14a5 5 0 0 1-5-5v-14Zm12 2.783a4.217 4.217 0 1 0 0 8.435 4.217 4.217 0 0 0 0-8.435Zm-6.217 4.217a6.217 6.217 0 1 1 12.435 0 6.217 6.217 0 0 1-12.435 0Zm14.565-6.782a1.565 1.565 0 1 1-3.13 0 1.565 1.565 0 0 1 3.13 0Z"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

InstagramLogosvgFill.displayName = "InstagramLogosvgFill";

export default InstagramLogosvgFill;
