
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const GenderNonbinaryRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M16 28.5a7.698 7.698 0 1 0 0-15.396A7.698 7.698 0 0 0 16 28.5ZM20.043 9.934 11.957 4.5M11.957 9.934 20.043 4.5M16 13.104V7.217" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    GenderNonbinaryRegular.displayName = "GenderNonbinaryRegular";

    export default GenderNonbinaryRegular;
    