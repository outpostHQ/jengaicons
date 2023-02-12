import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PopcornsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M27.95 11.797a4.497 4.497 0 0 0-6.606-3.972 4.484 4.484 0 0 0-8.767 0 4.496 4.496 0 0 0-6.607 3.972"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M8.677 28.205 4.99 11.95a.1.1 0 0 1 .117-.12l5.73 1.18.033.258 1.95 15.016H8.775a.1.1 0 0 1-.098-.078Zm6.217.078h-2.075l.003.02h2.072v-.02Zm-2.008-15.392-.934.333a.1.1 0 0 1-.053.003l-1.063-.218-.002-.014 1.104.228.946-.34.002.008Zm8.234.024-4.27-1.412a.1.1 0 0 0-.066 0l-3.898 1.388.035.146 1.973 15.202v.044h4.193v.007h2.072v-.007h3.8a.1.1 0 0 0 .096-.077l3.883-16.256a.1.1 0 0 0-.117-.12l-5.637 1.174V13l-1.103.228-.96-.318v.005Zm2.064.089-1.074.224a.1.1 0 0 1-.052-.003l-.938-.31-.022.126-2.011 15.185v.057h2.073l1.99-15.011.034-.268Z"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

PopcornsvgFill.displayName = "PopcornsvgFill";

export default PopcornsvgFill;
