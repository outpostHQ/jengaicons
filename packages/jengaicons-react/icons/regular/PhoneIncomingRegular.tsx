import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PhoneIncomingRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10.857 16.085a11.021 11.021 0 0 0 5.103 5.08 1.036 1.036 0 0 0 1.023-.077l3.27-2.182a1.045 1.045 0 0 1 .993-.09l6.12 2.622a1.042 1.042 0 0 1 .627 1.084A6.273 6.273 0 0 1 21.77 28 17.77 17.77 0 0 1 4 10.23a6.273 6.273 0 0 1 5.478-6.222 1.042 1.042 0 0 1 1.084.627l2.625 6.125a1.046 1.046 0 0 1-.086.984l-2.174 3.321a1.036 1.036 0 0 0-.07 1.02v0ZM19.68 6.048v6.272h6.272M19.68 12.32l7-7"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

PhoneIncomingRegular.displayName = "PhoneIncomingRegular";

export default PhoneIncomingRegular;
