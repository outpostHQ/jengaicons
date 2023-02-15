import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ChatCircleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.96 28.283c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 1.948.464 3.787 1.288 5.413.11.22.147.472.09.712L5.336 26.68a1 1 0 0 0 1.22 1.198l4.114-1.045c.25-.063.514-.026.742.093a11.947 11.947 0 0 0 5.548 1.357Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ChatCircleFill.displayName = "ChatCircleFill";

export default ChatCircleFill;
