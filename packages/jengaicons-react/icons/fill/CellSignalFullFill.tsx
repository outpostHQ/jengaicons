import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CellSignalFullFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m23.96 9.283-3 3v16h3v-19Zm2 19h2.5a.5.5 0 0 0 .5-.5V5.49a.5.5 0 0 0-.854-.354L25.96 7.283v21Zm-7 0v-14l-3 3v11h3Zm-5 0v-9l-3 3v6h3Zm-5 0v-4l-3.146 3.146a.5.5 0 0 0 .353.854H8.96Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

CellSignalFullFill.displayName = "CellSignalFullFill";

export default CellSignalFullFill;
