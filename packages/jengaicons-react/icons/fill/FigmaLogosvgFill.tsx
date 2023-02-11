
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const FigmaLogosvgFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M20.96 20.424a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16.96 12.424v-8h-4a4 4 0 0 0 0 8h4ZM16.96 20.424v-8h-4a4 4 0 1 0 0 8h4Z" fill="#1C1B1F" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16.96 12.424v-8h4a4 4 0 0 1 0 8h-4Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16.96 20.424v4a3.999 3.999 0 0 1-7.923.78 4 4 0 0 1 3.923-4.78h4Z" fill="#1C1B1F" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    FigmaLogosvgFill.displayName = "FigmaLogosvgFill";

    export default FigmaLogosvgFill;
    