import React, { useState } from 'react'
import './NoteApp.css'
import ColorBox from './ColorBox'
import Note from './Note'
export default function NoteApp() {
    const [Color, setColor] = useState(["#78eb95", "#eba478", "#ffffff", "#8f78eb", "#78ebdc", "#eb78c3"])
    const [notes, setnotes] = useState([])
    const [noteTitle, setnoteTitle] = useState('')
    const [inputColor, setinputColor] = useState('#fff')

    const onColor = (color) => {
        let Color = color;
        setinputColor(Color)
    }
    const removeAll = () => {
        setnoteTitle('')
        setnotes([])
    }
    const noteTitleHandler = (event) => {
        setnoteTitle(event.target.value)
    }
    const buttonHandler = (color) => {
        if (noteTitle !== '') {
            let newColors = {
                id: notes.length + 1,
                title: noteTitle,
                inputColor: inputColor
            }
            setnotes(prevState =>{
                return [...prevState, newColors]
            })
            setnoteTitle('')
            setinputColor('#fff')
        }
    }
    const onremoveHandler = (colorId) => {
        let newNotes = notes.filter(color => {
            return color.id !== colorId
        })
        setnotes(newNotes)
    }
    return (
        <div>
            <div className='container'>
                <input type="text" value={noteTitle} placeholder="Whats Note ?"
                    onChange={noteTitleHandler} style={{ backgroundColor: inputColor }}
                />
            </div>
            <div className='edit'>
                {Color.map(color => (
                    <ColorBox color={color} key={color} onColoredite={()=>onColor(color)} />
                ))}
                <button className='add' onClick={()=>buttonHandler(notes.id)} style={{ marginLeft: 160 }}>
                    +</button>
                <button className='remove' onClick={()=>removeAll(notes.id)}>-</button>
            </div>
            {notes.map(note => (
                <Note {...note} key={note} onremove={()=>onremoveHandler(note.id)}></Note>
            ))}
        </div>
    )
}

