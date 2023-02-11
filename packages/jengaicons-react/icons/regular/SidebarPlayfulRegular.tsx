
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const SidebarPlayfulRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M11 6.5v20M28 19.29V6.5H4v20h15.17" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round" d="m15.04 14.393 2.266-3.924 3.924 2.265-2.266 3.924zM24.154 20.379l4.389 4.388-5.995 1.607 1.606-5.995Z"/></svg>
    });

    SidebarPlayfulRegular.displayName = "SidebarPlayfulRegular";

    export default SidebarPlayfulRegular;
    