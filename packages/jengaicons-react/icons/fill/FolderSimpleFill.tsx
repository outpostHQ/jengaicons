
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const FolderSimpleFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M27.96 10.744H17.35a1 1 0 0 1-.677-.265l-3.426-3.162a1 1 0 0 0-.678-.265H5.96a1 1 0 0 0-1 1v16.462a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-12.77a1 1 0 0 0-1-1Z" fill="#1C1B1F"/></svg>
    });

    FolderSimpleFill.displayName = "FolderSimpleFill";

    export default FolderSimpleFill;
    