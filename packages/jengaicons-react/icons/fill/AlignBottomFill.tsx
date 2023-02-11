
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const AlignBottomFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M28.96 28.283h-24" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect width="7.318" height="19.826" rx="1" transform="matrix(1 0 0 -1 7.55 24.108)" fill="#1C1B1F"/><rect width="7.318" height="14.608" rx="1" transform="matrix(1 0 0 -1 19.05 24.108)" fill="#1C1B1F"/></svg>
    });

    AlignBottomFill.displayName = "AlignBottomFill";

    export default AlignBottomFill;
    