
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const TennisBallFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M5.006 15.227C5.51 9.442 10.119 4.833 15.905 4.33a11.821 11.821 0 0 1-10.9 10.898ZM16.01 28.246c-5.87-.46-10.554-5.143-11.014-11.013A13.821 13.821 0 0 0 17.91 4.32c5.87.46 10.553 5.143 11.013 11.013a13.821 13.821 0 0 0-12.912 12.913Zm2.005-.009c5.785-.504 10.394-5.113 10.898-10.898a11.821 11.821 0 0 0-10.898 10.898Z" fill="#1C1B1F"/></svg>
    });

    TennisBallFill.displayName = "TennisBallFill";

    export default TennisBallFill;
    