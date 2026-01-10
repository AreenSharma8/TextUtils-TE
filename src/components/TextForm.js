import React, {useState} from 'react'

export default function TextForm(props) {
    const handleClickUppercase = () => {
        setText(text.toUpperCase());
    }
    const handleClickLowercase = () => {
        setText(text.toLowerCase());
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleClickClearText = () => {
        setText("");
    }
    
    const [text, setText] = useState("");

    const wordCount =
        text.trim().length === 0
        ? 0
        : text.trim().split(/\s+/).length;

  return (
    <>
        <div className="container">
            <div className="mb-3">
            <textarea className="form-control" value={text} placeholder='Enter text here' onChange={handleOnChange} id="Textbox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleClickUppercase}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClickLowercase}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClickClearText}>Clear Text</button>
        </div>
        <div className="conatiner my-4" >
            <h3>Summary</h3>
            <p>{wordCount} words and {text.length} characters</p>
            <p>Requires <span><b>{(0.006 * wordCount *60).toFixed(2)} seconds</b></span> to read the statement</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
    </>
  )
}
