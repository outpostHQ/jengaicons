
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const CloudSnowRegular =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path d="M10.253 24.08a1.326 1.326 0 1 0 0-2.653 1.326 1.326 0 0 0 0 2.652ZM14.674 25.848a1.326 1.326 0 1 0 0-2.652 1.326 1.326 0 0 0 0 2.652ZM19.979 24.08a1.326 1.326 0 1 0 0-2.653 1.326 1.326 0 0 0 0 2.652ZM9.37 28.5a1.326 1.326 0 1 0 0-2.652 1.326 1.326 0 0 0 0 2.652ZM19.094 28.5a1.326 1.326 0 1 0 0-2.652 1.326 1.326 0 0 0 0 2.652Z" fill="#1C1B1F"/><path d="M12.01 9.212a5.306 5.306 0 1 0-1.319 10.447h8.149c1.936 0 3.878-.522 5.244-1.894.35-.351.695-.734 1.01-1.138a7.58 7.58 0 1 0-13.645-4.548" stroke="#1C1B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    });

    CloudSnowRegular.displayName = "CloudSnowRegular";

    export default CloudSnowRegular;
    