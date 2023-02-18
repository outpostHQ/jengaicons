import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const MicrosoftExcelLogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20.96 12.283h7M20.96 20.283h7M18.96 23.283v5M18.96 4.283v5"
        />
        <path
          fill={color || colorCtx || "#000000"}
          fillRule="evenodd"
          d="M6.96 9.283a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1h-13Zm3.65 3.2a1 1 0 0 1 1.4.2l1.45 1.933 1.45-1.933a1 1 0 1 1 1.6 1.2l-1.8 2.4 1.8 2.4a1 1 0 0 1-1.6 1.2l-1.45-1.933-1.45 1.933a1 1 0 0 1-1.6-1.2l1.8-2.4-1.8-2.4a1 1 0 0 1 .2-1.4Z"
          clipRule="evenodd"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M9.96 9.186V5.283a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1v-3.952"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

MicrosoftExcelLogoFill.displayName = "MicrosoftExcelLogoFill";

export default MicrosoftExcelLogoFill;
