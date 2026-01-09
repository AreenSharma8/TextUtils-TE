import React, {useState} from 'react'

export default function TextForm(props) {
    const handleClick = () => {
        setText(text.toUpperCase());
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState("");
  return (
    <>
        <div className="mb-3">
            <textarea className="form-control" value={text} placeholder='Enter text here' onChange={handleOnChange} id="Textbox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleClick}>Convert to Uppercase</button>
    </>
  )
}
