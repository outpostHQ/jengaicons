import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const UserGearRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M25.27 18.302a1.802 1.802 0 1 0 0-3.604 1.802 1.802 0 0 0 0 3.604ZM25.27 14.698v-1.351M23.709 15.6l-1.17-.676M23.709 17.4l-1.17.677M25.27 18.302v1.351M26.83 17.4l1.17.677M26.83 15.6l1.17-.676M12.657 18.654a6.482 6.482 0 1 0 0-12.965 6.482 6.482 0 0 0 0 12.965Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21.314 27.31A8.657 8.657 0 0 0 4 27.31"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

UserGearRegular.displayName = "UserGearRegular";

export default UserGearRegular;
