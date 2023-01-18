import React, { useState } from 'react'


export default function Textform(props) {
    const handleUpChange = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("Please add text here:");

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onChange={handleUpChange}>Convert to Uppercase</button>
        </div>
    )
}