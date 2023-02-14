import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const MicrosoftWordLogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M20.96 12.424h7M20.96 20.424h7"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M9.96 9.327V5.424a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1v-3.951"
        />
        <path
          fill={color || colorCtx || "#000000"}
          fillRule="evenodd"
          d="M6.96 9.424a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1h-13Zm11.008 4.366a1 1 0 1 0-1.93-.527l-.866 3.166-.799-1.876c-.378-.89-1.638-.892-2.021-.005l-.755 1.746-.707-2.997a1 1 0 0 0-1.946.459l1.33 5.644c.244 1.03 1.661 1.156 2.081.183l1-2.316.991 2.325c.409.959 1.798.864 2.073-.141l1.549-5.66Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

MicrosoftWordLogoFill.displayName = "MicrosoftWordLogoFill";

export default MicrosoftWordLogoFill;
