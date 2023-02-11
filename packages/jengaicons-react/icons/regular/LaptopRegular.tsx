
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const LaptopRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M4 5.636h24V22H4V5.636Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/><path d="M4 26.364h24" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round"/><circle cx="16" cy="8.909" r="1.091" fill="#1C1B1F"/></svg>
    });

    LaptopRegular.displayName = "LaptopRegular";

    export default LaptopRegular;
    