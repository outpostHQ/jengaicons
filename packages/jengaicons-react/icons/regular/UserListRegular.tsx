
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const UserListRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M17.616 10.808H29M17.616 16.5H29M20.462 22.192H29M9.078 18.012a4.55 4.55 0 1 0 0-9.102 4.55 4.55 0 0 0 0 9.102Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M15.155 24.09A6.078 6.078 0 0 0 3 24.09" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    UserListRegular.displayName = "UserListRegular";

    export default UserListRegular;
    