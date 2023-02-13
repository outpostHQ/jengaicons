import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context, SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const FlyingSaucer = forwardRef<SVGSVGElement, JengaIconRegularProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, weight } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      weight: weightCtx,
    } = useContext(JengaIconContext as Context<JengaIconRegularProps>);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        strokeWidth={weight || weightCtx || 2}
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
          strokeWidth={weight || weightCtx || "2"}
          d="m20.372 22.186.417 2.529M16 22.54v3.428M11.629 22.186l-.418 2.529M21.25 9.34c3.996.836 6.75 2.593 6.75 4.628 0 2.84-5.368 5.143-12 5.143S4 16.808 4 13.968c0-2.035 2.775-3.803 6.793-4.628"
        />
        <path
          fill={color || colorCtx || "#000000"}
          d="m10.836 13.11-.334.943.334-.942Zm10.553-.337-.978-.213.977.213Zm-.303.339-.337-.942.337.942Zm-.57-1.526c0 .335-.036.661-.105.974l1.955.426c.098-.452.15-.92.15-1.4h-2ZM15.96 7.031a4.555 4.555 0 0 1 4.555 4.555h2a6.555 6.555 0 0 0-6.555-6.555v2Zm-4.555 4.555a4.555 4.555 0 0 1 4.555-4.555v-2a6.555 6.555 0 0 0-6.555 6.555h2Zm.104.973a4.571 4.571 0 0 1-.104-.973h-2c0 .479.052.947.15 1.398l1.954-.425Zm-1.008 1.494c3.447 1.223 7.205 1.329 10.92 0l-.673-1.883c-3.259 1.165-6.542 1.075-9.578-.002l-.669 1.885Zm-.946-1.07c.111.514.484.906.946 1.07l.669-1.885a.532.532 0 0 1 .34.391l-1.955.425Zm10.855-.423a.532.532 0 0 1 .338-.39l.674 1.883c.46-.164.831-.555.943-1.067l-1.955-.426Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

FlyingSaucer.displayName = "FlyingSaucer";

export default FlyingSaucer;
