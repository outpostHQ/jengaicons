
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const FilmStripFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M11.96 7.783h4v2h-4v-2Zm-6 0h4v2h-4v-2Zm4 16h-4v2h4v-2Zm2 0v2h4v-2h-4Zm6 0v2h4v-2h-4Zm6 0v2h4v-2h-4Zm0-14h4v-2h-4v2Zm-2 0v-2h-4v2h4Zm7-4h-24a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1v-20a1 1 0 0 0-1-1Z" fill="#1C1B1F"/></svg>
    });

    FilmStripFill.displayName = "FilmStripFill";

    export default FilmStripFill;
    