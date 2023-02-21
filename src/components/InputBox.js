import React, { useState } from 'react';
// import JoditEditor from 'jodit-react';
// import { useRef } from 'react';

function InputBox() {

    // const editor = useRef(null);
    const [text, setText] = useState(' ');
    const HandleUpcase = () => {
        console.log("clicked");
        setText(null);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const HandleChange = (event) => {
        console.log("clicked 1");
        setText(event.target.value);
    }
    return (
        <>
            <div className="container my-3">
                <div className="form-floating">
                    {/* <JoditEditor ref={editor} value={text} /> */}
                    <textarea className="form-control" id="textarea" onChange={HandleChange} value={text}></textarea>
                </div>
                <button type="button" className="btn btn-primary my-3" onClick={HandleUpcase}>Change to Upper Case</button>
            </div>
        </>
    );
}

export default InputBox;