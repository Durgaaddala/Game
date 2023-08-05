import React, { Component } from 'react'

export class Game extends Component {
    
    
            constructor(){
                super();
                this.state={time:10,score:0}
            }
            handleClick(){
                if(this.state.time!=0){
                this.setState({
                      score:this.state.score+1
                })
            }}
            handleClick1(){
                this.setState({
                    time:10,
                    score:0,
                    message:''
                })
            }
            componentDidMount(){
                this.interval=setInterval(this.tick,1000);
            }
            tick=()=>{
                if(this.state.time==0)
                {
                     this.setState({
                           message:"Enough I can't be beaten by you",
                           
                     })
                   
                }
                
                else
                {
                    this.setState({
                        time:this.state.time-1,
                    })
                }
      
                
            }
          render() {
            return (
              <div>
                   <p>Click the picture as many times as you can in {this.state.time} wacky seconds!</p>
                    <img onClick={this.handleClick.bind(this)} src="https://wallpapers.com/images/hd/cartoon-pictures-99b9skxa9r0o80xm.jpg"/>
                    <p>Score:{this.state.score}</p> 
                    <p>{this.state.message}</p> 
                    
                    <button onClick={this.handleClick1.bind(this)}>Restart</button>
              </div>
            )
          }
        }
        
    
   

export default Game