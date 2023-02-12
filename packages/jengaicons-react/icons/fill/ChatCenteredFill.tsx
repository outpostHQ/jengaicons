import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ChatCenteredFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M27.96 4.283h-22a1 1 0 0 0-1 1v15.935a1 1 0 0 0 1 1h6.49a1 1 0 0 1 .837.453l2.834 4.34a1 1 0 0 0 1.67.006l2.888-4.352a1 1 0 0 1 .833-.447h6.448a1 1 0 0 0 1-1V5.283a1 1 0 0 0-1-1Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ChatCenteredFill.displayName = "ChatCenteredFill";

export default ChatCenteredFill;
