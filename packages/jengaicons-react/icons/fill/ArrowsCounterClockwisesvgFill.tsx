
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ArrowsCounterClockwisesvgFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M11.96 12.747h-6v-6" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M25.759 8.505a11 11 0 0 0-15.556 0L5.96 12.747M21.96 19.818h6v6" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8.161 24.061a11 11 0 0 0 15.557 0l4.242-4.243" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    ArrowsCounterClockwisesvgFill.displayName = "ArrowsCounterClockwisesvgFill";

    export default ArrowsCounterClockwisesvgFill;
    