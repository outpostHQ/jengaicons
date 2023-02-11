
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const CopyRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M4 10.546h17.454V28H4V10.546Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/><path d="M10.546 10.492V4H28v17.454h-6.515" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    CopyRegular.displayName = "CopyRegular";

    export default CopyRegular;
    