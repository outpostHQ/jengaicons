
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const SuitcaseSimpleRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round" d="M4 9h24v18H4z"/><path d="M4 20h24" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 9V5H11v4" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/></svg>
    });

    SuitcaseSimpleRegular.displayName = "SuitcaseSimpleRegular";

    export default SuitcaseSimpleRegular;
    