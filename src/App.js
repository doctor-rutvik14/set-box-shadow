import React,{useState, useRef} from 'react';
import './App.css';

function App() {
  const [Horizontal,setHorizontal] = useState(10);
  const [Vertical,setVertical] = useState(10);
  const [Blur,setBlur] = useState(10);
  const [Color,setColor] = useState("#808080");
  return (
    <div className="App">
    <h1 style={{textAlign:"center", marginBottom:"100px"}}>Set boxShadow</h1>
    <div className="Application">
      <div className="ranges">
        <label>Horizontal Length</label>
        <input type="range" min="-200" max="200" value={Horizontal} onChange = {(e) =>{setHorizontal(e.target.value)} }/>
        <label>Vertical Length</label>
        <input type="range" min="-200" max="200" value={Vertical} onChange = {(e) =>{setVertical(e.target.value)} }/>
        <label>Blur</label>
        <input type="range" min="0" max="100" value={Blur} onChange = {(e) =>{setBlur(e.target.value)} }/>
        <label>Color</label>
        <input type="color" value={Color} onChange = {(e) =>{setColor(e.target.value)} }/>
      </div>
      <div className="output">
        <div className="container" style={{boxShadow:`${Horizontal}px ${Vertical}px ${Blur}px ${Color}` }}>
        <p>boxShadow: {Horizontal}px  {Vertical}px  {Blur}px  {Color}</p>
        </div>
      </div>
    </div>
    </div>
  );
}
export default App;
