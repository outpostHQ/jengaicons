import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const MicrosoftPowerpointLogoRegular = forwardRef<
  SVGSVGElement,
  JengaIconProps
>((props, ref) => {
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
        d="M16.48 22.72v4.8M16.48 4.48v4.8M18.4 16H28M7.12 9.28a11.52 11.52 0 1 1 0 13.44"
        stroke={color || colorCtx || "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeWidth="2"
        strokeLinejoin="round"
        d="M4 9.28h14.4v13.44H4z"
      />
      <path
        d="M9.28 16.902h1.92v0c1.06 0 1.92-.86 1.92-1.92v-.052c0-1.09-.883-1.972-1.972-1.972H9.299a.02.02 0 0 0-.019.019v6.065"
        stroke={color || colorCtx || "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
      />

      {children || childrenCtx}
    </svg>
  );
});

MicrosoftPowerpointLogoRegular.displayName = "MicrosoftPowerpointLogoRegular";

export default MicrosoftPowerpointLogoRegular;
