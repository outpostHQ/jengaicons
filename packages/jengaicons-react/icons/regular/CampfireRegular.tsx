
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const CampfireRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="m5 21.5 22 7M27 21.5l-22 7M19 17.5a3 3 0 0 1-6 0c0-3 3-5 3-5s3 2 3 5Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M22.5 14a6.5 6.5 0 1 1-13 0c0-5.5 6.5-9.5 6.5-9.5s6.5 4 6.5 9.5Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    CampfireRegular.displayName = "CampfireRegular";

    export default CampfireRegular;
    