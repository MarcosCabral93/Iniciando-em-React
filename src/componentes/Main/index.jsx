import React, { Component } from 'react'
import Lista from '../Lista/Lista';
class Main extends Component {
    constructor(props){
        super(props)
        this.state={
            feed:[
            {id:1, nome:"marcos", texto:"parabens"},
            {id:2, nome:"paulo", texto:"oi"},
            {id:3, nome:"martins", texto:"salve"},
            {id:4, nome:"cabral", texto:"tchau"},
        ]}
        
    }
    

    render() { 
        return (
            <div>
               {this.state.feed.map((item)=>{
                   return ( 
                   <div> <Lista id={item.id} nome={item.nome} texto={item.texto} /> <hr/>
                   </div>
                   )
               })} 
              
               

            </div>
          );
    }
}
 
export default Main;