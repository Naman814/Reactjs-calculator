import React, { useEffect, useRef, useState } from "react";
function App(){

  const [result,setResult]=useState('');

  const inputRef = useRef();

  useEffect(()=>{inputRef.current.focus()});

    function handleClick(event){
      setResult(result+event.target.name); 
    }

    function Evalute(){ 
      try{
        // eslint-disable-next-line
      setResult(eval(result).toString());
      } catch(error){
          setResult("Error");
      }
    }


 
    return (
      <div className="cal-app">  
      <form>
        <input type="text" value={result} ref={inputRef} />
      </form>
  
      <div className="keypad">
          <button id="clear" className="button" onClick={()=>{setResult('')}}>Clear</button>
          <button id="backspace" className="button" onClick={()=>{setResult(result.slice(0,result.length-1))}}>C</button>
          <button name="+" className="button" onClick={handleClick} >+ </button>
          <button name="9" className="button" onClick={handleClick}>9 </button>
          <button name="8" className="button" onClick={handleClick}>8 </button>
          <button name="7" className="button" onClick={handleClick}>7 </button>
          <button name="-" className="button" onClick={handleClick}>- </button>
          <button name="6" className="button" onClick={handleClick}>6 </button>
          <button name="5" className="button" onClick={handleClick}>5 </button>
          <button name="4" className="button" onClick={handleClick}>4 </button>
          <button name="*" className="button" onClick={handleClick}>* </button>
          <button name="3" className="button" onClick={handleClick}>3 </button>
          <button name="2" className="button" onClick={handleClick}>2 </button>
          <button name="1" className="button" onClick={handleClick}>1 </button>
          <button name="/" className="button" onClick={handleClick}>/ </button>
          <button name="." className="button" onClick={handleClick}>. </button>
          <button name="0" className="button" onClick={handleClick}>0 </button>
          <button id="result" className="button" onClick={Evalute}>=</button>
     
      </div>
      </div>
    );

}

export default App;