import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const GitForkFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M9.948 11.79a3.82 3.82 0 0 0-.99-7.507 3.818 3.818 0 0 0-.99 7.506c-.007.046-.01.092-.01.14v4.16a1 1 0 0 0 1 1h7.002v3.558a1 1 0 0 0 .008.13 3.82 3.82 0 0 0 .992 7.506 3.818 3.818 0 0 0 .991-7.506c.006-.043.008-.086.008-.13v-3.558h7.003a1 1 0 0 0 1-1v-4.16c0-.048-.003-.094-.01-.14a3.82 3.82 0 0 0-.99-7.506 3.818 3.818 0 0 0-.99 7.506c-.007.046-.01.092-.01.14v3.16H9.958v-3.16c0-.048-.004-.094-.01-.14Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

GitForkFill.displayName = "GitForkFill";

export default GitForkFill;
