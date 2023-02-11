
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const GenderIntersexRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M14.393 21.152a6.889 6.889 0 1 0 0-13.777 6.889 6.889 0 0 0 0 13.777ZM14.393 21.152V28.5M10.719 25.285h7.348M19.488 9.628l5.008-5.008M18.745 4.5h5.75v5.75" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    GenderIntersexRegular.displayName = "GenderIntersexRegular";

    export default GenderIntersexRegular;
    