import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const UploadSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.96 6.582c.158 0 .308.037.441.102L15.96 9.996V7.582c0-.276.112-.526.293-.707l.006-.007a.997.997 0 0 1 .701-.286Zm-1 3.414 1-1 1 1v9.586a1 1 0 0 1-2 0V9.996Zm1.626-3.194c.031.025.06.052.088.08l-.007-.007a1.012 1.012 0 0 0-.08-.073Zm-9.228 14.78a1 1 0 1 0-2 0v4.402a1 1 0 0 0 1 1h19.203a1 1 0 0 0 1-1v-4.402a1 1 0 1 0-2 0v3.402H8.358v-3.402Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

UploadSimpleFill.displayName = "UploadSimpleFill";

export default UploadSimpleFill;
