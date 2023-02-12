import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const HandPointingRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          d="M16 15.273V6.965A2.465 2.465 0 0 0 13.535 4.5v0a2.465 2.465 0 0 0-2.465 2.465v11.181"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M20.93 16.174v-3.138a2.465 2.465 0 0 0-2.465-2.466v0A2.465 2.465 0 0 0 16 13.036v3.138M6.14 18.393v-.986a2.958 2.958 0 0 1 2.957-2.959h1.48m15.284 4.684v-4.437a2.465 2.465 0 1 0-4.93 0v1.48m4.93 2.508c0 5.509-3.828 9.817-9.861 9.817-6.454 0-9.86-4.845-9.86-10.354"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

HandPointingRegular.displayName = "HandPointingRegular";

export default HandPointingRegular;
