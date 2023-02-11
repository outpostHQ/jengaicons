
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ArrowSquareLeftRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round" d="M4 4h24v24H4z"/><path d="M15.243 11.757 11 16l4.243 4.243M11 16h10" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    ArrowSquareLeftRegular.displayName = "ArrowSquareLeftRegular";

    export default ArrowSquareLeftRegular;
    