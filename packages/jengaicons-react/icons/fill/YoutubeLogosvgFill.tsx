import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const YoutubeLogosvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M5.585 22.907c-.27-1.035-.625-3.05-.625-6.483s.355-5.447.625-6.483a1.837 1.837 0 0 1 1.111-1.257C10.56 7.2 16.96 7.241 16.96 7.241s6.402-.041 10.264 1.443a1.837 1.837 0 0 1 1.112 1.257c.27 1.036.624 3.05.624 6.483 0 3.434-.355 5.448-.624 6.484a1.837 1.837 0 0 1-1.112 1.257c-3.862 1.484-10.264 1.443-10.264 1.443s-6.401.041-10.264-1.443a1.837 1.837 0 0 1-1.111-1.258Zm9.53-10.175 5.917 3.692-5.918 3.693v-7.385Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

YoutubeLogosvgFill.displayName = "YoutubeLogosvgFill";

export default YoutubeLogosvgFill;
