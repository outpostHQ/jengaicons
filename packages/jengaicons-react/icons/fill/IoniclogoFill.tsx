import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const IoniclogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.014 4.873c1.948 0 3.782.455 5.503 1.336l.227.114-.199.157a3.708 3.708 0 0 0-1.109 1.45l-.071.156-.142-.07a9.732 9.732 0 0 0-4.195-.954c-5.417 0-9.81 4.408-9.81 9.81 0 5.404 4.38 9.811 9.796 9.811 5.417 0 9.81-4.407 9.81-9.81a9.47 9.47 0 0 0-.753-3.754L25 12.963l.156-.071a3.797 3.797 0 0 0 1.508-1.024l.156-.199.1.228A11.805 11.805 0 0 1 28 16.844c0 6.612-5.389 12-12 12s-12-5.388-12-12c0-6.61 5.389-12 12.014-11.971Zm0 6.54c3 0 5.46 2.446 5.474 5.474a5.467 5.467 0 0 1-5.474 5.474 5.467 5.467 0 0 1-5.474-5.474 5.476 5.476 0 0 1 5.474-5.474Zm7.834-4.521a2.502 2.502 0 1 1 0 5.005 2.502 2.502 0 0 1 0-5.005Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

IoniclogoFill.displayName = "IoniclogoFill";

export default IoniclogoFill;
