
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ChevronCircleDoubleDownsvgFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M16.96 28.283c6.628 0 12-5.373 12-12s-5.372-12-12-12c-6.627 0-12 5.373-12 12s5.373 12 12 12Zm-4.95-11.829a1 1 0 0 1 1.415 0l3.535 3.536 3.536-3.535a1 1 0 0 1 1.414 1.414l-4.243 4.242a1 1 0 0 1-1.414 0L12.01 17.87a1 1 0 0 1 0-1.415Zm1.415-6a1 1 0 0 0-1.415 1.415l4.243 4.242a1 1 0 0 0 1.414 0l4.243-4.242a1 1 0 0 0-1.414-1.415L16.96 13.99l-3.535-3.536Z" fill="#1C1B1F"/></svg>
    });

    ChevronCircleDoubleDownsvgFill.displayName = "ChevronCircleDoubleDownsvgFill";

    export default ChevronCircleDoubleDownsvgFill;
    