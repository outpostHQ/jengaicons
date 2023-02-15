import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FadersHorizontalFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M13.687 6.51a1 1 0 0 1 1 1v2.273H28.96a1 1 0 0 1 0 2H14.687v2.273a1 1 0 1 1-2 0V7.51a1 1 0 0 1 1-1ZM3.96 10.783a1 1 0 0 1 1-1h4.364a1 1 0 0 1 0 2H4.96a1 1 0 0 1-1-1Zm14.09 11H4.96a1 1 0 1 0 0 2h13.09a1 1 0 0 0 0-2Zm3.365 1V19.51a1 1 0 1 1 2 0v2.273h5.545a1 1 0 1 1 0 2h-5.545v2.273a1 1 0 0 1-2 0v-3.273Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

FadersHorizontalFill.displayName = "FadersHorizontalFill";

export default FadersHorizontalFill;
