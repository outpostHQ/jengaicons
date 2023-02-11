import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArticleNyTimesRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M18.892 14.172H28M18.892 17.815H28M18.892 21.458H28M8.874 25.1H28M15.08 17.316a5.464 5.464 0 1 1-5.303-6.787M9.777 15.364l-.006 6.081"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.951 7.9a2.441 2.441 0 1 1-1.552 4.324l-.115-.113a.513.513 0 0 1-.02-.021c-.19-.21-3.08-3.417-3.37-3.674-.301-.266-.957-.517-1.453-.517a2.441 2.441 0 0 0-1.085 4.629"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

ArticleNyTimesRegular.displayName = "ArticleNyTimesRegular";

export default ArticleNyTimesRegular;
