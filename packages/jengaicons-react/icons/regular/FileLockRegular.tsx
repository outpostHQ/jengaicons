
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const FileLockRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M7 22.5h9V28H7v-5.5ZM9 21a2.5 2.5 0 0 1 5 0v1.5H9V21Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/><path d="M20.998 28H26V11.008L19.021 4H6v11.982" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M19.09 10.94V4.129l6.818 6.813h-6.819Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    FileLockRegular.displayName = "FileLockRegular";

    export default FileLockRegular;
    