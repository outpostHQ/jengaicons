
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ArrowsInLineVerticalRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M26 16H6M16 19v8M11.757 23.243 16 19l4.243 4.243M11.757 8.757 16 13l4.243-4.243M16 5v8" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    ArrowsInLineVerticalRegular.displayName = "ArrowsInLineVerticalRegular";

    export default ArrowsInLineVerticalRegular;
    