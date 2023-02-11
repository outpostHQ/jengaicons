
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ArrowSquareUpLeftRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round" d="M4 4h24v24H4z"/><path d="M18.464 12.464h-6v6M19.535 19.536l-7.07-7.072" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    ArrowSquareUpLeftRegular.displayName = "ArrowSquareUpLeftRegular";

    export default ArrowSquareUpLeftRegular;
    