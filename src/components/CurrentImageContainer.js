import React from 'react'
import UrlToImage from './UrlToImage'
import {Link} from 'react-router-dom'
import '../singleImage.css'

const CurrentImageContainer = props => {

    const { currentImage } = props
    
    if(!currentImage.id) return null

    return (
        <div>
            <Link to='/results'>
                <button class="resultsButton">
                    Return to Search Results
                </button>
            </Link>            

            <UrlToImage 
                imgInfo={currentImage}
                height="425"            
            />
        </div>
    )
}

export default CurrentImageContainer