
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const PuzzlePieceFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M22.156 9.083a3.36 3.36 0 1 0-6.073 0H11.52a2 2 0 0 0-2 2v4.38a3.36 3.36 0 1 0 0 6.442v4.378a2 2 0 0 0 2 2h15.2a2 2 0 0 0 2-2v-4.38a3.362 3.362 0 0 1-4.32-3.22 3.36 3.36 0 0 1 4.32-3.22v-4.38a2 2 0 0 0-2-2h-4.564Z" fill="#1C1B1F"/></svg>
    });

    PuzzlePieceFill.displayName = "PuzzlePieceFill";

    export default PuzzlePieceFill;
    