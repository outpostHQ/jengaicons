
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const CoffeesvgFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M11.422 5.206v3.692M15.114 5.206v3.692M18.806 5.206v3.692M4.96 27.36h20.308" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10.879 27.36a10.156 10.156 0 0 1-5.919-9.231V12.59h20.308v5.539a10.156 10.156 0 0 1-5.919 9.231" fill="#1C1B1F"/><path d="M10.879 27.36a10.156 10.156 0 0 1-5.919-9.231V12.59h20.308v5.539a10.156 10.156 0 0 1-5.919 9.231" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M25.268 12.59a3.692 3.692 0 0 1 3.692 3.693v.923a3.693 3.693 0 0 1-3.692 3.692h-.39" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    CoffeesvgFill.displayName = "CoffeesvgFill";

    export default CoffeesvgFill;
    