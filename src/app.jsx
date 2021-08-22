import React, { Component } from 'react';
import Button from './componentes/Button';
import imgd from './assets/images/biscoito.png'
import './style.css'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            mensagem: ''
        };

        this.quebraBiscoito = this.quebraBiscoito.bind(this);

        this.frases = ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
 'O riso é a menor distância entre duas pessoas.', 
 'Deixe de lado as preocupações e seja feliz.',
 'Realize o óbvio, pense no improvável e conquiste o impossível.',
 'Acredite em milagres, mas não dependa deles.',
 'A maior barreira para o sucesso é o medo do fracasso.'];

    }
quebraBiscoito(){
    let state=this.state
    let nAleatorio=Math.floor(Math.random()* this.frases.length)
    state.mensagem=this.frases[nAleatorio]
    this.setState(state)
}

    render() { 
        return (
            <div className="container">
                <h1>Biscoito premiado</h1>
                <img src={imgd} alt=" " className="imagem"/>
               <Button className='btn' onc={this.quebraBiscoito}/>
               <h3 className='texto'>{this.state.mensagem}</h3>
            </div>   
        );
    }
}
 
export default App ;