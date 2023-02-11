import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PoliceCarFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M12.96 4.854a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2h-6a1 1 0 0 1-1-1Zm-1.903 4a1 1 0 0 0-.822.43l-4.56 6.571H4.96a1 1 0 1 0 0 2h.714v9.857a1 1 0 0 0 1 1h4.715a1 1 0 0 0 1-1v-4.286h9.142v4.286a1 1 0 0 0 1 1h4.715a1 1 0 0 0 1-1V17.85H5.674v-1.996h22.572l-4.561-6.57a1 1 0 0 0-.822-.43H11.057Zm17.903 9h-.714v-2h.714a1 1 0 1 1 0 2ZM7.674 26.712v-3.286h2.715v3.286H7.674Zm15.857 0v-3.286h2.715v3.286H23.53Zm-14.57-6.598a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1Zm12 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

PoliceCarFill.displayName = "PoliceCarFill";

export default PoliceCarFill;
