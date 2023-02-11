
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const WindowsLogosvgFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="m18.05 6.424 10.91-2v9.819H18.05V6.424ZM18.05 18.606h10.91v9.818l-10.91-2v-7.818ZM4.96 18.606h8.727v7.041l-8.727-2v-5.04ZM4.96 9.201l8.727-2v7.042H4.96V9.2Z" fill="#1C1B1F" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/></svg>
    });

    WindowsLogosvgFill.displayName = "WindowsLogosvgFill";

    export default WindowsLogosvgFill;
    