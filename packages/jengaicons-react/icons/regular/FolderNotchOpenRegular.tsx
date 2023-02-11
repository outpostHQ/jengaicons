
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const FolderNotchOpenRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M4 10.461v14.77h19.91m-8.833-14.77h11.077v3.701" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M15.077 10.461 11.385 6.77H4v3.692M7.692 16.394h7.143l3.011-2.24H28L24.308 25.23H4l3.692-8.837Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/></svg>
    });

    FolderNotchOpenRegular.displayName = "FolderNotchOpenRegular";

    export default FolderNotchOpenRegular;
    