
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const FlaskRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M11.049 4.672h9.796M7.94 20.824c1.448-1.056 3.934-1.665 8.007.371 4.372 2.187 6.915 1.324 8.309.133" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12.883 4.672v7.66L4 27.329h24l-9.005-14.995v-7.66" stroke="#1C1B1F" strokeWidth="2" strokeLinejoin="round"/></svg>
    });

    FlaskRegular.displayName = "FlaskRegular";

    export default FlaskRegular;
    