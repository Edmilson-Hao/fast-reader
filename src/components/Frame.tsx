import React, { useState} from 'react'
import fastRead from './getString'

interface FrameProps {

}

export default function Frame () {

    const [ getText, setGetText ] = useState('')

    return (
        <div style={{backgroundColor: 'grey', height: '100vh'}}>
            <h1 id='shownText'>Hello World!</h1>
            <textarea id='textArea' onChange={e => setGetText(e.target.value)}></textarea>
            <br />
            <button onClick={_ => fastRead()}>Read</button>
        </div>
    )
}