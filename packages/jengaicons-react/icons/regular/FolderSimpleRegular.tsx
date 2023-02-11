
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const FolderSimpleRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M4 10.461v14.77h24V10.462H16" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 10.461 12 6.77H4v3.692" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/></svg>
    });

    FolderSimpleRegular.displayName = "FolderSimpleRegular";

    export default FolderSimpleRegular;
    