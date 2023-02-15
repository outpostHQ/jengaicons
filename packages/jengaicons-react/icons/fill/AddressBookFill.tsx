import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const AddressBookFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
    } = useContext(JengaIconContext);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6.21 13.783h3M6.21 8.783h3M6.21 18.783h3M6.21 23.783h3"
        />
        <path
          fill={color || colorCtx || "#000000"}
          fillRule="evenodd"
          d="M27.71 5.283a1 1 0 0 0-1-1h-18a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-22Zm-10 6a3 3 0 0 0 0 6 3 3 0 1 0 0-6Zm5 3c0 1.292-.49 2.47-1.295 3.357a.347.347 0 0 0 .096.54 8.5 8.5 0 0 1 2.999 2.502 1 1 0 0 1-1.6 1.2 6.501 6.501 0 0 0-5.2-2.6 6.501 6.501 0 0 0-5.2 2.6 1 1 0 0 1-1.6-1.2 8.503 8.503 0 0 1 2.998-2.502c.201-.1.247-.374.097-.54a5 5 0 1 1 8.706-3.357Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

AddressBookFill.displayName = "AddressBookFill";

export default AddressBookFill;
