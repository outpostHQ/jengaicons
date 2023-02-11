
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const HourglassFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M9.183 4.783a1 1 0 0 0-1 1v.183a10 10 0 0 0 4 8l3.755 2.817-3.755 2.817a10 10 0 0 0-4 8v.183a1 1 0 0 0 1 1h15.554a1 1 0 0 0 1-1V27.6a10 10 0 0 0-4-8l-3.755-2.817 3.756-2.817a10 10 0 0 0 4-8v-.183a1 1 0 0 0-1-1H9.183Z" fill="#1C1B1F"/></svg>
    });

    HourglassFill.displayName = "HourglassFill";

    export default HourglassFill;
    