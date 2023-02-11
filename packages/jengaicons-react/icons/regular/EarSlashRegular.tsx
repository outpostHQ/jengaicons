import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const EarSlashRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m6.77 6.346 18.46 20.308M11.78 11.858a4.6 4.6 0 0 0-.395 1.873M11.267 5.804a9.233 9.233 0 0 1 13.964 7.927"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.916 26.654a5.077 5.077 0 0 1-8.993-3.23c0-4.788-4.154-3.232-4.154-9.693a9.19 9.19 0 0 1 1.77-5.437M20.047 15.463c.38-.496.58-1.107.569-1.732a4.62 4.62 0 0 0-6.113-4.367M20.488 21.436a2.31 2.31 0 0 1-3.103-2.167c-.005-.356.058-.71.183-1.044"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

EarSlashRegular.displayName = "EarSlashRegular";

export default EarSlashRegular;
