import React from 'react'
import "./Star.scss"

const Star = ({rating}) => {
    return (
        <>
            <div class="Stars" style={{"--rating":`${rating}`}} aria-label="Rating of this product is 2.3 out of 5."></div>
        </>
    )
}

export default Star
