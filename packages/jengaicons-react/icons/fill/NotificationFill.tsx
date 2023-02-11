
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const NotificationFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M27.06 9.105a2.922 2.922 0 1 1-5.843 0 2.922 2.922 0 0 1 5.843 0ZM7.86 6.853a1 1 0 0 0-1 1v17.53a1 1 0 0 0 1 1h17.53a1 1 0 0 0 1-1v-8.765a1 1 0 0 0-2 0v7.765H8.86V8.853h7.765a1 1 0 1 0 0-2H7.86Z" fill="#1C1B1F"/></svg>
    });

    NotificationFill.displayName = "NotificationFill";

    export default NotificationFill;
    