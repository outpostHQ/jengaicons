import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const BitbucketLogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M27.994 4.72a.5.5 0 0 0-.494-.579h-23a.5.5 0 0 0-.494.58l3.372 20.812a.5.5 0 0 0 .494.42h16.316a.5.5 0 0 0 .494-.421L27.994 4.72Zm-15.43 7.507a.5.5 0 0 1 .491-.597h5.953a.5.5 0 0 1 .492.587l-1.038 5.835a.5.5 0 0 1-.492.413h-3.762a.5.5 0 0 1-.49-.403l-1.153-5.835Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

BitbucketLogoFill.displayName = "BitbucketLogoFill";

export default BitbucketLogoFill;
