
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ArrowsLeftRightsvgFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M4.96 24.636h24M28.96 9.253h-24M9.253 5.062 4.96 9.253l4.293 4.192M24.667 20.445l4.293 4.191-4.293 4.192" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    ArrowsLeftRightsvgFill.displayName = "ArrowsLeftRightsvgFill";

    export default ArrowsLeftRightsvgFill;
    