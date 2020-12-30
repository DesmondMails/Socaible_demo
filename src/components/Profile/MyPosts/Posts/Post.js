import React from 'react'
import style from './Post.module.css'


const Post = (props) => {
    return(
    <div className={style.content}>
        <div className={style.item}>
            <img src='https://c8.alamy.com/comp/GBYEGJ/theatre-ancient-world-roman-theatre-mask-2nd-century-ad-worms-city-GBYEGJ.jpg'/>
            {props.message}
        </div>
        <span>likes</span> {props.likes}
    </div>
    )
}

export default Post;