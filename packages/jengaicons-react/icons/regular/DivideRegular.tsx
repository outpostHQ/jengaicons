
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const DivideRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M6 16h20" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 10.546a1.818 1.818 0 1 0 0-3.637 1.818 1.818 0 0 0 0 3.637ZM16 25.091a1.818 1.818 0 1 0 0-3.636 1.818 1.818 0 0 0 0 3.636Z" fill="#1C1B1F"/></svg>
    });

    DivideRegular.displayName = "DivideRegular";

    export default DivideRegular;
    