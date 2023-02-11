
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const FolderSimpleDottedRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M4 11.23V26h24V11.23H16" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke-dasharray="4 4"/><path d="m16 11.23-3.856-3.559a.5.5 0 0 0-.34-.133H4.5a.5.5 0 0 0-.5.5v3.193" stroke="#1C1B1F" strokeWidth="2"/></svg>
    });

    FolderSimpleDottedRegular.displayName = "FolderSimpleDottedRegular";

    export default FolderSimpleDottedRegular;
    