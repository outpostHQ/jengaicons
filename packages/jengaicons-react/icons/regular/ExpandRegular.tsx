
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ExpandRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M4 26.883 26.884 4M12.744 28 28 12.745" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round"/></svg>
    });

    ExpandRegular.displayName = "ExpandRegular";

    export default ExpandRegular;
    