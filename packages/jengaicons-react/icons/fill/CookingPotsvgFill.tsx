
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const CookingPotsvgFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M13.76 6.683v3.2M16.96 6.683v3.2M20.16 6.683v3.2M28.96 14.683l-3.2 2.4M4.96 14.683l3.2 2.4" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8.16 13.083h17.6v10.8a2 2 0 0 1-2 2h-13.6a2 2 0 0 1-2-2v-10.8Z" fill="#1C1B1F"/><path d="M8.16 13.083h17.6v10.8a2 2 0 0 1-2 2h-13.6a2 2 0 0 1-2-2v-10.8Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/></svg>
    });

    CookingPotsvgFill.displayName = "CookingPotsvgFill";

    export default CookingPotsvgFill;
    