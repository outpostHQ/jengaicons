import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Nuxtjslogo = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          fill={color || colorCtx || "#000000"}
          fillRule="evenodd"
          d="m17.462 14.057-3.138-5.264a1.45 1.45 0 0 0-2.497 0L4.203 21.724a1.45 1.45 0 0 0 1.248 2.186h6.076a5.422 5.422 0 0 0 4.7-2.72l4.118-7.158 4.318 7.41h-5.766l-1.412 2.479h9.064a1.45 1.45 0 0 0 1.248-2.186l-6.165-10.457a1.45 1.45 0 0 0-2.497 0l-1.673 2.779Zm-1.456 2.416-2.884-4.933-5.809 9.932 2.834.018a5 5 0 0 0 4.09-2.078l1.77-2.939Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

Nuxtjslogo.displayName = "Nuxtjslogo";

export default Nuxtjslogo;
