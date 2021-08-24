import React, { Component } from 'react'
import "./style.css"
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
       lista:[] 
       }
  }
componentDidMount(){
  let url='https://sujeitoprogramador.com/rn-api/?api=posts'
  fetch(url)
  .then((resposta)=>resposta.json())
  .then((json)=>{
    let state=this.state
    state.lista=json;
    this.setState(state)
    console.log(json)
  })
  .catch((e)=>console.log(e))
  

}
 
  render() { 
    return ( 
    
    
    <div>
      <header>
          React Dicas
      </header>


      {this.state.lista.map((item)=>{
        return (

        <div className="container">

  
        <article className="artigo">
        <h2 className="titulo">{item.titulo}</h2>
         <img className="img" src={item.capa} alt="Capa"/>
          <p className="subtitulo">{item.subtitulo}</p>
        </article>
        </div>)
      })}
    </div> );
  }
}
 
export default App;