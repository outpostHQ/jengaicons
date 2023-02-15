import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const TwitterLogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15.69 10.738a4.74 4.74 0 0 1 9.085-1.896h4.185l-3.822 3.822a15.166 15.166 0 0 1-15.134 14.187c-3.792 0-4.74-1.422-4.74-1.422s3.792-1.422 5.687-4.265c0 0-7.582-3.792-5.687-14.218 0 0 4.74 4.74 10.425 5.687l.002-1.895Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

TwitterLogoFill.displayName = "TwitterLogoFill";

export default TwitterLogoFill;
