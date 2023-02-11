
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const CircleWavyQuestionRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M16 22.069a1.38 1.38 0 1 0 0-2.759 1.38 1.38 0 0 0 0 2.759Z" fill="#1C1B1F"/><path d="m15.93 4.047-3.396 2.64H7.112v4.999L4 15.836l3.112 3.63v5.092h5.422l3.395 3.395 3.207-3.395h5.893v-5.092L28 15.836l-2.97-4.15V6.688h-5.895l-3.206-2.64Z" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12.917 13.014A3.083 3.083 0 1 1 16 16.097v1.44" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    CircleWavyQuestionRegular.displayName = "CircleWavyQuestionRegular";

    export default CircleWavyQuestionRegular;
    