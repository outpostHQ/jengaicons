import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArticleMediumRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4 8.5h1.778M14.667 8.5h1.777M4.444 17.389h2.667M13.333 17.389H16M20 13.833h8M20 17.389h8M9.333 20.944H28M9.333 24.5H28M4 8.5h1.778M5.818 17.389V8.5l4.367 7.022L14.63 8.5v8.889"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

ArticleMediumRegular.displayName = "ArticleMediumRegular";

export default ArticleMediumRegular;
