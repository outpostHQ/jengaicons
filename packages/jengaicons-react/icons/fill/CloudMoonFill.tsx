import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CloudMoonFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M8.822 19.018c-1.04-.441-1.638-.95-2.366-1.815A7.176 7.176 0 0 1 4.96 14.21c.53.117 1.07.177 1.612.18a7.176 7.176 0 0 0 6.985-8.777 7.164 7.164 0 0 1 5.552 6.985c0 .112-.002.65-.013.761"
        />
        <path
          fill={color || colorCtx || "#000000"}
          d="M14.172 17.336a5.414 5.414 0 0 0-4.354.758c-.63.426-1.162.98-1.56 1.625a5.31 5.31 0 0 0-.553 4.353c.224.723.6 1.391 1.104 1.959a5.406 5.406 0 0 0 4.028 1.809h8.601c1.734 0 3.465-.47 4.716-1.663.436-.416.878-.885 1.27-1.386a7.567 7.567 0 0 0 1.186-6.845 7.61 7.61 0 0 0-1.848-3.064 7.687 7.687 0 0 0-3.052-1.893 7.731 7.731 0 0 0-6.917 1.047c-.987.706-2.066 2.225-2.62 3.3Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

CloudMoonFill.displayName = "CloudMoonFill";

export default CloudMoonFill;
