import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const AngularLogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m5.726 9.196 11.08-4.826a.5.5 0 0 1 .401 0l10.985 4.823a.5.5 0 0 1 .294.527l-1.88 13.43a.5.5 0 0 1-.268.376L17.23 28.17a.5.5 0 0 1-.449.003l-9.378-4.645a.5.5 0 0 1-.274-.385L5.43 9.717a.5.5 0 0 1 .296-.521Zm11.262 4.035 1.523 2.928h-2.99l1.467-2.928Zm3.632 6.982-1.069-2.054H14.52l.868-1.736-1.893 3.777a1 1 0 0 1-1.788-.896l4.283-8.544a1.1 1.1 0 0 1 1.96-.015l4.444 8.545a1 1 0 1 1-1.774.923Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

AngularLogoFill.displayName = "AngularLogoFill";

export default AngularLogoFill;
