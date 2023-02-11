
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const PrescriptionFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M8.295 3.283c-.587 0-1.063.476-1.063 1.062v20.776a1 1 0 1 0 2 0v-7.838h4.04l7.183 7.182-3.111 3.11a1 1 0 1 0 1.414 1.415l3.11-3.111 3.112 3.111a1 1 0 0 0 1.414-1.414l-3.11-3.111 3.11-3.111a1 1 0 0 0-1.414-1.415l-3.111 3.112-5.873-5.874a7 7 0 0 0-1.218-13.894H8.295Zm5.393 12h1.09a5 5 0 0 0 0-10H9.232v10H13.688Z" fill="#1C1B1F"/></svg>
    });

    PrescriptionFill.displayName = "PrescriptionFill";

    export default PrescriptionFill;
    