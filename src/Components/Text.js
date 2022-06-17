import React, { useState } from 'react'

import jsPDF from 'jspdf'


export default function Text(props) {
    
    const [text, setText] = useState();
    const [preview, previewText] = useState();
    


    const UpperCase = () => {
        let newtext = text.toUpperCase();
        previewText(newtext)
        props.showAlert("Your Text Converted into UpperCase","success");
    }

    const LowerCase = () => {
        let newtext = text.toLowerCase();
        previewText(newtext)
        props.showAlert("Your Text Converted into LowerCase","success");
    }

    const HandleCopy = () => {
        var newtext = document.getElementById("pbox");
        newtext.select();
        navigator.clipboard.writeText(newtext.value);
        props.showAlert("Your Text Copied in Clipboard","success");
    }

    const Clear = () => {
        let newtext = ("")
        setText(newtext)
        previewText(newtext)
        props.showAlert("Text Cleared","success");
    }

    const HandleExtraSpaces = () => {
        let newtext = preview.split(/[ ]+/);
        previewText(newtext.join(" "))
    }

    const Read = () => {
        var msg = new SpeechSynthesisUtterance();
        var voices = window.speechSynthesis.getVoices();
        msg.voice = voices[2];
        msg.text = text;
        msg.lang = 'gu-IN';
        speechSynthesis.speak(msg);
        props.showAlert("Text Voiced Start","warning");
    }

    const HandlePdf = () => {
        var doc = new jsPDF('p', 'pt', 'a4');
        doc.html(document.getElementById("pbox"), {
            callback: function(pdf){
                doc.save("previewText.pdf");
            }
        });
    }

    const HandleOnChange = (event) => {
        setText(event.target.value)
    }
    return (
        <>
            <div className="container my-5" style={{color: props.mode==='light'?'black':'white'}}>
                <div className='row'>
                    <div className="mb-3 col-sm-4">
                        <h5>Enter Your Text For design and Utilize</h5>
                        <textarea className="form-control" id="tbox" rows="17"  style={{backgroundColor: props.mode==='light'?'white':'gray' , color: props.mode==='light'?'black':'white'}} onChange={HandleOnChange} value={text}></textarea>
                        <h2>Your Text Summary</h2>
                   <p>{ text ? text.length : 0} characters</p>
                    </div>
                    <div className="mb-2 col-sm-4 d-grid" >
                        <button type='button' className="btn btn-warning my-2 btn-block" onClick={LowerCase}>Convert To LowerCase</button>
                        <button type='button' className="btn btn-warning my-2 btn-block" onClick={UpperCase}>Convert To UpperCase</button>
                        <button type='button' className="btn btn-warning my-2 btn-block" onClick={Clear}>Clear Text</button>
                        <button type='button' className="btn btn-warning my-2 btn-block" onClick={Read}>Read And Listen</button>
                        <button type='button' className="btn btn-warning my-2 btn-block" onClick={HandleCopy}>Copy Text form Preview</button>
                        <button type='button' className="btn btn-warning my-2 btn-block" onClick={HandleExtraSpaces}>Remove Extra Spaces</button>
                        <button type='button' className="btn btn-warning my-2 btn-block" onClick={HandlePdf}>Make a pdf</button>
                        <button type='button'  className="btn btn-warning my-2 btn-block">Translate the Text</button>
                        
                    </div>
                    <div className="mb-3 col-sm-4">
                        <h4>PREVIEW</h4>
                        <textarea className="form-control"  id="pbox" rows="20"  value={preview} style={{backgroundColor: props.mode==='light'?'white':'gray', color: props.mode==='light'?'black':'white' }}></textarea>
                    </div>
                </div>
                <div className="container my-4">
                    
                </div>
            </div>
        </>
    )
}
