
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ExpandFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M4.96 27.166 27.844 4.283M13.704 28.283 28.96 13.028" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round"/></svg>
    });

    ExpandFill.displayName = "ExpandFill";

    export default ExpandFill;
    