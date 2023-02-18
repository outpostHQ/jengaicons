import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Nodelogo = forwardRef<SVGSVGElement, JengaIconRegularProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, weight, style } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      weight: weightCtx,
      style: styleCtx,
    } = useContext(JengaIconContext as Context<JengaIconRegularProps>);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        strokeWidth={weight || weightCtx || 2}
        ref={ref}
        style={{
          ...styleCtx,
          ...style,
        }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          fill={color || colorCtx || "#000000"}
          d="M16.955 28.533c-.319 0-.643-.086-.924-.248l-2.938-1.738c-.438-.248-.224-.333-.081-.38.586-.206.705-.249 1.329-.606.066-.038.152-.024.219.02l2.257 1.338c.081.047.195.047.271 0l8.797-5.077a.282.282 0 0 0 .133-.238V11.45c0-.1-.052-.19-.138-.243l-8.791-5.072a.276.276 0 0 0-.272 0L8.03 11.213a.278.278 0 0 0-.138.243v10.149c0 .095.053.19.138.233l2.41 1.39c1.31.653 2.11-.114 2.11-.89v-10.02c0-.143.114-.252.257-.252h1.115c.138 0 .257.11.257.252v10.025c0 1.743-.953 2.743-2.605 2.743-.51 0-.91 0-2.024-.552l-2.305-1.33A1.852 1.852 0 0 1 6.32 21.6V11.45c0-.657.352-1.276.924-1.605L16.03 4.77a1.928 1.928 0 0 1 1.848 0l8.796 5.081c.572.329.924.943.924 1.605v10.149c0 .657-.352 1.271-.924 1.605l-8.796 5.076c-.28.162-.6.248-.924.248Zm7.1-10.006c0-1.9-1.285-2.405-3.985-2.762-2.734-.362-3.01-.548-3.01-1.186 0-.528.233-1.233 2.257-1.233 1.805 0 2.472.39 2.748 1.61.024.114.129.2.248.2h1.143a.249.249 0 0 0 .186-.082.265.265 0 0 0 .066-.195c-.176-2.1-1.571-3.076-4.39-3.076-2.51 0-4.006 1.057-4.006 2.833 0 1.924 1.49 2.458 3.896 2.696 2.881.28 3.105.705 3.105 1.271 0 .981-.79 1.4-2.643 1.4-2.33 0-2.839-.585-3.01-1.742a.252.252 0 0 0-.253-.215H15.27a.251.251 0 0 0-.252.253c0 1.48.805 3.248 4.657 3.248 2.782-.005 4.382-1.105 4.382-3.02Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

Nodelogo.displayName = "Nodelogo";

export default Nodelogo;
