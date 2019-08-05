import React, { Component } from 'react';

class Form extends Component{

    state = {
        nome : "??"
    }

    updateName(evt) {
        this.setState({
          nome: evt.target.value
        });
    }

    render(){
        return(
            <div className="FormNome">
            <p>Oi, eu sou a {this.state.nome}</p>
            <p> Qual nome você escolhe para mim?</p>
            <input value={this.state.nome} onChange={evt => this.updateName(evt)}/>
            </div>
        )   
    }
}

export default Form;