import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Mongodblogo = forwardRef<SVGSVGElement, JengaIconRegularProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, weight, style } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      weight: weightCtx,
      style: styleCtx,
    } = useContext(JengaIconContext as Context<JengaIconRegularProps>);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        strokeWidth={weight || weightCtx || 2}
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
          strokeWidth={weight || weightCtx || "2"}
          d="M13.762 7.64c1.082-1.202 1.999-2.403 2.2-2.66.019-.017.056-.017.074 0 .183.257 1.119 1.458 2.2 2.66 9.243 11.032-1.448 18.479-1.448 18.479l-.092.051c-.073 1.15-.275 2.797-.275 2.797h-.807s-.202-1.647-.275-2.797l-.092-.068c-.036.017-10.728-7.43-1.485-18.463Zm2.237 18.307s.477-.377.605-.583v-.017l-.586-12.011c0-.034-.055-.034-.055 0l-.587 12.01v.018c.128.206.623.583.623.583Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

Mongodblogo.displayName = "Mongodblogo";

export default Mongodblogo;
