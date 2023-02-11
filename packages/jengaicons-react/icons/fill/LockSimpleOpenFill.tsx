
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const LockSimpleOpenFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M15.644 3.283a6 6 0 0 0-6 6v5.105H6.592a1 1 0 0 0-1 1v11.895a1 1 0 0 0 1 1h20.737a1 1 0 0 0 1-1V15.388a1 1 0 0 0-1-1H11.644V9.283a4 4 0 0 1 4-4h2.632a4 4 0 0 1 4 4v.053a1 1 0 1 0 2 0v-.053a6 6 0 0 0-6-6h-2.632Z" fill="#1C1B1F"/></svg>
    });

    LockSimpleOpenFill.displayName = "LockSimpleOpenFill";

    export default LockSimpleOpenFill;
    