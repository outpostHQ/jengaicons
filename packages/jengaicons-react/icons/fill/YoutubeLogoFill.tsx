import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const YoutubeLogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M5.585 22.766c-.27-1.035-.625-3.05-.625-6.483s.355-5.448.625-6.483a1.837 1.837 0 0 1 1.111-1.257C10.56 7.058 16.96 7.099 16.96 7.099s6.402-.04 10.264 1.444A1.837 1.837 0 0 1 28.336 9.8c.27 1.035.624 3.05.624 6.483s-.355 5.448-.624 6.483a1.838 1.838 0 0 1-1.112 1.257c-3.862 1.485-10.264 1.444-10.264 1.444s-6.401.04-10.264-1.444a1.837 1.837 0 0 1-1.111-1.257Zm9.53-10.175 5.917 3.692-5.918 3.692v-7.384Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

YoutubeLogoFill.displayName = "YoutubeLogoFill";

export default YoutubeLogoFill;
