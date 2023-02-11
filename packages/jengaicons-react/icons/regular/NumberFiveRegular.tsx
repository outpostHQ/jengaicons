
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const NumberFiveRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M10.733 23.912C11.813 25.181 13.491 26 15.377 26c3.252 0 5.89-2.43 5.89-5.43 0-2.998-2.638-5.428-5.89-5.428a6.173 6.173 0 0 0-3.774 1.26c-.217.167-.421.35-.61.543L12.887 6h8.378" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    NumberFiveRegular.displayName = "NumberFiveRegular";

    export default NumberFiveRegular;
    