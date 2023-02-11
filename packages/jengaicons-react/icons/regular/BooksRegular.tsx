import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BooksRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M4 10.05h6.13M10.13 22.311h6.13M20.762 22.715l5.921-1.587M17.588 10.872l5.922-1.587"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinejoin="round"
        d="M4 4.942h6.13V27.42H4zM10.13 4.942h6.13V27.42h-6.13zM16.26 5.937l5.922-1.587L28 26.062l-5.921 1.587z"
      />
    </svg>
  );
});

BooksRegular.displayName = "BooksRegular";

export default BooksRegular;
