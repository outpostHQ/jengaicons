import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const LightbulbFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M21.034 21.815a9.238 9.238 0 1 0-8.158-.005v2.701a1 1 0 0 0 1 1h6.158a1 1 0 0 0 1-1v-2.696ZM16.912 7.867a1 1 0 0 1 1.154-.819 6.534 6.534 0 0 1 5.345 5.339 1 1 0 0 1-1.971.338 4.534 4.534 0 0 0-3.71-3.705 1 1 0 0 1-.818-1.153Zm-4.03 19.416a1 1 0 0 0 0 2h8.157a1 1 0 1 0 0-2H12.88Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

LightbulbFill.displayName = "LightbulbFill";

export default LightbulbFill;
