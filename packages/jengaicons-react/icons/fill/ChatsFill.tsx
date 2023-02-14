import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ChatsFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M22.955 11.283h6.005v17.253l-4.728-3.837H10.96v-6.14"
      />
      <path
        fill={color || colorCtx || "#000000"}
        d="M22.46 5.157h-17a.5.5 0 0 0-.5.5V21.36a.5.5 0 0 0 .815.388l3.775-3.063a.5.5 0 0 1 .315-.112H22.46a.5.5 0 0 0 .5-.5V5.657a.5.5 0 0 0-.5-.5Z"
      />

      {children || childrenCtx}
    </svg>
  );
});

ChatsFill.displayName = "ChatsFill";

export default ChatsFill;
