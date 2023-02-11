
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ThumbsDownFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round" d="M4.96 17.666h6.492V5.61H4.96z"/><path d="m16.354 26.957-4.902-9.64V5.61h15.699l1.54 12.781a2 2 0 0 1-1.986 2.24h-6.499v3.327a3 3 0 0 1-3 3h-.852Z" fill="#1C1B1F"/><path d="m16.354 26.957-4.902-9.64V5.61h15.699l1.54 12.781a2 2 0 0 1-1.986 2.24h-6.499v3.327a3 3 0 0 1-3 3h-.852Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    ThumbsDownFill.displayName = "ThumbsDownFill";

    export default ThumbsDownFill;
    