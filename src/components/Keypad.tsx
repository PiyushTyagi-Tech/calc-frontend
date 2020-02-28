import React, { Component } from "react";


export default class Keypad extends Component<{}, {}> {
   state  = {
      ButtonPressed: ''
    }
   ResultClick = (e :any) => {
      this.setState({ButtonPressed: e.target.name});
      if(e === "="){
      console.log("hii");
   }
      
      else{
         this.setState({
            ButtonPressed: this.state.ButtonPressed+ e
          })
      
         }
   }

   render(){
       return(   
        <div className="calculator">
           <div className="output">
           <p>   {this.state.ButtonPressed}</p>

              </div>
                <div className="keypad">
                  
           
            
                    <button name="AC" className="dark-gray" onClick={this.ResultClick} >AC</button>
                    <button name="back"  className="dark-gray" onClick={this.ResultClick}>back</button> 
 
                    <button name="%"  className="dark-gray" onClick={this.ResultClick}> %</button>
                    <button name="/"  className="dark-gray"onClick={this.ResultClick}>/</button>
                 
                    <button name="7"   className="gray"onClick={this.ResultClick}>7</button>
                    <button name="8" className="gray"onClick={this.ResultClick}>8</button>
                    <button name="9" className="gray" onClick={this.ResultClick} >9</button>
                    <button name="+" className="dark-gray" onClick={this.ResultClick}>+</button>
    
    
                    <button name="4" className="gray" onClick={this.ResultClick}>4</button>
                    <button name="5" className="gray"onClick={this.ResultClick}>5</button>
                    <button name="6" className="gray" onClick={this.ResultClick}>6</button>
                    <button name="-" className=" dark-gray" onClick={this.ResultClick}>-</button>
    
                    <button name="1" className="gray" onClick={this.ResultClick}>1</button>
                    <button name="2" className="gray" onClick={this.ResultClick}>2</button>
                    <button name="3" className="gray" onClick={this.ResultClick}>3</button>
                    <button name="*" className="dark-gray" onClick={this.ResultClick}>x</button>
    
    
                    <button name="." className="orange" onClick={this.ResultClick}>.</button>
                    <button name="0" className="gray" onClick={this.ResultClick}>0</button>
                    <button className="orange" autoFocus name="=" onClick={this.ResultClick} >=</button>
                    <button name="swap" className="orange" >sci</button><br/>
                </div>
                
                </div>
       )
       }
    }

