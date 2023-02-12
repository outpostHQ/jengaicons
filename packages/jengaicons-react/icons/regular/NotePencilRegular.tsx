import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const NotePencilRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M16.626 4H4.5a.5.5 0 0 0-.5.5v23a.5.5 0 0 0 .5.5h23a.5.5 0 0 0 .5-.5V14.008"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M28 8.866 23.134 4l-10.46 10.424-.483 4.962h5.387L28 8.866Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="m20.631 6.522 4.852 4.852"
        />
      </svg>
    );
  }
);

NotePencilRegular.displayName = "NotePencilRegular";

export default NotePencilRegular;
