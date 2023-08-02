import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const HexNum = (props) => {
  return <button style={{backgroundColor : props.HexCode}}> {props.HexCode}</button>
}

const app = (
  <div className='App'>
    <HexNum HexCode='#518cef'/>
    <HexNum HexCode='#a30dd0'/>
    <HexNum HexCode='#212cAf'/>
  </div>
)
ReactDOM.render(app, document.getElementById('root'))
