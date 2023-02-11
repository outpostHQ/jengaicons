
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const BracketsCurlyFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M11.153 7.767c-6.193 0 0 8.516-6.193 8.516 6.193 0 0 8.516 6.193 8.516M22.767 7.767c6.193 0 0 8.516 6.193 8.516-6.193 0 0 8.516-6.193 8.516" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    BracketsCurlyFill.displayName = "BracketsCurlyFill";

    export default BracketsCurlyFill;
    