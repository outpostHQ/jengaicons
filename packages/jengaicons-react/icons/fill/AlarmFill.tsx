
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const AlarmFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M24.253 4.89a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.415l-4-4a1 1 0 0 1 0-1.415Zm3.078 12.707c0 5.728-4.643 10.371-10.371 10.371-5.728 0-10.371-4.643-10.371-10.37 0-5.728 4.643-10.371 10.37-10.371 5.729 0 10.372 4.643 10.372 10.37Zm-9.371-6.6a1 1 0 0 0-2 0v6.6a1 1 0 0 0 1 1h6.6a1 1 0 1 0 0-2h-5.6v-5.6ZM9.667 6.306A1 1 0 1 0 8.253 4.89l-4 4a1 1 0 1 0 1.414 1.415l4-4Z" fill="#1C1B1F"/></svg>
    });

    AlarmFill.displayName = "AlarmFill";

    export default AlarmFill;
    