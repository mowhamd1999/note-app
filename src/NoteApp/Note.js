import React, { useState } from 'react'
import './Note.css'
export default function Note(props) {

    const onRemove = (id) => {
        props.onremove(id)
    }
    let { title, inputColor } =props
    return (
        <div className='content'
            onClick={()=> onRemove(props.id)}
            style={{ backgroundColor: inputColor }}>
            {title}
        </div>
    )
}
