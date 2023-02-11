import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SpeakerLowFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M20.839 26.404V7.162a.5.5 0 0 0-.813-.39l-6.255 5.022v10.252l6.265 4.756a.5.5 0 0 0 .803-.398ZM11.77 21.41v-8.944h-.597a4.472 4.472 0 0 0 0 8.944h.597Zm14.104-7.918a1 1 0 0 0-1.415 1.414 2.586 2.586 0 0 1 0 3.659 1 1 0 1 0 1.415 1.414 4.588 4.588 0 0 0 0-6.487Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

SpeakerLowFill.displayName = "SpeakerLowFill";

export default SpeakerLowFill;
