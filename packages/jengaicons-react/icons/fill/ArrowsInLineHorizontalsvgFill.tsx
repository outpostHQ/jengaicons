
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ArrowsInLineHorizontalsvgFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M16.75 6.283v20M19.75 16.283h8M23.992 12.038l-4.242 4.243 4.242 4.242M9.507 12.038l4.242 4.243-4.481 3.99M13.75 16.28h-8" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    ArrowsInLineHorizontalsvgFill.displayName = "ArrowsInLineHorizontalsvgFill";

    export default ArrowsInLineHorizontalsvgFill;
    