import './Heart.css'
import { ImHeart } from "react-icons/im";
import { FaRegHeart } from 'react-icons/fa'
import { useState } from 'react';

function Heart() {

    const [liked, setLiked] = useState(false)
    const handleClick = () => {
        if(liked === true){
            setLiked(false)
        } else {
            setLiked(true)
        }
    }

  return (
    <div onClick={handleClick}> 
        {liked === true ? <ImHeart className='heart' /> : <FaRegHeart className='heart'/>}
    </div>
  )
}

export { Heart }