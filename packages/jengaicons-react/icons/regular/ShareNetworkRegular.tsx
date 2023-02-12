import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ShareNetworkRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M9.539 19.692a3.692 3.692 0 1 0 0-7.384 3.692 3.692 0 0 0 0 7.384ZM22.462 28a3.692 3.692 0 1 0 0-7.385 3.692 3.692 0 0 0 0 7.385ZM22.462 11.385a3.692 3.692 0 1 0 0-7.385 3.692 3.692 0 0 0 0 7.385ZM19.356 9.689l-6.712 4.315M12.644 17.996l6.712 4.315"
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

ShareNetworkRegular.displayName = "ShareNetworkRegular";

export default ShareNetworkRegular;
