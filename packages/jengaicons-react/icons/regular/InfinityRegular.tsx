
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const InfinityRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M13.918 18.276a4.286 4.286 0 1 1-3.632-6.561c.87 0 2.02.44 2.549.906.516.458 5.716 6.228 5.926 6.462l.018.018.21.206a4.286 4.286 0 1 0-.605-6.005" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round"/></svg>
    });

    InfinityRegular.displayName = "InfinityRegular";

    export default InfinityRegular;
    