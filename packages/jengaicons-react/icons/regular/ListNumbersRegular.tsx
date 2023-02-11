
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ListNumbersRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M11.736 16.273H27M11.736 7.55H27M11.736 24.995H27M5.194 13.547V5.915L3.243 7.158M3 19.425a2.072 2.072 0 0 1 3.83 1.101c0 .29-.052.5-.229.803C6.424 21.631 3 26.085 3 26.085h3.83" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    ListNumbersRegular.displayName = "ListNumbersRegular";

    export default ListNumbersRegular;
    