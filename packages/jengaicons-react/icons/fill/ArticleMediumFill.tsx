import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ArticleMediumFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M5.778 9.783H4.96a1 1 0 1 1 0-2h1.796a1 1 0 0 1 .872.472l3.524 5.668 3.594-5.675a1 1 0 0 1 .88-.465h1.778a1 1 0 1 1 0 2h-.813v6.889h.37a1 1 0 1 1 0 2h-2.667a1 1 0 0 1 0-2h.297v-4.44l-2.602 4.108a1 1 0 0 1-1.694-.007l-2.517-4.048v4.387h.293a1 1 0 1 1 0 2H5.404a1 1 0 0 1 0-2h.374V9.783Zm14.182 4.333a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2h-8a1 1 0 0 1-1-1Zm1 2.556a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8ZM9.293 21.227a1 1 0 0 1 1-1H28.96a1 1 0 1 1 0 2H10.293a1 1 0 0 1-1-1Zm1 2.556a1 1 0 0 0 0 2H28.96a1 1 0 1 0 0-2H10.293Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ArticleMediumFill.displayName = "ArticleMediumFill";

export default ArticleMediumFill;
