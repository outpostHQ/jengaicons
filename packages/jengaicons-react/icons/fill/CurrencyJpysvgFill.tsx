
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const CurrencyJpysvgFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M11.246 20.569h11.428M11.246 16.759h11.428M16.96 16.759v9.524M25.532 6.283 16.96 16.759 8.39 6.283" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    CurrencyJpysvgFill.displayName = "CurrencyJpysvgFill";

    export default CurrencyJpysvgFill;
    