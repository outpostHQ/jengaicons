import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BluetoothSlashFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M24.996 10.258a1 1 0 0 0-.4-.775l-8-6a1 1 0 0 0-1.6.8v8a1 1 0 0 0 2 0v-6l5.388 4.04-3.561 2.963a1 1 0 0 0 1.278 1.538l4.535-3.772a1 1 0 0 0 .36-.794ZM7.618 8.778a1 1 0 0 0-1.197 1.602l7.904 5.907-6.928 5.196a1 1 0 0 0 1.2 1.6l6.4-4.8v10a1 1 0 0 0 1.6.8l7.412-5.56 2.293 1.715a1 1 0 1 0 1.197-1.602l-9.111-6.81-1.77-1.328a.99.99 0 0 0-.099-.068l-8.9-6.652Zm9.379 9.505.192.144 5.141 3.856-5.333 4v-8Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

BluetoothSlashFill.displayName = "BluetoothSlashFill";

export default BluetoothSlashFill;
