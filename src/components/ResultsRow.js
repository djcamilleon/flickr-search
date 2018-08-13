import React from 'react'
import UrlToImage from './UrlToImage'
import {Link} from 'react-router-dom'

const ResultsRow = props => {

    const {imgInfo, changeState} = props

    const rowStyle = {
        cursor: 'hand'
    }

    const handleClick = () => changeState('currentImage', imgInfo)

    return (
    
        <tr onClick={handleClick}  >
            <td>
                <Link to='/image'>
                    <UrlToImage 
                        imgInfo={imgInfo}
                        height="40"
                    />
                </Link>
            </td>
            <td>
                <Link to='/image'>
                    {imgInfo.title}
                </Link>
            </td>
        </tr>
   )
}

export default ResultsRow