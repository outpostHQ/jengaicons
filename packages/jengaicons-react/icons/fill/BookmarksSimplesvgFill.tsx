
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const BookmarksSimplesvgFill =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = 32} = props;

        return  <svg style={{width: size, height: size}} ref={ref} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fillRule="evenodd" clip-rule="evenodd" d="M11.905 3.283a1 1 0 1 0 0 2H25.06v18.956a1 1 0 1 0 2 0V4.283a1 1 0 0 0-1-1H11.905ZM7.861 8.827V27.29a.5.5 0 0 0 .798.401l6.016-4.462a.5.5 0 0 1 .598.001l5.942 4.454a.5.5 0 0 0 .8-.4V8.826a.5.5 0 0 0-.5-.5H8.361a.5.5 0 0 0-.5.5Z" fill="#1C1B1F"/></svg>
    });

    BookmarksSimplesvgFill.displayName = "BookmarksSimplesvgFill";

    export default BookmarksSimplesvgFill;
    