import React, { useState } from 'react'
import './ColorBox.css'
export default function ColorBox (props){
    
    const onchange = (color) =>{
        props.onColoredite(color)
    }
        let { color } = props
        return (
            <div className='color-box' style={{ backgroundColor: color }}
                onClick={()=> onchange(props.color)}
            ></div>
        )
    }