
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ChatTeardropFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M16.96 28.283c6.636 0 12.015-5.373 12.015-12 0-6.628-5.38-12-12.015-12a12.004 12.004 0 0 0-9.746 4.98 11.927 11.927 0 0 0-2.239 6.163v11.857a1 1 0 0 0 1 1H16.96Z" fill="#1C1B1F"/></svg>
    });

    ChatTeardropFill.displayName = "ChatTeardropFill";

    export default ChatTeardropFill;
    