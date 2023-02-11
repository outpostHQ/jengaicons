
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const FileSearchRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="m17.974 20.975 2 2M15.5 22a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 28h20V11.008L19.021 4H6v24Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/><path d="M19.09 10.94V4.129l6.818 6.813h-6.819Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    FileSearchRegular.displayName = "FileSearchRegular";

    export default FileSearchRegular;
    