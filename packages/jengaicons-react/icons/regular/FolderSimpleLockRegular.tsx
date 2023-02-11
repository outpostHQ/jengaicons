
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const FolderSimpleLockRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M4 10.077v15.538h9.57M16 10.077h12v2.841" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="m16 10.077-4-3.692H4v3.692M19 20.115h9v5.5h-9v-5.5ZM21 18.615a2.5 2.5 0 1 1 5 0v1.5h-5v-1.5Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/></svg>
    });

    FolderSimpleLockRegular.displayName = "FolderSimpleLockRegular";

    export default FolderSimpleLockRegular;
    