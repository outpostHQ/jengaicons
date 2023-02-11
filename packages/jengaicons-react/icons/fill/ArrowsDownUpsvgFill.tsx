
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ArrowsDownUpsvgFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M9.765 4.283v24M25.2 28.283v-24M20.931 8.603l4.218-4.268 4.217 4.268M5.497 23.963l4.217 4.268 4.217-4.268" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    ArrowsDownUpsvgFill.displayName = "ArrowsDownUpsvgFill";

    export default ArrowsDownUpsvgFill;
    