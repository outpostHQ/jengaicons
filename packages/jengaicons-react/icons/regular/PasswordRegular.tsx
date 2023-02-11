
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const PasswordRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M4 6.924v18.152M12.067 11.966V16M8.235 14.752 12.067 16M9.698 19.265 12.068 16M14.437 19.265 12.067 16M15.9 14.752 12.066 16M24.168 11.966V16M20.336 14.752 24.168 16M21.798 19.265 24.168 16M26.538 19.265 24.168 16M28 14.752 24.168 16" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    PasswordRegular.displayName = "PasswordRegular";

    export default PasswordRegular;
    