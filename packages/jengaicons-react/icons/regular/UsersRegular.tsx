
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const UsersRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M11.146 18.278a5.35 5.35 0 1 0 0-10.702 5.35 5.35 0 0 0 0 10.702ZM19.292 18.278a5.35 5.35 0 0 0 0-10.702" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M18.292 25.424a7.146 7.146 0 1 0-14.292 0M26.438 25.424c0-3.947-3.2-7.146-7.146-7.146" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    UsersRegular.displayName = "UsersRegular";

    export default UsersRegular;
    