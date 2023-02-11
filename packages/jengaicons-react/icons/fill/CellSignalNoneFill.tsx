
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const CellSignalNoneFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M28.96 27.783V5.49a.5.5 0 0 0-.854-.354L5.814 27.43a.5.5 0 0 0 .353.854H28.46a.5.5 0 0 0 .5-.5Z" fill="#1C1B1F"/></svg>
    });

    CellSignalNoneFill.displayName = "CellSignalNoneFill";

    export default CellSignalNoneFill;
    