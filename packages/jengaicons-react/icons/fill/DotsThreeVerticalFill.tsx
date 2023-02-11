
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const DotsThreeVerticalFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M19.729 25.514a2.77 2.77 0 1 0-5.538 0 2.77 2.77 0 0 0 5.538 0Zm0-9.231a2.77 2.77 0 1 0-5.538 0 2.77 2.77 0 0 0 5.538 0Zm-2.77-12a2.77 2.77 0 1 1 0 5.538 2.77 2.77 0 0 1 0-5.538Z" fill="#1C1B1F"/></svg>
    });

    DotsThreeVerticalFill.displayName = "DotsThreeVerticalFill";

    export default DotsThreeVerticalFill;
    