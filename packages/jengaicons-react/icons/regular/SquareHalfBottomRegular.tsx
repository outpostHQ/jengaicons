
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const SquareHalfBottomRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M4 16.25h24M8 16.25v12M12 16.25v12M16 16.25v12M20 16.25v12M24 16.25v12" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round" d="M4 4.25h24v24H4z"/></svg>
    });

    SquareHalfBottomRegular.displayName = "SquareHalfBottomRegular";

    export default SquareHalfBottomRegular;
    