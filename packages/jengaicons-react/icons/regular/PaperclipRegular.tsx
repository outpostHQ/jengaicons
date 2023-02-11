import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PaperclipRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m19.08 10.434-9.098 9.098a1.749 1.749 0 0 0 0 2.474v0c.683.683 1.79.683 2.473 0l10.794-10.794a3.489 3.489 0 0 0 0-4.934v0a3.489 3.489 0 0 0-4.934 0l-10.8 10.8a5.238 5.238 0 0 0 0 7.407v0a5.238 5.238 0 0 0 7.407 0l8.558-8.558"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

PaperclipRegular.displayName = "PaperclipRegular";

export default PaperclipRegular;
