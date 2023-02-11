
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ArrowSquareDownRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round" d="M4 4h24v24H4z"/><path d="M11.757 16.757 16 21l4.243-4.243M16 11v10" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    ArrowSquareDownRegular.displayName = "ArrowSquareDownRegular";

    export default ArrowSquareDownRegular;
    