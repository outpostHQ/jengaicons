import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const MariaDBlogo = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          stroke={color || colorCtx || "#000000"}
          d="M27.892 8.52a.344.344 0 0 0-.232-.082c-.232 0-.532.157-.692.245l-.065.033c-.27.13-.565.205-.865.218-.308.01-.573.027-.918.063-2.046.21-2.958 1.778-3.837 3.295-.478.825-.972 1.677-1.65 2.338-.14.135-.29.262-.446.378-.702.523-1.582.892-2.27 1.156-.66.252-1.38.479-2.076.698-.637.2-1.24.39-1.792.596-.25.092-.462.163-.65.226-.502.163-.867.288-1.397.654a9.274 9.274 0 0 0-.556.41c-.422.335-.795.728-1.108 1.167-.27.405-.582.78-.93 1.12-.112.11-.312.164-.609.164-.35 0-.771-.072-1.22-.148-.448-.076-.938-.164-1.347-.164-.333 0-.586.054-.777.164 0 0-.32.186-.455.428l.133.06c.205.111.396.249.567.409.177.165.374.305.588.419a.52.52 0 0 1 .183.118c-.056.082-.138.188-.224.3-.472.618-.747 1.009-.59 1.221a.49.49 0 0 0 .246.056c1.03 0 1.583-.268 2.283-.606.203-.098.41-.2.655-.303.41-.178.85-.46 1.316-.76.618-.397 1.257-.808 1.875-1.007.51-.155 1.041-.23 1.574-.22.655 0 1.344.087 2.008.172.496.064 1.008.13 1.511.164.196.011.377.017.554.017.235 0 .47-.012.704-.037l.056-.02c.353-.216.519-.682.678-1.132.103-.29.19-.55.328-.715a.164.164 0 0 1 .026-.022.033.033 0 0 1 .04.006.021.021 0 0 1 0 .013c-.081 1.76-.79 2.877-1.507 3.87l-.486.51s.67 0 1.05-.147c1.392-.415 2.443-1.332 3.207-2.793.188-.375.357-.76.504-1.153.013-.033.134-.094.122.076 0 .05-.007.105-.01.163 0 .035-.006.07-.007.105-.02.246-.082.764-.082.764l.43-.23c1.035-.654 1.834-1.975 2.44-4.03.252-.856.437-1.706.6-2.454.194-.9.362-1.672.554-1.972.302-.47.763-.787 1.209-1.095.061-.042.122-.082.182-.127.56-.393 1.118-.847 1.24-1.694v-.019c.093-.632.017-.789-.065-.867Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

MariaDBlogo.displayName = "MariaDBlogo";

export default MariaDBlogo;
