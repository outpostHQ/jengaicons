
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ProhibitFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M24.709 25.446a11.952 11.952 0 0 1-7.749 2.837c-6.628 0-12-5.373-12-12 0-2.954 1.067-5.658 2.837-7.749l16.912 16.912Zm1.414-1.414L9.211 7.12a11.952 11.952 0 0 1 7.749-2.837c6.627 0 12 5.373 12 12 0 2.954-1.067 5.658-2.837 7.749Z" fill="#1C1B1F"/></svg>
    });

    ProhibitFill.displayName = "ProhibitFill";

    export default ProhibitFill;
    