
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const LockLaminatedOpenRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M5 17.478h22M5 21.052h22M5 24.68h22" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4.632 14.105h22.736V28H4.632V14.105Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/><path d="M9.684 14.105V9a5 5 0 0 1 5-5h2.632a5 5 0 0 1 5 5v.053" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round"/></svg>
    });

    LockLaminatedOpenRegular.displayName = "LockLaminatedOpenRegular";

    export default LockLaminatedOpenRegular;
    