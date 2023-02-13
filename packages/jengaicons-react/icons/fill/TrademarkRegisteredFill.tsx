import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const TrademarkRegisteredFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.96 16.283c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12s5.373-12 12-12c6.628 0 12 5.373 12 12Zm-16-4.965c0-.572.463-1.035 1.035-1.035h3.724a4.242 4.242 0 0 1 2.253 7.836l1.808 2.592a1 1 0 0 1-1.64 1.144l-2.161-3.097a4.237 4.237 0 0 1-.26.008H14.96v2.517a1 1 0 1 1-2 0v-9.965Zm2 5.448h2.759a2.242 2.242 0 0 0 0-4.483H14.96v4.483Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

TrademarkRegisteredFill.displayName = "TrademarkRegisteredFill";

export default TrademarkRegisteredFill;
