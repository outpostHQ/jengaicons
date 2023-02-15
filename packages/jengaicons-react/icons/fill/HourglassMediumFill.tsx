import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const HourglassMediumFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M7.71 4.783a1 1 0 0 1 1-1h16.5a1 1 0 0 1 1 1v.812a11 11 0 0 1-4.4 8.8l-3.183 2.388 3.184 2.388a11 11 0 0 1 4.4 8.8v.812a1 1 0 0 1-1 1H8.709a1 1 0 0 1-1-1v-.812a11 11 0 0 1 4.4-8.8l3.184-2.388-3.183-2.388a11 11 0 0 1-4.4-8.8v-.812Zm2.001 1a9 9 0 0 0 2.463 6h9.573a9 9 0 0 0 2.462-6H9.71Zm3.598 14.988a9 9 0 0 0-3.598 7.012H24.21a9 9 0 0 0-3.599-7.012l-3.65-2.738-3.65 2.738Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

HourglassMediumFill.displayName = "HourglassMediumFill";

export default HourglassMediumFill;
