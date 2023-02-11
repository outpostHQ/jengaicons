
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const CaretRightRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M21.646 15.646 10.854 4.854a.5.5 0 0 0-.854.353v21.586a.5.5 0 0 0 .854.353l10.792-10.792a.5.5 0 0 0 0-.708Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    CaretRightRegular.displayName = "CaretRightRegular";

    export default CaretRightRegular;
    