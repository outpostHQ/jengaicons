import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArticleNyTimesRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          strokeLinejoin="round"
          strokeWidth="2"
          d="M18.892 14.172H28M18.892 17.815H28M18.892 21.458H28M8.874 25.1H28M15.08 17.316a5.464 5.464 0 1 1-5.303-6.787M9.777 15.364l-.006 6.081"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M12.951 7.9a2.441 2.441 0 1 1-1.552 4.324l-.115-.113a.513.513 0 0 1-.02-.021c-.19-.21-3.08-3.417-3.37-3.674-.301-.266-.957-.517-1.453-.517a2.441 2.441 0 0 0-1.085 4.629"
        />
      </svg>
    );
  }
);

ArticleNyTimesRegular.displayName = "ArticleNyTimesRegular";

export default ArticleNyTimesRegular;
