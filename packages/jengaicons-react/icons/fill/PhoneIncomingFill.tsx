import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PhoneIncomingFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11.817 16.368a11.021 11.021 0 0 0 5.103 5.08 1.036 1.036 0 0 0 1.023-.077l3.27-2.182a1.045 1.045 0 0 1 .992-.09l6.12 2.622a1.042 1.042 0 0 1 .627 1.084 6.272 6.272 0 0 1-6.222 5.478 17.77 17.77 0 0 1-17.77-17.77 6.273 6.273 0 0 1 5.478-6.223 1.042 1.042 0 0 1 1.084.627l2.625 6.126a1.044 1.044 0 0 1-.086.984l-2.174 3.321a1.035 1.035 0 0 0-.07 1.02Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20.64 6.331v6.272h6.271M20.64 12.603l7-7"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

PhoneIncomingFill.displayName = "PhoneIncomingFill";

export default PhoneIncomingFill;
