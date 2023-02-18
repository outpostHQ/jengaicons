import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const GatsbylogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.96 28c6.628 0 12-5.373 12-12s-5.372-12-12-12c-6.627 0-12 5.373-12 12s5.373 12 12 12ZM7.55 16.067a9.412 9.412 0 0 0 9.309 9.23l-.004-.004.015.009-9.32-9.235Zm9.41-9.592c-4.487 0-8.24 3.14-9.183 7.342l1.448 1.447v-.002l9.676 9.676.002-.002.132.132c4.164-.937 7.283-4.633 7.336-9.067h-.31V16h-5.637v1.604h4.105a7.774 7.774 0 0 1-5.065 5.63l-9.85-9.852a7.763 7.763 0 0 1 13.744-1.888l1.23-1.077h.032a9.4 9.4 0 0 0-7.66-3.942Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

GatsbylogoFill.displayName = "GatsbylogoFill";

export default GatsbylogoFill;
