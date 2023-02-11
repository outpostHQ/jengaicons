
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const TreeEvergreenFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M16.536 5.461a.5.5 0 0 1 .848 0l6.071 9.714a.5.5 0 0 1-.424.765h-3.055l5.143 6.901a.5.5 0 0 1-.401.8H17.96v5.142a1 1 0 0 1-2 0V23.64H9.202a.5.5 0 0 1-.4-.799l5.142-6.9h-3.055a.5.5 0 0 1-.424-.766l6.071-9.714Z" fill="#1C1B1F"/></svg>
    });

    TreeEvergreenFill.displayName = "TreeEvergreenFill";

    export default TreeEvergreenFill;
    