import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const NoteBlankFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M27.96 4.283h-22a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h14.262a1 1 0 0 0 .642-.233l7.738-6.476a1 1 0 0 0 .358-.767V5.283a1 1 0 0 0-1-1Zm-7.642 22.56v-4.895a1 1 0 0 1 1-1h6.08l-7.08 5.895Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

NoteBlankFill.displayName = "NoteBlankFill";

export default NoteBlankFill;
