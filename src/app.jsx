import React, { Component } from 'react'



class App extends Component {
  constructor(props){
    super(props)
    this.state={
      form:{
      email: "",
      senha: "",
      sexo: ""
    }}
    this.trocaForm=this.trocaForm.bind(this)
    
  }
    //o name dos inputs tem que ser o mesmo do state
    trocaForm(e){
        let form=this.state.form;
        form[e.target.name]= e.target.value
        this.setState({form:form})
          }
    render() { 
        return (
            
          <div>
           <input type="email" name="email" value={this.state.form.email}
            onChange={this.trocaForm}/>
           <input type="password" name="senha" value={this.state.form.senha}
            onChange={this.trocaForm}/>
            <select  name="sexo" value={this.state.form.sexo} onChange={this.trocaForm} >
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
            </select>
            <h3>{this.state.form.email}</h3>
            <h3>{this.state.form.senha}</h3>
            <h3>{this.state.form.sexo}</h3>
          </div>
        )}
}
 
export default App