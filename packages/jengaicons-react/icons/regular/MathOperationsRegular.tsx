
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const MathOperationsRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M6 21.91h7.273M9.636 18.273v7.272M13.273 9.182H6M26 20.099h-7.273M26 23.72h-7.273M25.09 6.455l-5.454 5.454M25.09 11.91l-5.454-5.455" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    MathOperationsRegular.displayName = "MathOperationsRegular";

    export default MathOperationsRegular;
    