import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SelectionInverseFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.96 3.283h24a1 1 0 0 1 1 1v24a1 1 0 0 1-1 1h-2a1 1 0 0 1 0-2h2l-23-23v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Zm1 7a1 1 0 1 0-2 0v4a1 1 0 0 0 2 0v-4Zm0 8a1 1 0 1 0-2 0v4a1 1 0 0 0 2 0v-4Zm0 8a1 1 0 1 0-2 0v2a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2h-1v-1Zm5 1a1 1 0 1 0 0 2h4a1 1 0 0 0 0-2h-4Zm8 0a1 1 0 1 0 0 2h4a1 1 0 0 0 0-2h-4Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

SelectionInverseFill.displayName = "SelectionInverseFill";

export default SelectionInverseFill;
