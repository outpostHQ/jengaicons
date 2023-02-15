import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const BasketballFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, style } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      style: styleCtx,
    } = useContext(JengaIconContext);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        ref={ref}
        style={{
          ...styleCtx,
          ...style,
        }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          fill={color || colorCtx || "#000000"}
          fillRule="evenodd"
          d="M15.96 4.324a11.948 11.948 0 0 0-6.794 2.834 13.925 13.925 0 0 1 3.357 8.125h3.437V4.324Zm0 12.959h-3.437a13.923 13.923 0 0 1-3.357 8.125 11.948 11.948 0 0 0 6.794 2.834v-10.96Zm2 10.959v-10.96h3.438a13.965 13.965 0 0 0 3.357 8.125 11.947 11.947 0 0 1-6.795 2.835Zm0-12.96V4.325a11.948 11.948 0 0 1 6.795 2.835 13.965 13.965 0 0 0-3.357 8.124H17.96Zm8.207 8.698a11.947 11.947 0 0 0 2.752-6.697h-5.515a11.965 11.965 0 0 0 2.763 6.697Zm0-15.394a11.946 11.946 0 0 1 2.752 6.697h-5.515a11.966 11.966 0 0 1 2.763-6.697ZM9.654 20.853c.472-1.14.762-2.345.864-3.57H5c.21 2.54 1.21 4.854 2.753 6.698.79-.937 1.431-1.992 1.9-3.128Zm0-9.14c.472 1.14.762 2.344.864 3.57H5c.21-2.54 1.21-4.854 2.753-6.698.79.937 1.431 1.991 1.9 3.128Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

BasketballFill.displayName = "BasketballFill";

export default BasketballFill;
