import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BankFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16.788 6.428a.5.5 0 0 0-.539 0l-9.917 6.347c-.42.269-.23.92.27.92h1.215v7.093H6.674a1 1 0 1 0 0 2h20.572a1 1 0 1 0 0-2h-2v-7.092h1.19c.499 0 .69-.652.269-.921l-9.917-6.347Zm6.458 7.268h-3.143v7.092h3.143v-7.092Zm-5.143 0H14.96v7.092h3.143v-7.092Zm-5.143 0H9.817v7.092h3.143v-7.092Zm-9 11.52a1 1 0 0 1 1-1h24a1 1 0 0 1 0 2h-24a1 1 0 0 1-1-1Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

BankFill.displayName = "BankFill";

export default BankFill;
