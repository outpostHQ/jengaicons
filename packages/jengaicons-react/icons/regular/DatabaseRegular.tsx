
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const DatabaseRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M16 16c6.075 0 11-2.686 11-6s-4.925-6-11-6S5 6.686 5 10s4.925 6 11 6Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 10v6c0 3.314 4.925 6 11 6s11-2.686 11-6v-6" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 16v6c0 3.314 4.925 6 11 6s11-2.686 11-6v-6" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    DatabaseRegular.displayName = "DatabaseRegular";

    export default DatabaseRegular;
    