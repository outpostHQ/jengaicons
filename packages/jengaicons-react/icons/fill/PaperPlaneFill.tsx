
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const PaperPlaneFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M5.562 26.01 16.48 6.255a.5.5 0 0 1 .875-.002L28.35 26.007a.5.5 0 0 1-.585.72L17.96 23.67v-7.892a1 1 0 0 0-2 0v7.892l-9.811 3.06a.5.5 0 0 1-.587-.72Z" fill="#1C1B1F"/></svg>
    });

    PaperPlaneFill.displayName = "PaperPlaneFill";

    export default PaperPlaneFill;
    