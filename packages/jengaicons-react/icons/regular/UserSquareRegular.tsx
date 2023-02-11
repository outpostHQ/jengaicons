
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const UserSquareRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M4 4.5h24v24H4v-24Z" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/><path d="M16 22.11a4.784 4.784 0 1 0 0-9.568 4.784 4.784 0 0 0 0 9.569Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M22.39 28.5a6.39 6.39 0 0 0-12.78 0" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    UserSquareRegular.displayName = "UserSquareRegular";

    export default UserSquareRegular;
    