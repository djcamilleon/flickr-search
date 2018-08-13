import React from 'react'

const UrlToImage = props => {

    const { imgInfo, height } = props

    const url = `https://farm${imgInfo.farm}.staticflickr.com/${imgInfo.server}/${imgInfo.id}_${imgInfo.secret}.jpg`
    
    /* 
    console.log(imgInfo.farm, imgInfo.server, imgInfo.id, imgInfo.secret, height)
    console.log(url)
    */    

     return (
        <div>
            <img src={url} alt={url} height={height + 'px'}/>
        </div>
    )
}

export default UrlToImage