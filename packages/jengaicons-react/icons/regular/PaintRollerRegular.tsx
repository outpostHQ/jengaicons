
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const PaintRollerRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round" d="M6.537 6.324h17.948v8.547H6.537z"/><path d="M4 10.618h2.466M16 25.676v-4.321a.5.5 0 0 1 .345-.476l10.275-3.347A2 2 0 0 0 28 15.63v-4.512a.5.5 0 0 0-.5-.5h-2.984" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round"/></svg>
    });

    PaintRollerRegular.displayName = "PaintRollerRegular";

    export default PaintRollerRegular;
    