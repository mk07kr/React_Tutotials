import React ,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Set Text here');
    const ChangeUpCase= ()=>{
        let newText = text.toUpperCase();
        console.log(newText);
        setText(newText);
    }
    const ChangeLwrCase= ()=>{
        let newText = text.toLowerCase();
        console.log(newText);
        setText(newText);
    }
    const onChange= (event)=>{
        
        setText(event.target.value);
    }
  return (
    <div>
   <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={onChange} id="myBox" rows="7"></textarea>
  <button className="btn btn-primary" onClick={ChangeUpCase}>Convert UpperCase</button>
   <button className="btn btn-secondary mx-3" onClick={ChangeLwrCase}>Convert LowerCase</button>
</div>
    </div>
  )
}

TextForm.defaultProps={
    heading:"Enter heading"
};