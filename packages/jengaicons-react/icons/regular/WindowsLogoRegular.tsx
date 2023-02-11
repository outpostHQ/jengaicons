
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const WindowsLogoRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M17.09 6 28 4v9.818H17.09V6ZM17.09 18.182H28V28l-10.91-2v-7.818ZM4 18.182h8.727v7.041l-8.727-2v-5.041ZM4 8.777l8.727-2v7.041H4V8.777Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/></svg>
    });

    WindowsLogoRegular.displayName = "WindowsLogoRegular";

    export default WindowsLogoRegular;
    