
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const CursorTextRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M13.044 15.956h6.021" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10.032 6H13a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-2.968M21.968 6H19a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h2.968" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round"/></svg>
    });

    CursorTextRegular.displayName = "CursorTextRegular";

    export default CursorTextRegular;
    