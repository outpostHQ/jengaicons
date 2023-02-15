import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ChatTeardropTextFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.96 16.283c0 6.627-5.38 12-12.015 12H5.96a1 1 0 0 1-1-1V15.426A11.927 11.927 0 0 1 7.2 9.263a12.004 12.004 0 0 1 9.745-4.98c6.636 0 12.015 5.372 12.015 12Zm-17-2.001a1 1 0 0 1 1-1h7.5a1 1 0 0 1 0 2h-7.5a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h7.5a1 1 0 0 1 0 2h-7.5a1 1 0 0 1-1-1Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ChatTeardropTextFill.displayName = "ChatTeardropTextFill";

export default ChatTeardropTextFill;
