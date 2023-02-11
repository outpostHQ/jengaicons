
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const BuildingssvgFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M4.96 26.14h24M22.102 21.855h1.715M22.102 17.569h1.715" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path fillRule="evenodd" clip-rule="evenodd" d="M7.674 6.463a1 1 0 0 0-1 1V25.14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7.463a1 1 0 0 0-1-1h-10Zm3.285 3.249a1 1 0 0 0 0 2h3.429a1 1 0 1 0 0-2H10.96Zm-1 6.143a1 1 0 0 1 1-1h3.429a1 1 0 1 1 0 2H10.96a1 1 0 0 1-1-1Zm1 4.142a1 1 0 1 0 0 2h3.429a1 1 0 1 0 0-2H10.96Z" fill="#1C1B1F"/><path stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round" d="M18.674 13.283h8.572V26.14h-8.572z"/></svg>
    });

    BuildingssvgFill.displayName = "BuildingssvgFill";

    export default BuildingssvgFill;
    