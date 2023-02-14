import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const PuzzlePiece = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          fill={color || colorCtx || "#000000"}
          d="m21.197 8.8-.904-.43a1 1 0 0 0 .904 1.43v-1Zm-6.074 0v1a1 1 0 0 0 .904-1.43l-.904.43ZM8.56 15.18l-.285.958a1 1 0 0 0 1.285-.959h-1Zm0 6.44h1a1 1 0 0 0-1.285-.958l.285.959Zm19.2 0h1a1 1 0 0 0-1.285-.958l.285.959Zm0-6.44-.285.958a1 1 0 0 0 1.285-.959h-1Zm-7.24-7.82c0 .364-.082.706-.227 1.01l1.807.86c.27-.569.42-1.203.42-1.87h-2ZM18.16 5a2.36 2.36 0 0 1 2.36 2.36h2A4.36 4.36 0 0 0 18.16 3v2ZM15.8 7.36A2.36 2.36 0 0 1 18.16 5V3a4.36 4.36 0 0 0-4.36 4.36h2Zm.227 1.01a2.347 2.347 0 0 1-.227-1.01h-2c0 .667.15 1.301.42 1.87l1.807-.86ZM10.56 9.8h4.563v-2H10.56v2Zm-1 1a1 1 0 0 1 1-1v-2a3 3 0 0 0-3 3h2Zm0 4.38V10.8h-2v4.38h2Zm-1.96.86c.236 0 .462.034.675.098l.57-1.917A4.36 4.36 0 0 0 7.6 14.04v2ZM5.24 18.4a2.36 2.36 0 0 1 2.36-2.36v-2a4.36 4.36 0 0 0-4.36 4.36h2Zm2.36 2.36a2.36 2.36 0 0 1-2.36-2.36h-2a4.36 4.36 0 0 0 4.36 4.36v-2Zm.675-.098a2.36 2.36 0 0 1-.675.098v2c.431 0 .85-.063 1.245-.18l-.57-1.918ZM9.56 26v-4.38h-2V26h2Zm1 1a1 1 0 0 1-1-1h-2a3 3 0 0 0 3 3v-2Zm15.2 0h-15.2v2h15.2v-2Zm1-1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2Zm0-4.38V26h2v-4.38h-2Zm.715-.958a2.359 2.359 0 0 1-.675.098v2c.431 0 .85-.063 1.245-.18l-.57-1.918Zm-.675.098a2.36 2.36 0 0 1-2.36-2.36h-2a4.36 4.36 0 0 0 4.36 4.36v-2Zm-2.36-2.36a2.36 2.36 0 0 1 2.36-2.36v-2a4.36 4.36 0 0 0-4.36 4.36h2Zm2.36-2.36c.236 0 .462.034.675.098l.57-1.917a4.36 4.36 0 0 0-1.245-.181v2Zm-.04-5.24v4.38h2V10.8h-2Zm-1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2Zm-4.563 0h4.563v-2h-4.563v2Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

PuzzlePiece.displayName = "PuzzlePiece";

export default PuzzlePiece;
