
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const SidebarSimpleFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M3.96 6.533a1 1 0 0 1 1-1h24a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1h-24a1 1 0 0 1-1-1v-20Zm2 1h5v18h-5v-18Z" fill="#1C1B1F"/></svg>
    });

    SidebarSimpleFill.displayName = "SidebarSimpleFill";

    export default SidebarSimpleFill;
    