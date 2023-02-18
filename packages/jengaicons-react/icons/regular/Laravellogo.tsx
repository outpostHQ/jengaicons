import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Laravellogo = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          d="M9.547 4.25 4.85 6.97l-.165 15.824 9.428 5.456 9.314-5.456v-5.06l4.533-2.605V9.624l-4.847-2.852-4.879 2.852v5.06l-3.873 2.209V6.97L9.547 4.25Zm-.341 5.83-3.77-2.167V22.41l8.24 4.806v-4.33l-4.47-2.62V10.08Zm.738-.005 3.747-2.144v9.367L9.944 19.51v-9.435Zm8.661 5.226-8.171 4.755 3.662 2.186 8.199-4.81-3.69-2.131Zm-4.17 7.628 8.188-4.745v4.276L14.436 27.2V22.93Zm8.258-10.285-3.704-2.148v4.163l3.704 2.214v-4.23Zm-3.35-2.838 3.744-2.177 3.65 2.177-3.65 2.209-3.743-2.209Zm7.862.656-3.767 2.175v4.271l3.767-2.254v-4.192ZM5.838 7.258l3.771-2.164 3.718 2.164L9.61 9.436 5.838 7.258Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

Laravellogo.displayName = "Laravellogo";

export default Laravellogo;
