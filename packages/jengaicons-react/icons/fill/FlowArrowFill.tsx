
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const FlowArrowFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M7.96 24.744a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="#1C1B1F"/><path d="M10.96 21.744h.857a5.143 5.143 0 0 0 5.143-5.143v0a5.143 5.143 0 0 1 5.143-5.143h6.857" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="m25.323 7.822 3.637 3.636-3.637 3.637" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    FlowArrowFill.displayName = "FlowArrowFill";

    export default FlowArrowFill;
    