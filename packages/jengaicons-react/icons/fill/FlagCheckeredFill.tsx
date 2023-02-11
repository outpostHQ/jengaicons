import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FlagCheckeredFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M27.014 5.312c-1.906 1.429-3.633 1.76-5.302 1.587a10.183 10.183 0 0 1-1.663-.324.99.99 0 0 0-.163-.046c-1.129-.327-2.274-.815-3.492-1.336l-.068-.03c-1.8-.771-3.766-1.614-5.832-1.828-2.154-.223-4.382.237-6.695 1.967a1.006 1.006 0 0 0-.412.821V28.283a1 1 0 0 0 2 0v-5.82c1.748-1.188 3.35-1.462 4.902-1.302.556.058 1.108.171 1.665.325a.99.99 0 0 0 .159.045c1.129.327 2.275.814 3.493 1.337l.069.029c1.8.771 3.766 1.614 5.831 1.828 2.159.223 4.39-.239 6.708-1.977a1 1 0 0 0 .4-.8V6.112a1 1 0 0 0-1.6-.8ZM20.695 22.57c.34.073.677.13 1.017.164 1.551.16 3.153-.113 4.902-1.3V15.59a8.843 8.843 0 0 1-5.108.964 10.913 10.913 0 0 1-.81-.115v6.131Zm-7.39-10.932V6.09c.747.276 1.509.601 2.301.94l.069.03c.962.413 1.973.846 3.02 1.192V13.8a49.1 49.1 0 0 1-2.3-.94l-.07-.03c-.962-.412-1.972-.845-3.02-1.191Zm-2 1.517v6.132a10.9 10.9 0 0 0-.81-.116 8.843 8.843 0 0 0-5.108.965v-5.844c1.748-1.187 3.35-1.461 4.902-1.3.34.034.678.09 1.016.163Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

FlagCheckeredFill.displayName = "FlagCheckeredFill";

export default FlagCheckeredFill;
