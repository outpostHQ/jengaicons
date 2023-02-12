import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const JeepFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M7.977 6.854a1 1 0 0 0-.954.701l-1.348 4.3h22.57l-1.347-4.3a1 1 0 0 0-.954-.7H7.977Zm-2.302 7h22.57v10.858a1 1 0 0 1-1 1h-2.943a1 1 0 0 1-1-1v-3.286h-3.628v-5.143a1 1 0 1 0-2 0v5.143h-1.428v-5.143a1 1 0 1 0-2 0v5.143h-3.399v3.286a1 1 0 0 1-1 1H6.675a1 1 0 0 1-1-1V13.854Zm5.285 4.143a1.286 1.286 0 1 0 0-2.571 1.286 1.286 0 0 0 0 2.571Zm13.286-1.285a1.286 1.286 0 1 1-2.572 0 1.286 1.286 0 0 1 2.572 0Zm4.715-2.858h-.715v-2h.715a1 1 0 1 1 0 2Zm-23.287 0H4.96a1 1 0 1 1 0-2h.714v2Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

JeepFill.displayName = "JeepFill";

export default JeepFill;
