
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const FolderFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M5.46 5.283a1 1 0 0 0-1 1v19a1 1 0 0 0 1 1h23a1 1 0 0 0 1-1v-14a1 1 0 0 0-1-1h-10a1 1 0 0 0-.293-.707l-4-4a1 1 0 0 0-.707-.293h-8Zm1 4v-2h6.586l2 2H6.46Z" fill="#1C1B1F"/></svg>
    });

    FolderFill.displayName = "FolderFill";

    export default FolderFill;
    