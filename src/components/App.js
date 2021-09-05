import React, { useState} from "react";
import '../styles/App.css';

const App = ({slides}) => {
  let [counter,setCounter] = useState(0);
 

  let handleRestart = ()=>{
    if(counter!=0){
      setCounter(0);
    }
  }

  let handlePrev=()=>{
    if(counter>0){
      setCounter(--counter);
    }
    
  }
    
  let handleNext=()=>{
    
    if(counter<slides.length-1){
      setCounter(++counter);
    }
    
  }
  

  return (
    <>
     <div id="navigation">
     <button onClick={handleRestart} data-testid="button-restart" disabled={counter==0?true:null}>Restart</button>
      <button onClick={handlePrev} data-testid="button-prev" disabled={counter==0?true:null}>Prev</button>
      <button onClick={handleNext} data-testid="button-next" disabled={counter==slides.length-1?true:null} >Next</button>

     </div>
      
      <h1 id="h" data-testid="title">{slides[counter].title}</h1>
      <p data-testid="text">{slides[counter].text}</p>
      
    </>
  )
}


export default App;
