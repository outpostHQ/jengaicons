
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const GitlabLogosvgFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="m27.5 13.142 1.462 5.454-11.786 8.455-12.299-8.455L6.5 13.142" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 13.142H6.5l2-7 3.5 7ZM22 13.142h5.5l-2-7-3.5 7Z" fill="#1C1B1F" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/><path d="M22 13.142H12l5 14 5-14Z" fill="#1C1B1F" stroke="#1C1B1F" strokeLinejoin="round"/></svg>
    });

    GitlabLogosvgFill.displayName = "GitlabLogosvgFill";

    export default GitlabLogosvgFill;
    