import React, { Component } from 'react';
import imgd from './assets/images/cronometro.png'
import './style.css'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {

            cronometro: 0,
            botao:"start"
        };
        this.temporizador=null
        this.iniciar=this.iniciar.bind(this)
        this.finalizar=this.finalizar.bind(this)
    } 
    iniciar(){
        let state=this.state
        if(this.temporizador!=null){
            clearInterval(this.temporizador)
            this.temporizador=null
           state.botao="start"
         }else{
            //renderiza a cada 1 milisguno
            this.temporizador=setInterval(()=>{
                let state=this.state
                state.cronometro+=0.1
                this.setState(state)
            },100)
            state.botao="pausar"
        }
        
    }

    finalizar(){
        if(this.temporizador!=null){
            clearInterval(this.temporizador)
            this.temporizador=null}
        let state=this.state
        state.botao="start"
        state.cronometro=0
        this.setState(state)
    }
    render() { 
        return (
            <div className="container">
               <div>
                   <h1 className="titulo">Cronometrando com React</h1>
                   <img src={imgd} alt="cronometro" className="imagem" />
                   <h2 className="texto">{this.state.cronometro.toFixed(1)}</h2>
               </div>
                <div> 
                    <button onClick={this.iniciar}>{this.state.botao}</button>
                    <button onClick={this.finalizar}>Zerar</button>
                </div>
            </div>   
        );
    }
}
 
export default App ;