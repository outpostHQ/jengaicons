
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const AnchorSimpleRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM16 27V11M7 15H4.5a.484.484 0 0 0-.49.5 12 12 0 0 0 23.98 0 .484.484 0 0 0-.49-.5H25" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    AnchorSimpleRegular.displayName = "AnchorSimpleRegular";

    export default AnchorSimpleRegular;
    