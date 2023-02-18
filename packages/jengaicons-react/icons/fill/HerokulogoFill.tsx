import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const HerokulogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M8.16 4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h17.6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H8.16Zm12.401 7.5h-2.4c.943-1.24 1.534-2.54 1.801-3.9h2.399c-.162 1.362-.715 2.67-1.8 3.9Zm-2.1 2.1c1.483 0 2.37.583 2.856 1.071 1.03 1.043 1.046 2.375 1.043 2.53v7.2h-2.398v-7.17c-.013-.56-.283-1.231-1.5-1.231-2.437 0-5.164 1.22-5.206 1.239l-1.697.768V7.6h2.401v6.811c1.198-.388 2.874-.812 4.501-.812ZM11.56 24.4 14.26 22l-2.701-2.4V24.4Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

HerokulogoFill.displayName = "HerokulogoFill";

export default HerokulogoFill;
