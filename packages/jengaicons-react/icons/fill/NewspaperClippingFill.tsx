import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const NewspaperClippingFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M5.46 6.382h23a.5.5 0 0 1 .5.5v19.496a.5.5 0 0 1-.722.448l-2.973-1.476a.5.5 0 0 0-.434-.005l-3.712 1.736a.5.5 0 0 1-.439-.007l-3.385-1.723a.5.5 0 0 0-.433-.01l-3.851 1.746a.5.5 0 0 1-.427-.007l-3.516-1.728a.5.5 0 0 0-.445.001l-2.94 1.47a.5.5 0 0 1-.723-.448V6.883a.5.5 0 0 1 .5-.5Zm2.5 6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-8Zm2 1v6h4v-6h-4Zm9 0a1 1 0 1 0 0 2h6a1 1 0 0 0 0-2h-6Zm0 4a1 1 0 1 0 0 2h6a1 1 0 0 0 0-2h-6Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

NewspaperClippingFill.displayName = "NewspaperClippingFill";

export default NewspaperClippingFill;
