import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const HeadsetFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M28.003 15.743v8.336h-5.629v-8.336h5.629A10.96 10.96 0 0 0 16.96 4.783a10.96 10.96 0 0 0-11.043 10.96h5.462v8.336H5.917v-8.336A10.96 10.96 0 0 1 16.96 4.783a10.96 10.96 0 0 1 11.043 10.96Z"
        fill={color || colorCtx || "#000000"}
      />
      <path
        d="M28.003 15.743v8.336h-5.629v-8.336h5.629Zm0 0A10.96 10.96 0 0 0 16.96 4.783a10.96 10.96 0 0 0-11.043 10.96m0 0v8.336h5.462v-8.336H5.917Z"
        stroke={color || colorCtx || "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.748 28.783h7.255a3 3 0 0 0 3-3V21.68"
        stroke={color || colorCtx || "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {children || childrenCtx}
    </svg>
  );
});

HeadsetFill.displayName = "HeadsetFill";

export default HeadsetFill;
