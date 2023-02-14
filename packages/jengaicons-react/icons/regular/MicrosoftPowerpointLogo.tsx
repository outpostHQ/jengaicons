import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context, SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const MicrosoftPowerpointLogo = forwardRef<
  SVGSVGElement,
  JengaIconRegularProps
>((props, ref) => {
  const { size, color, alt, children, mirrored, weight } = props;

  const {
    alt: altCtx,
    children: childrenCtx,
    color: colorCtx,
    mirrored: mirroredCtx,
    size: sizeCtx,
    weight: weightCtx,
  } = useContext(JengaIconContext as Context<JengaIconRegularProps>);

  return (
    <svg
      width={size || sizeCtx || 32}
      height={size || sizeCtx || 32}
      transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
      strokeWidth={weight || weightCtx || 2}
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
        strokeWidth={weight || weightCtx || "2"}
        d="M16.48 22.72v4.8M16.48 4.48v4.8M18.4 16H28M7.12 9.28a11.52 11.52 0 1 1 0 13.44"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinejoin="round"
        strokeWidth={weight || weightCtx || "2"}
        d="M4 9.28h14.4v13.44H4z"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeWidth={weight || weightCtx || "2"}
        d="M9.28 16.902h1.92v0c1.06 0 1.92-.86 1.92-1.92v-.052c0-1.09-.883-1.972-1.972-1.972H9.299a.02.02 0 0 0-.019.019v6.065"
      />

      {children || childrenCtx}
    </svg>
  );
});

MicrosoftPowerpointLogo.displayName = "MicrosoftPowerpointLogo";

export default MicrosoftPowerpointLogo;
