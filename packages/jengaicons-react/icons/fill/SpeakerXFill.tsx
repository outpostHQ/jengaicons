import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SpeakerXFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M19.097 26.422V7.179a.5.5 0 0 0-.813-.39l-6.255 5.023v10.251l6.266 4.757a.5.5 0 0 0 .802-.398Zm-9.068-4.994v-8.944h-.597a4.472 4.472 0 0 0 0 8.944h.597Zm19.638-7.852a1 1 0 0 1 0 1.414l-1.793 1.793 1.793 1.793a1 1 0 0 1-1.414 1.414l-1.793-1.793-1.793 1.793a1 1 0 0 1-1.414-1.414l1.793-1.793-1.793-1.793a1 1 0 1 1 1.414-1.414l1.793 1.793 1.793-1.793a1 1 0 0 1 1.414 0Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

SpeakerXFill.displayName = "SpeakerXFill";

export default SpeakerXFill;
