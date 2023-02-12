import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PencilCircleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M15.82 28.23v-4.292a1.005 1.005 0 0 1-.013-.155c0-.547-.206-1.062-.559-1.433a1.774 1.774 0 0 0-1.286-.567c-.472 0-.937.197-1.287.567-.353.371-.56.886-.56 1.433v3.482c1.152.508 2.398.841 3.704.965Zm-5.704-2.089a11.987 11.987 0 0 1-5.156-9.858c0-6.627 5.372-12 12-12 6.627 0 12 5.373 12 12 0 4.082-2.038 7.688-5.152 9.856v-4.761c0-.15-.035-.3-.1-.435L17.86 8.848a1 1 0 0 0-1.8 0l-5.844 12.065a1 1 0 0 0-.1.436v4.792Zm11.692 1.123V23.782a2 2 0 0 0-3.994-.16 1 1 0 0 1 .006.105v4.525c1.41-.1 2.753-.444 3.988-.99Zm-7.846-7.481c-.36 0-.713.052-1.05.152l1.635-3.376h4.82l1.65 3.41a3.999 3.999 0 0 0-4.19 1.146 3.774 3.774 0 0 0-2.866-1.332Zm4.438-5.224-1.441-2.98-1.443 2.98H18.4Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

PencilCircleFill.displayName = "PencilCircleFill";

export default PencilCircleFill;
