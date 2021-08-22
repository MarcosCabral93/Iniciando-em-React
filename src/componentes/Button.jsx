import React, { Component } from 'react'
import './style.css'
class Button extends Component {
    
    render() { 
        return ( 
            <div>
               <button className='btn' onClick={this.props.onc}> Abrir Biscoito </button>
            </div>
         );
    }
}
 
export default Button;
