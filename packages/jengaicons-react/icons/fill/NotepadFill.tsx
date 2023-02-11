import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const NotepadFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M12.421 4.783a1 1 0 1 0-2 0v1.846H8.557a1 1 0 0 0-1 1v20.154a1 1 0 0 0 1 1h16.807a1 1 0 0 0 1-1V7.629a1 1 0 0 0-1-1h-1.866V4.783a1 1 0 1 0-2 0v1.846H17.96V4.783a1 1 0 0 0-2 0v1.846h-3.539V4.783Zm.847 11a1 1 0 1 0 0 2h7.385a1 1 0 1 0 0-2h-7.385Zm0 3.692a1 1 0 1 0 0 2h7.385a1 1 0 1 0 0-2h-7.385Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

NotepadFill.displayName = "NotepadFill";

export default NotepadFill;
