import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SelectionForegroundFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11.505 3.283a1 1 0 0 0-1 1v6.573a1 1 0 0 0 1.234.972h4.13a1 1 0 0 0 0-2h-3.364V5.283H27.96v15.455h-4.546v-3.364a1 1 0 1 0-2 0v4.298a1 1 0 0 0 .998 1.066h6.548a1 1 0 0 0 1-1V4.283a1 1 0 0 0-1-1H11.505ZM4.96 9.828a1 1 0 0 0-1 1v2.182a1 1 0 1 0 2 0v-1.182h1.182a1 1 0 1 0 0-2H4.96Zm15.273 0a1 1 0 0 0 0 2h1.181v1.182a1 1 0 1 0 2 0v-2.182a1 1 0 0 0-1-1h-2.181ZM5.96 17.374a1 1 0 1 0-2 0v4.364a1 1 0 0 0 2 0v-4.364Zm0 8.727a1 1 0 1 0-2 0v2.182a1 1 0 0 0 1 1h2.182a1 1 0 1 0 0-2H5.96V26.1Zm17.455 0a1 1 0 1 0-2 0v1.182h-1.182a1 1 0 1 0 0 2h2.181a1 1 0 0 0 1-1V26.1Zm-11.91 1.182a1 1 0 1 0 0 2h4.364a1 1 0 0 0 0-2h-4.364Z"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

SelectionForegroundFill.displayName = "SelectionForegroundFill";

export default SelectionForegroundFill;
