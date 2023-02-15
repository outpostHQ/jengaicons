import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FolderStarFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.963 5.969a1 1 0 0 0-1 1v3.23a1.014 1.014 0 0 0-.003.084v16a1 1 0 0 0 1 1h9.99a1 1 0 0 0 0-2H5.96v-14h22v2.016a1 1 0 1 0 2 0v-3.016a1 1 0 0 0-1-1H17.77L14.735 6.26a1 1 0 0 0-.706-.291H4.963Zm16.394 12.884 1.157-2.49a.5.5 0 0 1 .918.028l.96 2.435a.5.5 0 0 0 .438.316l2.936.16a.5.5 0 0 1 .31.868l-2.232 2.03a.5.5 0 0 0-.148.495l.609 2.378a.5.5 0 0 1-.75.548l-2.295-1.434a.5.5 0 0 0-.515-.01l-2.52 1.455a.5.5 0 0 1-.726-.588l.759-2.33a.5.5 0 0 0-.143-.528L17.86 20.17a.5.5 0 0 1 .305-.872l2.767-.156a.5.5 0 0 0 .425-.289Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

FolderStarFill.displayName = "FolderStarFill";

export default FolderStarFill;
