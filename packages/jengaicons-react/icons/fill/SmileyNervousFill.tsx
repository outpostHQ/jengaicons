import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SmileyNervousFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size = 32 } = props;

    return (
      <svg
        style={{ width: size, height: size }}
        ref={ref}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        {...props}
      >
        <path
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M28.96 16.783c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12 0-6.628 5.372-12 12-12 6.627 0 12 5.372 12 12Zm-15-2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm9 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-2.048 7.16 1.384 1.616a1 1 0 0 0 1.519-1.302L21.7 19.29a1.1 1.1 0 0 0-1.714.055l-1.078 1.434-1.176-1.461a1.1 1.1 0 0 0-1.721.009l-1.134 1.44-1.066-1.416a1.1 1.1 0 0 0-1.751-.009L10.176 21.8a1 1 0 0 0 1.587 1.218l1.163-1.516 1.057 1.404a1.1 1.1 0 0 0 1.743.02l1.158-1.471 1.192 1.48a1.1 1.1 0 0 0 1.736-.028l1.1-1.462Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

SmileyNervousFill.displayName = "SmileyNervousFill";

export default SmileyNervousFill;
