
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const PinterestLogosvgFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="m15.96 11.424-4 17M8.654 19.994a10 10 0 1 1 18.307-5.57c0 5.523-4 9-8 9s-5.204-2.633-5.204-2.633" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    PinterestLogosvgFill.displayName = "PinterestLogosvgFill";

    export default PinterestLogosvgFill;
    