import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const TextBolderFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M9.809 6.052a1.06 1.06 0 0 0-1.06 1.06v8.508c0 .022 0 .044.002.066a1.085 1.085 0 0 0-.002.066v9.69c0 .592.48 1.072 1.071 1.072h9.435a5.916 5.916 0 0 0 2.103-11.449 5.314 5.314 0 0 0-3.816-9.013H9.809Zm.94 8.629V8.052h6.793a3.314 3.314 0 1 1 0 6.629h-6.794Zm0 9.833V16.68h8.506a3.916 3.916 0 1 1 0 7.833h-8.506Z"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

TextBolderFill.displayName = "TextBolderFill";

export default TextBolderFill;
