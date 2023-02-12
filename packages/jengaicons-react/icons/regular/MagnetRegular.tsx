import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const MagnetRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m21.236 24.048-4.641-4.641M12.602 15.415l-4.65-4.65M19.906 16.031l-7.296 7.296L17.284 28l7.965-7.965A9.393 9.393 0 0 0 11.965 6.75L4 14.716l4.648 4.648 7.295-7.296a2.802 2.802 0 0 1 3.963 3.963Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

MagnetRegular.displayName = "MagnetRegular";

export default MagnetRegular;
