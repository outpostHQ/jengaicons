import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const LockKeyOpenFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size, color } = props;

    return (
      <svg
        style={{ width: size || 32, height: size || 32 }}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
        {...props}
      >
        <path
          fill={color || "#000000"}
          fillRule="evenodd"
          d="M15.644 3.283a6 6 0 0 0-6 6v5.105H6.592a1 1 0 0 0-1 1v11.895a1 1 0 0 0 1 1h20.737a1 1 0 0 0 1-1V15.388a1 1 0 0 0-1-1H11.644V9.283a4 4 0 0 1 4-4h2.632a4 4 0 0 1 4 4v.053a1 1 0 1 0 2 0v-.053a6 6 0 0 0-6-6h-2.632Zm.104 16.725a1.212 1.212 0 1 1 2.424 0 1.212 1.212 0 0 1-2.424 0Zm1.212-3.211a3.212 3.212 0 0 0-1 6.264v1.813a1 1 0 0 0 2 0v-1.813a3.213 3.213 0 0 0-1-6.264Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

LockKeyOpenFill.displayName = "LockKeyOpenFill";

export default LockKeyOpenFill;
