
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const CreditCardsvgFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round" d="M4.961 7.976H28.96v16.615H4.961z"/><path fillRule="evenodd" clip-rule="evenodd" d="M4.96 12.69h24v11.9h-24v-11.9Zm15.615 8.208a1 1 0 0 1 1-1h3.692a1 1 0 1 1 0 2h-3.692a1 1 0 0 1-1-1Zm-4.538-1a1 1 0 1 0 0 2h1.846a1 1 0 1 0 0-2h-1.846Z" fill="#1C1B1F"/></svg>
    });

    CreditCardsvgFill.displayName = "CreditCardsvgFill";

    export default CreditCardsvgFill;
    