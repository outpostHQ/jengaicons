
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ChatFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M27.96 4.781h-22a1 1 0 0 0-1 1v19.904a1 1 0 0 0 1.63.777l4.399-3.569a1 1 0 0 1 .63-.224H27.96a1 1 0 0 0 1-1V5.781a1 1 0 0 0-1-1Z" fill="#1C1B1F"/></svg>
    });

    ChatFill.displayName = "ChatFill";

    export default ChatFill;
    