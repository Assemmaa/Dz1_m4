import React from "react";
import style from './text.module.css'

const Text = ({text}) => {
    return (
        <div>
            <h2 className={style.text}>{text}</h2>
        </div>
    )
}
export default Text