
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ChartBarFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M20.388 5.703a1 1 0 0 0-1 1v3.76H13.6a1 1 0 0 0-1 1v4.76H6.88a1 1 0 0 0-1 1v7.64h-.92a1 1 0 1 0 0 2h24a1 1 0 0 0 0-2h-1.92V6.703a1 1 0 0 0-1-1h-5.652Zm-5.788 6.76v12.4h4.72v-12.4H14.6Zm-6.72 12.4v-6.64h4.72v6.64H7.88Z" fill="#1C1B1F"/></svg>
    });

    ChartBarFill.displayName = "ChartBarFill";

    export default ChartBarFill;
    