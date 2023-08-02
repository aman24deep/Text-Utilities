import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearText = () => {
        let newText = "";
        setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);

    }

    const handleCopy = () => {
        var text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
    }
    let myStyleLight = {
            color : 'black',
            backgroundColor : 'white'
        } 
    let myStyleDark = {
            color : '#FFCA2C',
            backgroundColor : '#483285'
        } 
    
    const capitalizeLetter = () =>{
        var sentences = text.split('. ');
        for (var i = 0; i < sentences.length; i++) {
            if (sentences[i].length > 0) {
              sentences[i] = sentences[i][0].toUpperCase() + sentences[i].substring(1);
            }
          }
        
        setText(sentences.join('. '));
    }
    // the below line consist of the state
    const [text, setText] = useState("")
    console.log(text?0:1)
    return (
        <>
            <div> 
                <h1 className= {`text-${props.mode==="dark"?"light":"dark"}`}>{props.heading}</h1>
                <div className="mb-3">
                        <textarea style={props.mode==="dark"?myStyleDark:myStyleLight} className="form-control" id="myBox" rows="9" value={text} onChange={handleOnChange}></textarea>
                </div>
                <div className="container">
                    <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
                    <button className="btn btn-primary mx-4" onClick={handleLoClick}>Convert to LowerCase</button>
                    <button className="btn btn-success" onClick={handleClearText}>Clear Text</button>
                    <button onClick={speak} className="btn btn-warning mx-4 my-2">Text to Speech</button>
                    <button onClick={handleCopy} className="btn btn-primary mx-2">Copy Text</button>
                    <button onClick={capitalizeLetter} className="btn btn-primary mx-2">Capitalize</button>
                </div>

            </div>
            <div className={`container my-3 text-${props.mode==="dark"?"light":"dark"} `}>
                <h1>Your Text Summary:</h1>
                <p>{text?text.split(" ").length:0} words, and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Requires To Read </p>
                <h2>Text Preview:</h2>
                <p>{text.length>0?text:"Enter Something to Preview"}</p>
            </div>
        </>
    )
}