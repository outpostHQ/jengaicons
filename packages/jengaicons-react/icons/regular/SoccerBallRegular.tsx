import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SoccerBallRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m16 10.75-4.993 3.628 1.907 5.87h6.172l1.907-5.87L16 10.75ZM16 8v2.75M20.377 4.823 16 8l-4.377-3.177M8.392 13.528l2.615.85M6.723 8.383l1.668 5.145-4.373 3.18M11.298 22.472l1.616-2.225M5.89 22.47l5.408.002 1.674 5.143M20.702 22.472l-1.616-2.225M19.028 27.615l1.674-5.143 5.408-.003M23.609 13.528l-2.616.85M27.982 16.71l-4.374-3.182 1.669-5.144"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

SoccerBallRegular.displayName = "SoccerBallRegular";

export default SoccerBallRegular;
