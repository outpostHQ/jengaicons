
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const FlagBannerFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M28.96 20.949h-24V5.276h24l-5.508 7.796 5.508 7.877Z" fill="#1C1B1F"/><path d="M4.96 20.949h24l-5.508-7.877 5.508-7.796h-24V27.29" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    FlagBannerFill.displayName = "FlagBannerFill";

    export default FlagBannerFill;
    