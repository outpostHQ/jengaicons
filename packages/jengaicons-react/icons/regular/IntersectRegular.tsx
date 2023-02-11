
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const IntersectRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M12.308 20.615a8.308 8.308 0 1 0 0-16.615 8.308 8.308 0 0 0 0 16.615Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M19.692 28a8.308 8.308 0 1 0 0-16.615 8.308 8.308 0 0 0 0 16.615ZM15.367 12.598l4.035 4.035M12.598 15.367l4.035 4.035" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    IntersectRegular.displayName = "IntersectRegular";

    export default IntersectRegular;
    