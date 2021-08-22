import React, { Component } from 'react'
class Lista  extends Component {
    
    render() { 
        return ( 
            <div key={this.props.id}>
                <h1 >{this.props.nome}</h1>
                <p>{this.props.texto}</p>
            </div>
         );
    } 
}
 
export default Lista ;