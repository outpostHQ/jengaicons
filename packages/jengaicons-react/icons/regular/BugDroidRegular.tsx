
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const BugDroidRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M28 16.592H4" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M19.5 13.592a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM12.5 13.592a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="#1C1B1F"/><path d="m6.663 5.477 3.803 3M25.48 5.477l-3.802 3" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="7.973" y="6.661" width="16.053" height="19.862" rx="8.027" stroke="#1C1B1F" strokeWidth="2"/></svg>
    });

    BugDroidRegular.displayName = "BugDroidRegular";

    export default BugDroidRegular;
    