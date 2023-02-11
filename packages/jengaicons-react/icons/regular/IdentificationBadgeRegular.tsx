
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const IdentificationBadgeRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M12 8.5h8" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 4.5h20v24H6v-24Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/><path d="M16 20.096a3.298 3.298 0 1 0 0-6.596 3.298 3.298 0 0 0 0 6.596Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M20.404 24.5a4.404 4.404 0 0 0-8.808 0" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    IdentificationBadgeRegular.displayName = "IdentificationBadgeRegular";

    export default IdentificationBadgeRegular;
    