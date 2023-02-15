import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const EyedropperFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m24.085 14.51.658.657a2.152 2.152 0 0 1 0 3.047l-.946.947a1.077 1.077 0 0 1-1.524 0l-8.172-8.172a1.077 1.077 0 0 1 0-1.524l.947-.946a2.153 2.153 0 0 1 3.047 0l.658.658 3.715-3.715c1.453-1.453 3.82-1.542 5.312-.13a3.77 3.77 0 0 1 .076 5.407l-3.77 3.77Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m21.234 18.122-7.54 7.541a4.308 4.308 0 0 1-4.163 1.116l-3.152 1.376a1.078 1.078 0 0 1-1.192-.226v0a.773.773 0 0 1-.162-.856l1.458-3.341A4.307 4.307 0 0 1 7.6 19.569l7.541-7.541"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

EyedropperFill.displayName = "EyedropperFill";

export default EyedropperFill;
